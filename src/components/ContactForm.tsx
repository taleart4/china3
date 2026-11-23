import { useState } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLang } from '@/i18n/LangContext';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [profile, setProfile] = useState<'shenzhen' | 'ningbo' | ''>('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('inquiries').insert({
      name,
      email,
      company: company || null,
      profile: profile || null,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(t.contact.errorOccurred);
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setCompany('');
    setProfile('');
    setMessage('');
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold text-emerald-900">{t.contact.successTitle}</h3>
        <p className="mt-2 text-emerald-700">{t.contact.successDesc}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.contact.fullName} required>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder={t.contact.fullNamePlaceholder}
          />
        </Field>
        <Field label={t.contact.emailField} required>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder={t.contact.emailPlaceholder}
          />
        </Field>
      </div>

      <Field label={t.contact.companyField}>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="input"
          placeholder={t.contact.companyPlaceholder}
        />
      </Field>

      <Field label={t.contact.serviceField}>
        <div className="grid gap-3 sm:grid-cols-2">
          <ProfileOption
            label={t.contact.shenzhenLabel}
            sub={t.contact.shenzhenSubLabel}
            selected={profile === 'shenzhen'}
            onClick={() => setProfile('shenzhen')}
          />
          <ProfileOption
            label={t.contact.ningboLabel}
            sub={t.contact.ningboSubLabel}
            selected={profile === 'ningbo'}
            onClick={() => setProfile('ningbo')}
          />
        </div>
      </Field>

      <Field label={t.contact.messageField} required>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="input resize-none"
          placeholder={t.contact.messagePlaceholder}
        />
      </Field>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-700 disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            {t.contact.sendButton}
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-emerald-600"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ProfileOption({
  label,
  sub,
  selected,
  onClick,
}: {
  label: string;
  sub: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border-2 p-4 text-left transition-all ${
        selected
          ? 'border-emerald-500 bg-emerald-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <span className="block text-sm font-semibold text-slate-900">{label}</span>
      <span className="mt-0.5 block text-xs text-slate-500">{sub}</span>
    </button>
  );
}
