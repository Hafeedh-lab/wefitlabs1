import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { handleFormSubmit } from '@/utils/analytics';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  investmentFocus?: string;
  checkSize?: string;
  timeline?: string;
  message?: string;
}

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const CALENDAR_URL = import.meta.env.VITE_CALENDAR_BOOKING_URL ?? 'https://calendly.com/wefit-investors';

const initialState: ContactFormData = {
  name: '',
  email: '',
  company: '',
  role: '',
  investmentFocus: '',
  checkSize: '',
  timeline: '',
  message: ''
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const validate = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.company.trim()) errors.company = 'Company is required';
  if (!data.role.trim()) errors.role = 'Role is required';
  return errors;
};

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const isFormValid = useMemo(() => Object.keys(validate(formData)).length === 0, [formData]);

  const handleChange = (field: keyof ContactFormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const submitForm = async (endpoint: string) => {
    try {
      setSubmitting(true);
      setServerError(null);
      const payload = JSON.stringify(formData);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      handleFormSubmit('investor_contact');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(message);
      setServerError('Something went wrong. Please email invest@wefitlabs.com');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(formData);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return;
    }

    if (!FORM_ENDPOINT) {
      setServerError('Form endpoint not configured. Please reach out via email.');
      return;
    }

    void submitForm(FORM_ENDPOINT);
  };

  if (submitted) {
    return (
      <section id="contact" className="container mt-24">
        <div className="rounded-3xl border border-energy-green/40 bg-energy-green/10 p-10 text-center shadow-card">
          <motion.h3
            className="text-3xl font-semibold text-energy-green"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            Thank you! We\'ll reach out shortly.
          </motion.h3>
          <p className="mt-4 text-sm text-white/75">
            Book a time that works for you and we\'ll dive into cohorts, product roadmap, and financing plans.
          </p>
          <Button
            size="lg"
            className="mt-6"
            onClick={() => {
              window.open(CALENDAR_URL, '_blank', 'noopener');
            }}
          >
            Open Calendly
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="container mt-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <span className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">Let\'s talk</span>
          <h2 className="section-title">Request the deck or schedule a call</h2>
          <p className="section-subtitle max-w-xl">
            Tell us a bit about your focus and we\'ll share cohort data, product roadmap, and upcoming funding milestones.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
            <p className="font-semibold text-white">What to expect</p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-blue" />
                12-minute intro with Ethan & Eric focused on product, retention, and go-to-market.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-blue" />
                Investor data room access with cohort charts, roadmap, and financial model.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-blue" />
                Optional warm intro to early users or advisors.
              </li>
            </ul>
          </div>
        </div>
        <form
          className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Input label="Name" name="name" value={formData.name} onChange={handleChange('name')} required error={errors.name} />
            <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange('email')} required error={errors.email} />
            <Input label="Company" name="company" value={formData.company} onChange={handleChange('company')} required error={errors.company} />
            <Input label="Role" name="role" value={formData.role} onChange={handleChange('role')} required error={errors.role} />
            <Input
              label="Investment Focus"
              name="investmentFocus"
              value={formData.investmentFocus}
              onChange={handleChange('investmentFocus')}
              placeholder="Consumer social, health tech, etc"
            />
            <Input
              label="Check Size"
              name="checkSize"
              value={formData.checkSize}
              onChange={handleChange('checkSize')}
              placeholder="$100K - $500K"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange('timeline')}
              placeholder="Investing timeline"
            />
            <Input
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange('message')}
              placeholder="Anything specific you\'d like to see"
            />
          </div>
          {serverError && <p className="text-sm text-bold-red">{serverError}</p>}
          <Button size="lg" type="submit" disabled={submitting || !isFormValid} className="w-full">
            {submitting ? 'Sending...' : 'Submit & Request Deck'}
          </Button>
          <p className="text-xs text-white/40">
            By submitting you agree to receive investor updates from weFit Labs. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
};
