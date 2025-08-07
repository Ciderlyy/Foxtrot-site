import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Tools() {
  const toolCategories = [
    {
      title: "Operational Tools",
      description: "Specialized tools for operational management and tracking",
      tools: [
        { name: "SOFUN Tracker", description: "Track SOFUN for S3 operations", url: "https://ciderlyy.github.io/SOFUN-Tracker", icon: "🎯", status: "active" },
        { name: "Parade State Automation", description: "Automated parade state management system with personnel database and daily reporting", url: "/parade-state", icon: "⚡", status: "active" },
        { name: "Duty Management", description: "Manage duty assignments and schedules", url: "#", icon: "📋", status: "active" },
        { name: "Resource Allocation", description: "Track and allocate operational resources", url: "#", icon: "📊", status: "active" },
      ]
    },
    {
      title: "Productivity Tools",
      description: "Essential tools for daily productivity and task management",
      tools: [
        { name: "Project Management", description: "Manage projects and track progress", url: "#", icon: "📋", status: "active" },
        { name: "Task Tracker", description: "Personal and team task management", url: "#", icon: "✅", status: "active" },
        { name: "Calendar", description: "Schedule management and meetings", url: "#", icon: "📅", status: "active" },
        { name: "Document Editor", description: "Collaborative document creation", url: "#", icon: "📝", status: "active" },
      ]
    },
    {
      title: "Communication Tools",
      description: "Platforms for team communication and collaboration",
      tools: [
        { name: "Team Chat", description: "Real-time messaging and collaboration", url: "#", icon: "💬", status: "active" },
        { name: "Video Calls", description: "High-quality video conferencing", url: "#", icon: "📹", status: "active" },
        { name: "Email Platform", description: "Professional email management", url: "#", icon: "📧", status: "active" },
        { name: "File Sharing", description: "Secure file storage and sharing", url: "#", icon: "📁", status: "active" },
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Data analysis and business intelligence tools",
      tools: [
        { name: "Business Dashboard", description: "Real-time business metrics", url: "#", icon: "📊", status: "active" },
        { name: "Performance Analytics", description: "Team and project performance tracking", url: "#", icon: "📈", status: "active" },
        { name: "Reporting Tools", description: "Generate comprehensive reports", url: "#", icon: "📋", status: "active" },
        { name: "Data Visualization", description: "Interactive charts and graphs", url: "#", icon: "📊", status: "beta" },
      ]
    },
    {
      title: "Development Tools",
      description: "Software development and technical resources",
      tools: [
        { name: "Code Repository", description: "Version control and code management", url: "#", icon: "💻", status: "active" },
        { name: "Development Environment", description: "Integrated development tools", url: "#", icon: "🔧", status: "active" },
        { name: "API Documentation", description: "Technical documentation and guides", url: "#", icon: "📚", status: "active" },
        { name: "Testing Platform", description: "Automated testing and quality assurance", url: "#", icon: "🧪", status: "beta" },
      ]
    },
    {
      title: "Security & Access",
      description: "Security tools and access management",
      tools: [
        { name: "Identity Management", description: "User authentication and authorization", url: "#", icon: "🔐", status: "active" },
        { name: "Security Monitoring", description: "Real-time security alerts and monitoring", url: "#", icon: "🛡️", status: "active" },
        { name: "VPN Access", description: "Secure remote access to company resources", url: "#", icon: "🔒", status: "active" },
        { name: "Audit Logs", description: "System access and activity tracking", url: "#", icon: "📋", status: "active" },
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'beta':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'maintenance':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                Digital Tools
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Access our comprehensive suite of digital tools designed to enhance productivity, collaboration, and efficiency across all aspects of your work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {toolCategories.map((category, index) => (
                <div key={index} className="bg-secondary/20 border border-secondary/30 rounded-lg p-6 hover:border-accent/50 transition-colors duration-200">
                  <h2 className="text-2xl font-bold text-text mb-3">{category.title}</h2>
                  <p className="text-text-secondary mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="bg-primary/50 rounded-lg p-4 hover:bg-accent/10 transition-colors duration-200">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <span className="text-2xl">{tool.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-semibold text-text">{tool.name}</h3>
                                <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(tool.status)}`}>
                                  {tool.status}
                                </span>
                              </div>
                              <p className="text-sm text-text-secondary">{tool.description}</p>
                            </div>
                          </div>
                          <Link
                            href={tool.url}
                            className="ml-4 p-2 text-text-secondary hover:text-accent transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-text mb-4">Tool Status Legend</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-text-secondary">Active - Fully operational</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="text-text-secondary">Beta - Testing phase</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="text-text-secondary">Maintenance - Limited access</span>
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
