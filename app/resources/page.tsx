import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Resources() {
  const resourceCategories = [
    {
      title: "Duty & Operations",
      description: "Essential duty schedules, operational procedures, and guard assignments",
      resources: [
        { name: "Duty List for COS and Guard Duty", url: "https://docs.google.com/spreadsheets/d/1-8emNSiPm53TbuAiMaiOqd5OLdtYDGL32K9iTI2AbpM/edit?gid=464717631#gid=464717631", icon: "📋" },
        { name: "Standard Operating Procedures", url: "#", icon: "📝" },
        { name: "Duty Rotation Schedule", url: "#", icon: "🔄" },
        { name: "Guard Post Instructions", url: "#", icon: "🛡️" },
      ]
    },
    {
      title: "Company Documents",
      description: "Access to all internal company documents, policies, and procedures",
      resources: [
        { name: "Employee Handbook", url: "#", icon: "📋" },
        { name: "Company Policies", url: "#", icon: "📄" },
        { name: "Organizational Chart", url: "#", icon: "🏢" },
        { name: "Strategic Plans", url: "#", icon: "🎯" },
      ]
    },
    {
      title: "Training & Development",
      description: "Learning resources and professional development materials",
      resources: [
        { name: "Training Portal", url: "#", icon: "🎓" },
        { name: "Skill Assessments", url: "#", icon: "📊" },
        { name: "Certification Programs", url: "#", icon: "🏆" },
        { name: "Knowledge Base", url: "#", icon: "📚" },
      ]
    },
    {
      title: "Communication Hub",
      description: "Internal communication and collaboration tools",
      resources: [
        { name: "Team Chat", url: "#", icon: "💬" },
        { name: "Video Conferencing", url: "#", icon: "📹" },
        { name: "Announcements", url: "#", icon: "📢" },
        { name: "Discussion Forums", url: "#", icon: "🗨️" },
      ]
    },
    {
      title: "Data & Analytics",
      description: "Business intelligence and reporting tools",
      resources: [
        { name: "Performance Reports", url: "#", icon: "📊" },
        { name: "Data Dashboard", url: "#", icon: "📈" },
        { name: "Analytics Tools", url: "#", icon: "🔍" },
        { name: "KPI Tracking", url: "#", icon: "🎯" },
      ]
    },
    {
      title: "IT & Security",
      description: "Technical resources and security protocols",
      resources: [
        { name: "IT Support Portal", url: "#", icon: "🛠️" },
        { name: "Security Guidelines", url: "#", icon: "🔒" },
        { name: "System Status", url: "#", icon: "🟢" },
        { name: "Access Management", url: "#", icon: "🔑" },
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                Digital Resources
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Access all your company resources, tools, and information in one centralized location. Everything you need is organized and easily accessible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <div key={index} className="bg-secondary/20 border border-secondary/30 rounded-lg p-6 hover:border-accent/50 transition-colors duration-200">
                  <h2 className="text-2xl font-bold text-text mb-3">{category.title}</h2>
                  <p className="text-text-secondary mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <Link
                        key={resourceIndex}
                        href={resource.url}
                        className="flex items-center space-x-3 p-3 bg-primary/50 rounded-lg hover:bg-accent/10 transition-colors duration-200 group"
                      >
                        <span className="text-2xl">{resource.icon}</span>
                        <span className="text-text group-hover:text-accent transition-colors">
                          {resource.name}
                        </span>
                        <svg className="w-4 h-4 ml-auto text-text-secondary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-text mb-4">Need Help Finding Something?</h3>
                <p className="text-text-secondary mb-6">
                  Can't find the resource you're looking for? Our support team is here to help you navigate our digital ecosystem.
                </p>
                <Link href="/contact" className="btn-primary">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
