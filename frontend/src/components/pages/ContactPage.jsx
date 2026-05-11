// src/pages/ContactPage.jsx
import { useState } from 'react';

const CONTACT_API = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/contact`
  : '/api/contact';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg('Unable to reach the server. Please try again later.');
      setStatus('error');
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-gray-900">Contact Me</h1>
        <p className="text-gray-600">
          Questions about the project or rental availability? Send a message.
        </p>
      </div>

      {/* Success state */}
      {status === 'success' && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <p className="text-green-800 font-medium">Message sent — thank you.</p>
          <p className="text-green-700 text-sm mt-1">
            I'll get back to you as soon as I can.
          </p>
        </div>
      )}

      {/* Form */}
      {status !== 'success' && (
        <div className="max-w-xl space-y-4">

          {/* Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Error */}
          {status === 'error' && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'submitting'}
            className="rounded bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

        </div>
      )}
    </div>
  );
}
