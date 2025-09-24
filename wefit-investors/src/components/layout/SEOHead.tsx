import { Helmet } from 'react-helmet-async';

export const SEOHead = () => (
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
);
