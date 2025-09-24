import { FormEvent, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mail, PhoneCall } from 'lucide-react'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { CALENDAR_BOOKING_URL, FORM_ENDPOINT } from '@/utils/constants'
import { trackFormSubmit } from '@/utils/analytics'

export interface ContactFormData {
  name: string
  email: string
  company: string
  role: string
  investmentFocus?: string
  checkSize?: string
  timeline?: string
  message?: string
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>

const initialForm: ContactFormData = {
  name: '',
  email: '',
  company: '',
  role: '',
  investmentFocus: '',
  checkSize: '',
  timeline: '',
  message: '',
}

const emailRegex = /^[\w.!#$%&'*+/=?`{|}~-]+@[\w-]+\.[\w.-]+$/

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState<string>('')

  const isFormValid = useMemo(() => {
    const requiredFields: (keyof ContactFormData)[] = ['name', 'email', 'company', 'role']
    return requiredFields.every((field) => formData[field]?.trim()) && emailRegex.test(formData.email)
  }, [formData])

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email.'
    if (!formData.company.trim()) newErrors.company = 'Company is required.'
    if (!formData.role.trim()) newErrors.role = 'Role is required.'
    return newErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!FORM_ENDPOINT) {
      setStatus('error')
      setFeedback('Form endpoint not configured. Please email founders@wefitlabs.com.')
      return
    }

    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(initialForm)
        setErrors({})
        trackFormSubmit('investor_contact')
        setFeedback('Thanks for reaching out—expect an email from Ethan within 24 hours.')
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback('Something went wrong. Email founders@wefitlabs.com and we will respond quickly.')
    }
  }

  return (
    <section id="contact" className="container-section">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <p className="badge">Let\'s connect</p>
          <h2 className="section-heading">Request the investor deck or schedule time</h2>
          <p className="section-subheading">
            We\'re carving out time each week for strategic conversations with investors who know consumer social and health tech. Leave details so we can prep meaningful context.
          </p>
          <div className="space-y-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary-blue" />
              founders@wefitlabs.com
            </div>
            {CALENDAR_BOOKING_URL && (
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-energy-green" />
                <a
                  className="text-primary-blue hover:text-energy-green"
                  href={CALENDAR_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Calendly: weFit investor intro
                </a>
              </div>
            )}
            <div className="flex items-center gap-3">
              <PhoneCall className="h-5 w-5 text-white/60" />
              12-minute calibration calls every Friday
            </div>
          </div>
        </div>
        <motion.form
          className="card-surface space-y-6 p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              id="name"
              label="Name"
              required
              value={formData.name}
              onChange={(event) => updateField('name', event.target.value)}
              error={errors.name}
              placeholder="Your name"
            />
            <Input
              id="email"
              label="Email"
              required
              value={formData.email}
              onChange={(event) => updateField('email', event.target.value)}
              error={errors.email}
              placeholder="name@firm.com"
              type="email"
            />
            <Input
              id="company"
              label="Firm / Company"
              required
              value={formData.company}
              onChange={(event) => updateField('company', event.target.value)}
              error={errors.company}
              placeholder="Fund, family office, or corporate"
            />
            <Input
              id="role"
              label="Role"
              required
              value={formData.role}
              onChange={(event) => updateField('role', event.target.value)}
              error={errors.role}
              placeholder="Partner, angel, operator"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              id="investmentFocus"
              label="Investment Focus"
              value={formData.investmentFocus}
              onChange={(event) => updateField('investmentFocus', event.target.value)}
              placeholder="Social consumer, health tech"
            />
            <Input
              id="checkSize"
              label="Check Size"
              value={formData.checkSize}
              onChange={(event) => updateField('checkSize', event.target.value)}
              placeholder="$100k - $500k"
            />
            <Input
              id="timeline"
              label="Timeline"
              value={formData.timeline}
              onChange={(event) => updateField('timeline', event.target.value)}
              placeholder="Investing window"
            />
          </div>
          <Input
            id="message"
            label="Anything we should prep?"
            value={formData.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="What you\'re excited to learn, diligence focus, etc."
            multiline
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              type="submit"
              loading={status === 'loading'}
              disabled={!isFormValid || status === 'loading'}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Request the deck
            </Button>
            {CALENDAR_BOOKING_URL && (
              <Button
                as="a"
                variant="secondary"
                href={CALENDAR_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Calendar className="h-4 w-4" />}
              >
                Book intro call
              </Button>
            )}
          </div>
          {feedback && (
            <p className={`text-sm ${status === 'success' ? 'text-energy-green' : 'text-bold-red'}`}>{feedback}</p>
          )}
          {!FORM_ENDPOINT && (
            <p className="text-xs text-bold-red/80">Set VITE_FORMSPREE_ENDPOINT to activate submissions.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
