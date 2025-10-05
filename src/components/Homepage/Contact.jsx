import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_th8rkl9',
      'template_tijwglb',
      form.current,
      'gjPUwHQLYFb5XEiX9'
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Get in Touch
        </h2>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg grid grid-cols-1 gap-8 md:grid-cols-2">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500 transition p-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500 transition p-2"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500 transition p-2"
                placeholder="What would you like to tell us?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Send Message
            </button>
          </form>

          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <iframe
              title="PSC Aeronautics Map"
              src="https://www.google.com/maps?q=Philippine%20State%20College%20of%20Aeronautics&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
