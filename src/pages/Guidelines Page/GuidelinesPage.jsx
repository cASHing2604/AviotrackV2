import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const guidelinesData = [
  { id: 1, title: 'Accessibility', description: 'Ensure all interactive elements are keyboard-accessible and include ARIA labels.' },
  { id: 2, title: 'Color Contrast', description: 'Use sufficient contrast ratios for text and backgrounds.' },
  { id: 3, title: 'Responsive Layout', description: 'Layouts should adapt smoothly across different screen sizes.' },
  { id: 4, title: 'Typography', description: 'Use a clear, legible font size of at least 16px for body text.' },
  { id: 5, title: 'Performance', description: 'Minimize bundle size and optimize images for faster load times.' },
  { id: 6, title: 'Security', description: 'Implement CSP headers, sanitize user input, and use HTTPS to secure data in transit and mitigate XSS/CSRF risks.' },
  { id: 7, title: 'Scalability', description: 'Design your application to handle increasing loads by using techniques like code splitting, lazy loading, and efficient state management.' },
];

const GuidelinesPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [expandedIds, setExpandedIds] = useState([]);

  const suggestions = query
    ? guidelinesData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const filtered = guidelinesData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = title => {
    setQuery(title);
    setShowSuggestions(false);
    setResults(guidelinesData.filter(item => item.title === title));
  };

  const toggleExpand = id => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="pt-48 flex justify-center p-8">
      <div className="w-full max-w-xl">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-gray-900">Guidelines</h1>
        <div className="relative mb-4">
          <HiOutlineSearch className="absolute h-5 w-5 left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
            onKeyDown={handleKeyDown}
            placeholder="Search guidelines..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-auto mt-1">
              {suggestions.map(item => (
                <li
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.title)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-4">
          {results.length > 0 ? (
            results.map(item => {
              const isExpanded = expandedIds.includes(item.id);
              const shortDesc = item.description.length > 100
                ? item.description.slice(0, 100) + '...'
                : item.description;

              return (
                <div key={item.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <h2 className="mb-2 text-2xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 mb-2">
                    {isExpanded ? item.description : shortDesc}
                  </p>
                  {item.description.length > 100 && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>
              );
            })
          ) : (query && !showSuggestions) ? (
            <p className="text-center text-gray-500">No guidelines match "{query}".</p>
          ) : (
            <p className="text-center text-gray-500">Type to see suggestions, press Enter to load results.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;
