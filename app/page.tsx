import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: "Whole-org security.",
      description: "Assess your whole organization's security. We will poke at every hole and tell you what to patch up.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Threat intelligence.",
      description: "Quickly uncover and understand the sources of malicious activity targeting you and your infrastructure.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Specialty engineering.",
      description: "We build private, specialized in-house software to better cater to your organization's needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Due diligence.",
      description: "Evaluate potential partners or entities by examining their history, affiliations, and reputation. Trust, but validate.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Cloud infrastructure.",
      description: "Connect your software seamlessly. Scale your systems with ease while managing data, events, and analytics off-platform in your own cloud.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                Taking security seriously.
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                We have as our mission to help organizations by reinforcing them with true competent security. No cookie cutter solutions.
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

        {/* Services Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                What we do.
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our team likes wearing <em>many</em> hats. We're best at these, however.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
                Our history.
              </h2>
              
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  <strong>Orlando, Florida, 2018.</strong> Synapse Softworks was founded by a few friends interested in reverse engineering and video game security. After developing Synapse X for many years, it was time to move to greener pastures and put our talent to better use.
                </p>
                
                <p>
                  Today, we work hand-in-hand with businesses to improve their security practices, reinforce the integrity of their software, provide threat intelligence, and increase the efficiency of their operations through the development of in-house software.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
