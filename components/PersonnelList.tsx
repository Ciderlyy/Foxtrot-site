'use client'

import { motion } from 'framer-motion'

interface Personnel {
  id: string
  name: string
  rank: string
  platoon: string
  status: string
  duties: Array<{
    id: string
    type: string
    date: string
  }>
}

interface PersonnelListProps {
  personnel: Personnel[]
}

export default function PersonnelList({ personnel }: PersonnelListProps) {
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'available':
        return 'bg-green-500'
      case 'leave':
        return 'bg-yellow-500'
      case 'mc':
        return 'bg-red-500'
      case 'deployed':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  if (personnel.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white/60">No personnel data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {personnel.map((person, index) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-fox-orange rounded-full flex items-center justify-center text-white font-semibold">
                {person.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-white font-medium">{person.name}</h3>
                <p className="text-white/70 text-sm">{person.rank} • {person.platoon}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(person.status)}`}></div>
              <span className="text-white/70 text-sm capitalize">{person.status || 'Unknown'}</span>
            </div>
          </div>
          
          {person.duties.length > 0 && (
            <div className="border-t border-white/10 pt-3">
              <p className="text-white/60 text-sm mb-2">Recent Duties:</p>
              <div className="flex flex-wrap gap-2">
                {person.duties.map(duty => (
                  <span
                    key={duty.id}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-white/80"
                  >
                    {duty.type} - {new Date(duty.date).toLocaleDateString()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
