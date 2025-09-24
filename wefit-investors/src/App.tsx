import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

import { Hero } from './components/sections/Hero'
import { Metrics } from './components/sections/Metrics'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { Team } from './components/sections/Team'
import { Contact } from './components/sections/Contact'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import type { HeroVariant } from './utils/constants'
import { initializeAnalytics } from './utils/analytics'

const Traction = lazy(() => import('./components/sections/Traction').then((module) => ({ default: module.Traction })))
const BusinessModel = lazy(() => import('./components/sections/BusinessModel').then((module) => ({ default: module.BusinessModel })))

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

const heroVariants: HeroVariant[] = ['numbers', 'narrative', 'distribution']

export default function App() {
  const [variantIndex, setVariantIndex] = useState(0)

  useEffect(() => {
    initializeAnalytics()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setVariantIndex((prev) => (prev + 1) % heroVariants.length)
    }, 22000)
    return () => clearInterval(timer)
  }, [])

  const activeVariant = heroVariants[variantIndex]

  return (
    <>
      <Helmet>
        <title>weFit Labs - Social Fitness Platform for Investors</title>
        <meta
          name="description"
          content="Building the social layer for fitness communities. Active groups, sticky challenges, compounding referrals."
        />
        <meta property="og:title" content="weFit Labs - Investor Overview" />
        <meta
          property="og:description"
          content="The definitive social fitness platform with proven network effects and clear monetization strategy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://investors.wefitlabs.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-24"
      >
        <Hero variant={activeVariant} />
        <Metrics />
        <Problem />
        <Solution />
        <Suspense fallback={<div className="container-section text-white/60">Loading traction...</div>}>
          <Traction />
        </Suspense>
        <Suspense fallback={<div className="container-section text-white/60">Loading business model...</div>}>
          <BusinessModel />
        </Suspense>
        <Team />
        <Contact />
      </motion.main>
      <Footer />
    </>
  )
}
