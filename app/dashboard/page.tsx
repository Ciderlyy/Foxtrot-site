import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import DashboardStats from "@/components/DashboardStats"
import PersonnelList from "@/components/PersonnelList"
import DutyCalendar from "@/components/DutyCalendar"

export default async function Dashboard() {
  const session = await auth()
  
  if (!session) {
    redirect('/login')
  }

  // Get statistics based on user role
  const [personnelCount, dutyCount, recentPersonnel, recentDuties] = await Promise.all([
    prisma.personnel.count(),
    prisma.duty.count(),
    prisma.personnel.findMany({
      take: 5,
      orderBy: { updatedAt: 'desc' },
      include: { duties: { take: 3, orderBy: { date: 'desc' } } }
    }),
    prisma.duty.findMany({
      take: 10,
      orderBy: { date: 'desc' },
      include: { personnel: true }
    })
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                FOXTROT Command Center
              </h1>
              <p className="text-white/80 mt-1">
                Welcome back, {session.user.name || session.user.email}
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-white/70">
                <span>Rank: {session.user.rank || 'N/A'}</span>
                <span>Unit: {session.user.unit || 'N/A'}</span>
                <span className="px-2 py-1 bg-white/20 rounded-full">
                  {session.user.role}
                </span>
              </div>
            </div>
            
            <div className="text-right text-white/80">
              <p className="text-sm">Last Updated</p>
              <p className="text-lg font-semibold">
                {new Date().toLocaleDateString('en-SG', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <DashboardStats 
          personnelCount={personnelCount}
          dutyCount={dutyCount}
          userRole={session.user.role}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Personnel List */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">
              Recent Personnel Updates
            </h2>
            <PersonnelList personnel={recentPersonnel} />
          </div>

          {/* Duty Calendar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">
              Upcoming Duties
            </h2>
            <DutyCalendar duties={recentDuties} />
          </div>
        </div>

        {/* Admin Section */}
        {session.user.role === 'ADMIN' && (
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">
              Administrative Controls
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors">
                Manage Personnel
              </button>
              <button className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors">
                Assign Duties
              </button>
              <button className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors">
                System Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
