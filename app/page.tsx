import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const digitalResources = [
    {
      title: "Company Resources",
      description: "Access all internal company documents, policies, and organizational information in one centralized location.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Digital Tools",
      description: "Comprehensive suite of digital tools and applications for productivity, collaboration, and project management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Communication Hub",
      description: "Centralized communication platform for team collaboration, announcements, and information sharing.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools for business intelligence and performance monitoring.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Security Portal",
      description: "Secure access to sensitive company information and protected digital assets with advanced authentication.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                Your Digital Command Center
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Centralized access to all 10C4I Foxtrot digital resources, tools, and company information in one powerful platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary flex items-center space-x-2">
                  <span>See more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <Link href="/contact" className="btn-secondary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Resources Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Digital Resources Hub
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Everything you need to access, manage, and utilize our digital ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalResources.map((resource, index) => (
                <ServiceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
                About 10C4I Foxtrot
              </h2>
              
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  <strong>10C4I Foxtrot</strong> represents the cutting edge of digital innovation and strategic technology solutions. Our comprehensive digital ecosystem is designed to streamline operations, enhance collaboration, and provide secure access to all company resources.
                </p>
                
                <p>
                  This megasite serves as the central command center for all our digital operations, connecting teams, tools, and resources in one unified platform. From project management to data analytics, communication tools to security protocols, everything you need is just a click away.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
