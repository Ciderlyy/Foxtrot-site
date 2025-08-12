'use client'

interface Duty {
  id: string
  type: string
  date: string
  description: string
  personnel: {
    id: string
    name: string
    rank: string
  }
}

interface DutyCalendarProps {
  duties: Duty[]
}

export default function DutyCalendar({ duties }: DutyCalendarProps) {
  const getDutyTypeColor = (type: string) => {
    switch (type?.toUpperCase()) {
      case 'COS':
        return 'bg-red-500'
      case 'GC':
        return 'bg-blue-500'
      case 'SIGC':
        return 'bg-green-500'
      case 'GUARDS':
        return 'bg-yellow-500'
      case 'TRAINING':
        return 'bg-purple-500'
      case 'ADMIN':
        return 'bg-gray-500'
      default:
        return 'bg-accent'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    } else {
      return date.toLocaleDateString('en-SG', {
        month: 'short',
        day: 'numeric'
      })
    }
  }

  if (duties.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white/60">No upcoming duties</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {duties.map((duty, index) => (
        <div
          key={duty.id}
          className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${getDutyTypeColor(duty.type)} rounded-lg flex items-center justify-center text-white text-xs font-bold`}>
                {duty.type}
              </div>
              <div>
                <h3 className="text-white font-medium">{duty.personnel.name}</h3>
                <p className="text-white/70 text-sm">{duty.personnel.rank}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-white/80 text-sm font-medium">
                {formatDate(duty.date)}
              </span>
              <p className="text-white/60 text-xs">
                {new Date(duty.date).toLocaleTimeString('en-SG', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
          
          {duty.description && (
            <div className="border-t border-white/10 pt-3">
              <p className="text-white/70 text-sm">{duty.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
