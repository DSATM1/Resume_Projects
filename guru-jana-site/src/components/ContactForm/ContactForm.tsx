import { useState, type FormEvent } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const services = [
  'Audit & Assurance',
  'Direct Tax',
  'GST & Indirect Tax',
  'Corporate Law',
  'Business Advisory',
  'India Entry Services',
];

const ContactForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formState.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formState.email.trim()) nextErrors.email = 'Email is required.';
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) nextErrors.email = 'Enter a valid email address.';
    if (!formState.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (formState.phone && !/^[0-9+\- ]{8,20}$/.test(formState.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!formState.service) nextErrors.service = 'Please choose a service.';
    if (!formState.message.trim()) nextErrors.message = 'Please share your request.';
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
    setFormState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          Full Name
          <input
            value={formState.name}
            onChange={(event) => setFormState({ ...formState, name: event.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-rose-600">{errors.name}</p>}
        </label>

        <label className="space-y-2 text-sm text-slate-700">
          Email
          <input
            type="email"
            value={formState.email}
            onChange={(event) => setFormState({ ...formState, email: event.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-xs text-rose-600">{errors.email}</p>}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          Phone
          <input
            value={formState.phone}
            onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
            placeholder="+91 12345 67890"
          />
          {errors.phone && <p className="text-xs text-rose-600">{errors.phone}</p>}
        </label>

        <label className="space-y-2 text-sm text-slate-700">
          Company
          <input
            value={formState.company}
            onChange={(event) => setFormState({ ...formState, company: event.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
            placeholder="Company name"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-700">
        Service Required
        <select
          value={formState.service}
          onChange={(event) => setFormState({ ...formState, service: event.target.value })}
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
        >
          <option value="">Select service</option>
          {services.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        {errors.service && <p className="text-xs text-rose-600">{errors.service}</p>}
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        Message
        <textarea
          value={formState.message}
          onChange={(event) => setFormState({ ...formState, message: event.target.value })}
          rows={5}
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
          placeholder="Tell us about your requirement"
        />
        {errors.message && <p className="text-xs text-rose-600">{errors.message}</p>}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {status === 'sending' ? 'Sending...' : 'Submit request'}
        </button>
        {status === 'success' && <p className="text-sm text-emerald-600">Your request has been sent successfully.</p>}
        {status === 'error' && <p className="text-sm text-rose-600">Please correct the highlighted fields and try again.</p>}
      </div>
    </form>
  );
};

export default ContactForm;
