import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  const companyValues = [
    {
      title: "Innovation",
      description: "Pioneering cutting-edge digital solutions that drive business transformation and competitive advantage.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "Fostering a culture of teamwork and partnership to achieve exceptional results together.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we do.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Security",
      description: "Ensuring the highest levels of data protection and cybersecurity across all our platforms.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  const teamStats = [
    { number: "500+", label: "Team Members" },
    { number: "50+", label: "Countries" },
    { number: "100+", label: "Digital Tools" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                About 10C4I Foxtrot
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Leading the digital transformation revolution with innovative technology solutions and comprehensive digital ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  At 10C4I Foxtrot, we are committed to revolutionizing how organizations operate in the digital age. Our mission is to provide comprehensive, secure, and innovative digital solutions that empower businesses to thrive in an increasingly connected world.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Through our integrated digital ecosystem, we enable seamless collaboration, enhanced productivity, and strategic decision-making, ensuring our clients stay ahead of the curve in today's fast-paced technological landscape.
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-text mb-4">What We Do</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Digital ecosystem development and management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprehensive technology solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cybersecurity and data protection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Business intelligence and analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 technical support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Our Values
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                The core principles that guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                By The Numbers
              </h2>
              <p className="text-lg text-text-secondary">
                Our global reach and impact in numbers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Technology & Innovation
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                We leverage cutting-edge technologies including artificial intelligence, machine learning, cloud computing, and advanced cybersecurity protocols to deliver robust, scalable, and secure digital solutions that meet the evolving needs of modern businesses.
              </p>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-text mb-4">Our Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">Cloud Infrastructure</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">AI & Machine Learning</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">Cybersecurity</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">Data Analytics</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">API Integration</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">Mobile Development</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">DevOps</div>
                  <div className="bg-primary/50 rounded-lg p-3 text-text-secondary">Blockchain</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
