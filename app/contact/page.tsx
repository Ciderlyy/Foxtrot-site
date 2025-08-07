import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                  Contact Us
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  Need help accessing our digital resources or have questions about our platform? Get in touch with us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-text mb-6">Send us a message</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg text-text placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg text-text placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg text-text placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg text-text placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us about your security needs..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-text mb-6">Get in touch</h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      We're here to help you navigate our digital ecosystem and access the resources you need. Whether you need technical support, platform access, or have questions about our tools and services, we're ready to assist.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">Location</h3>
                        <p className="text-text-secondary">Global Operations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">Email</h3>
                        <p className="text-text-secondary">contact@10c4ifoxtrot.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">Response Time</h3>
                        <p className="text-text-secondary">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <h3 className="font-semibold text-text mb-2">What to expect</h3>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Response within 24 hours</li>
                      <li>• Platform access and onboarding</li>
                      <li>• Technical support and training</li>
                      <li>• Ongoing platform assistance</li>
                    </ul>
                  </div>
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
