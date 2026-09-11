import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          message: message,
          subject: 'New message from farixzz.dev portfolio',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#111214] px-5 py-3.5 text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 text-sm sm:text-base focus:outline-none focus:border-[#D7E2EA]/70 transition-colors duration-200';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#8FE3D6]/30 bg-[#111214] px-6 py-10 text-center">
        <CheckCircle2 size={32} color="#8FE3D6" />
        <p className="text-[#D7E2EA] font-medium uppercase tracking-wide text-sm sm:text-base">
          Message sent
        </p>
        <p className="text-[#D7E2EA]/60 text-sm max-w-xs">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#8FE3D6] text-xs uppercase tracking-widest mt-2 hover:opacity-70 transition-opacity duration-200"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClasses}
      />
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClasses}
      />
      <textarea
        required
        placeholder="What are you reaching out about?"
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
            Sending
          </>
        ) : (
          <>
            Send message
            <Send size={16} />
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-red-400 text-xs sm:text-sm">
          <AlertCircle size={16} />
          Something went wrong — try again, or email me directly.
        </p>
      )}
    </form>
  );
}