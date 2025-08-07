interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-6 hover:border-accent/50 transition-colors duration-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
          <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
