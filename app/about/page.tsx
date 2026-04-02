import AboutHero from '@/components/about/AboutUsHero'
import TimelineSection from '@/components/about/TimelineSection'
import CommunitiesSection from '@/components/CommunitiesSection'
// import FeaturesSection from '@/components/FeatureSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutHero />
        <TimelineSection />
        <CommunitiesSection />
      {/* <FeaturesSection /> */}
      
    </div>
  )
}

export default page
