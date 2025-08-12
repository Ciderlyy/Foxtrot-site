'use client'

interface DashboardStatsProps {
  personnelCount: number
  dutyCount: number
  userRole: string
}

export default function DashboardStats({ personnelCount, dutyCount, userRole }: DashboardStatsProps) {
  const stats = [
    {
      title: "Total Personnel",
      value: personnelCount,
      icon: "👥",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Active Duties",
      value: dutyCount,
      icon: "📋",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Your Role",
      value: userRole,
      icon: "🎖️",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">{stat.title}</p>
              <p className="text-white text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
