import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INQUIRY_TYPES = [
  'Full-Stack Web App',
  'AI Agent / Automation',
  'Security Audit / VAPT',
  'Technical Advisory',
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const formattedMessage =
      selectedTypes.length > 0
        ? `[Inquiry Scope: ${selectedTypes.join(', ')}]\n\n${message}`
        : message;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          message: formattedMessage,
          subject:
            selectedTypes.length > 0
              ? `Client Inquiry: ${selectedTypes.join(' & ')} - from ${name}`
              : `New message from ${name} via farixzz portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setSelectedTypes([]);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#111214] px-5 py-3.5 text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 text-sm sm:text-base focus:outline-none focus:border-[#8FE3D6] transition-colors duration-200';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#8FE3D6]/30 bg-[#111214] px-6 py-10 text-center">
        <CheckCircle2 size={32} color="#8FE3D6" />
        <p className="text-[#D7E2EA] font-medium uppercase tracking-wide text-sm sm:text-base">
          Message Received
        </p>
        <p className="text-[#D7E2EA]/60 text-sm max-w-xs">
          Thank you for reaching out. I will review your project requirements and respond within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#8FE3D6] text-xs uppercase tracking-widest mt-2 hover:opacity-70 transition-opacity duration-200"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Inquiry Type Chips */}
      <div>
        <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-medium block mb-2.5 flex items-center gap-1.5">
          <Sparkles size={13} className="text-[#8FE3D6]" />
          What can I build for you?
        </label>
        <div className="flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                type="button"
                key={type}
                onClick={() => toggleType(type)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                  isSelected
                    ? 'border-[#8FE3D6] bg-[#8FE3D6]/15 text-[#8FE3D6]'
                    : 'border-[#2A2D31] bg-[#16181B] text-[#D7E2EA]/70 hover:border-[#D7E2EA]/40'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <input
        type="text"
        required
        placeholder="Your name or company"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClasses}
      />
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClasses}
      />
      <textarea
        required
        placeholder="Describe your project, timeline, or security requirements..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className={inputClasses + ' resize-none'}
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-white font-medium uppercase tracking-widest text-sm transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        }}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          <>
            Send Project Inquiry
            <Send size={16} />
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-red-400 text-xs sm:text-sm">
          <AlertCircle size={16} />
          Something went wrong — try again, or email me directly at muhammedfarisp@gmail.com
        </p>
      )}
    </form>
  );
}