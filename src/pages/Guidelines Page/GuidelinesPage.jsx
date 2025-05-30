import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const aircraftData = [
  {
    id: 1,
    type: 'Boeing 747',
    manualInstruction: 'The Boeing 747 manual covers pre-flight checks, cockpit procedures, engine start, systems operation, and emergency protocols.',
    maintenanceRecord: 'Maintenance record: Last major service on 2024-01-15; engines overhauled at 5000 flight hours; routine inspections every 1000 hours.',
  },
  {
    id: 2,
    type: 'Airbus A320',
    manualInstruction: 'The Airbus A320 manual includes flight deck preparation, FADEC management, landing gear operations, and abnormal procedures.',
    maintenanceRecord: 'Maintenance record: Hydraulic systems serviced on 2024-03-10; avionics upgraded; tire inspections every 500 hours.',
  },
];

const GuidelinesPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = query
    ? aircraftData.filter(item =>
        item.type.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const filtered = aircraftData.filter(item =>
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = type => {
    setQuery(type);
    setShowSuggestions(false);
    const filtered = aircraftData.filter(item => item.type === type);
    setResults(filtered);
  };

  return (
    <div className="pt-48 p-8">
      <div className="max-w-xl mx-auto mb-12">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-gray-900">Aircraft Lookup</h1>
        <div className="relative">
          <HiOutlineSearch className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
            onKeyDown={handleKeyDown}
            placeholder="Search aircraft..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-auto mt-1">
              {suggestions.map(item => (
                <li
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.type)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.type}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {results.length > 0 ? (
        results.map(item => (
          <section key={item.id} className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">{item.type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Manual Instructions</h3>
                <p className="text-gray-700 leading-relaxed">{item.manualInstruction}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Maintenance Record</h3>
                <p className="text-gray-700 leading-relaxed">{item.maintenanceRecord}</p>
              </div>
            </div>
          </section>
        ))
      ) : (
        <p className="text-center text-gray-500">Type an aircraft name and press Enter to view data.</p>
      )}
    </div>
  );
};

export default GuidelinesPage;
