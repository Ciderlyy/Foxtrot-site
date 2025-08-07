'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Personnel {
  id: string
  name: string
  rank: string
  platoon: string
  category: 'PS' | 'PC' | 'SPECS' | 'TROOPERS' | 'CADETS'
  position: 'OC' | 'SM' | 'PC' | 'PS' | 'SPECS' | 'TROOPERS' | 'CADETS'
  status: 'present' | 'absent' | 'leave' | 'duty' | 'training' | 'medical'
}

interface DailyInput {
  date: string
  personnelId: string
  status: 'present' | 'absent' | 'leave' | 'duty' | 'training' | 'medical'
  notes?: string
}

interface ParadeStateSummary {
  total: number
  present: number
  absent: number
  leave: number
  duty: number
  training: number
  medical: number
  presentPercentage: number
}

export default function ParadeState() {
  const [activeTab, setActiveTab] = useState<'personnel' | 'input' | 'report'>('personnel')
  const [personnel, setPersonnel] = useState<Personnel[]>([])
  const [dailyInputs, setDailyInputs] = useState<DailyInput[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [newPersonnel, setNewPersonnel] = useState({
    name: '',
    rank: '',
    platoon: '',
    category: 'TROOPERS' as const,
    position: 'TROOPERS' as const
  })
  const [newInput, setNewInput] = useState({
    personnelId: '',
    status: 'present' as const,
    notes: ''
  })

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedPersonnel = localStorage.getItem('paradeStatePersonnel')
    const savedInputs = localStorage.getItem('paradeStateInputs')
    
    // Always load FOXTROT personnel (override any saved data for now)
    const defaultPersonnel: Personnel[] = [
        // HQ
        { id: '1', name: 'TAN YAN MING', rank: 'CPT', platoon: 'HQ', category: 'PS', position: 'OC', status: 'present' },
        { id: '2', name: 'DOMINIC ANG', rank: '3WO', platoon: 'HQ', category: 'PS', position: 'SM', status: 'present' },
        { id: '3', name: 'TAN KAI EN TERENCE', rank: 'LTA', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
        { id: '4', name: 'EDEN KANG YI EN', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
        { id: '5', name: 'RYAN CHEN YI HENG', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
        { id: '6', name: 'ERNEST FOO JUN WEI', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
        { id: '7', name: 'JADEN TAN YAN HAO', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
        { id: '8', name: 'LEE JING SHENG', rank: 'SSG', platoon: 'HQ', category: 'SPECS', position: 'SPECS', status: 'present' },
        { id: '9', name: 'ERVIN LEE JIA LIANG', rank: '2SG', platoon: 'HQ', category: 'SPECS', position: 'SPECS', status: 'present' },
        { id: '10', name: 'SEAN LEE JIAN YI', rank: '2SG', platoon: 'HQ', category: 'SPECS', position: 'SPECS', status: 'present' },
        
        // PLATOON 1
        { id: '11', name: 'HENG JING XUAN', rank: '2LT', platoon: 'PLATOON 1', category: 'PS', position: 'PC', status: 'present' },
        { id: '12', name: 'LOH JIA WEI', rank: '2SG', platoon: 'PLATOON 1', category: 'SPECS', position: 'SPECS', status: 'present' },
        { id: '13', name: 'QUEK ZHEN BENG JOEL', rank: '2SG', platoon: 'PLATOON 1', category: 'SPECS', position: 'SPECS', status: 'present' },
        { id: '14', name: 'WONG KANG YU KAISER', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '15', name: 'JOSHUA JOSEPH JOHN', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '16', name: 'HWANG ZAVIER', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '17', name: 'TAN JUN YUAN RYAN', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '18', name: 'JUAY DING HONG', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '19', name: 'CHUA ZHI YANG JAVIER', rank: 'CFC', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '20', name: 'QUAH LIM KAI', rank: 'CFC', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '21', name: 'CHOO XING RONG', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '22', name: 'JAVAN ONG ZHENG TAT', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '23', name: 'JENSEN TOH RUIXUAN', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '24', name: 'OLSEN BONG GUAN RONG', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '25', name: 'JEREMY TAN JIA LE', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '26', name: 'GOH TIONG LOON', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '27', name: 'SENG WEI XIAN BENJAMIN', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '28', name: 'SANAT ANAND', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '29', name: 'SHAUN RAJ A S/O RAMAESH', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '30', name: 'WEE ZHENG KAI', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '31', name: 'BENJAMIN PANG ZHI HAO', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        
        // PLATOON 2
        { id: '32', name: 'CALEB NG CHI TIONG', rank: '2LT', platoon: 'PLATOON 2', category: 'PS', position: 'PC', status: 'present' },
        { id: '33', name: 'LEROY NEO EU XIANG', rank: '1SG', platoon: 'PLATOON 2', category: 'SPECS', position: 'SPECS', status: 'present' },
        { id: '34', name: 'ONG KAI FENG KEVIN', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '35', name: 'WONG FUKAI ZACHARY', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '36', name: 'LIAO QING WEI BENNY', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '37', name: 'DENZEL LEE EU HAN', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '38', name: 'TIMOTHY ZHANG ZHI SHENG', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '39', name: 'KOH JER MING', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '40', name: 'ZACHARY LEONG', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '41', name: 'BREDON OH JUN JIA', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '42', name: 'MATTHEW GOILE JIAN FENG', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '43', name: 'PRASATH NADARAJAN', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        { id: '44', name: 'CHAN XU YANG TIMOTHY', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
        
        // PLATOON 3
        { id: '45', name: 'WONG EE SENG MAX', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
        { id: '46', name: 'LIN SHU NUO', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
        { id: '47', name: 'RAPHAEL LII', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
        { id: '48', name: 'KESAV KUMAR SUBBURAJ', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
        { id: '49', name: 'LEONG YU XUAN THADDEUS', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
        { id: '50', name: 'RYAN ASHLEY DAVID', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
        { id: '51', name: 'ANG QI YANG RYAN', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' }
      ]
      setPersonnel(defaultPersonnel)
    }
    if (savedInputs) {
      setDailyInputs(JSON.parse(savedInputs))
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('paradeStatePersonnel', JSON.stringify(personnel))
  }, [personnel])

  useEffect(() => {
    localStorage.setItem('paradeStateInputs', JSON.stringify(dailyInputs))
  }, [dailyInputs])

  const addPersonnel = () => {
    if (!newPersonnel.name || !newPersonnel.rank) return
    
    const personnelMember: Personnel = {
      id: Date.now().toString(),
      ...newPersonnel,
      status: 'present'
    }
    
    setPersonnel([...personnel, personnelMember])
    setNewPersonnel({ name: '', rank: '', platoon: '', category: 'TROOPERS', position: 'TROOPERS' })
  }

  const addDailyInput = () => {
    if (!newInput.personnelId) return
    
    const input: DailyInput = {
      date: selectedDate,
      personnelId: newInput.personnelId,
      status: newInput.status,
      notes: newInput.notes
    }
    
    // Remove existing input for this person on this date
    const filteredInputs = dailyInputs.filter(
      input => !(input.date === selectedDate && input.personnelId === newInput.personnelId)
    )
    
    setDailyInputs([...filteredInputs, input])
    setNewInput({ personnelId: '', status: 'present', notes: '' })
  }

  const getParadeStateSummary = (): ParadeStateSummary => {
    const todayInputs = dailyInputs.filter(input => input.date === selectedDate)
    const total = personnel.length
    const present = todayInputs.filter(input => input.status === 'present').length
    const absent = todayInputs.filter(input => input.status === 'absent').length
    const leave = todayInputs.filter(input => input.status === 'leave').length
    const duty = todayInputs.filter(input => input.status === 'duty').length
    const training = todayInputs.filter(input => input.status === 'training').length
    const medical = todayInputs.filter(input => input.status === 'medical').length
    
    return {
      total,
      present,
      absent,
      leave,
      duty,
      training,
      medical,
      presentPercentage: total > 0 ? Math.round((present / total) * 100) : 0
    }
  }

  const getPersonnelStatus = (personnelId: string) => {
    const input = dailyInputs.find(
      input => input.date === selectedDate && input.personnelId === personnelId
    )
    return input?.status || 'present'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'absent': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'leave': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'duty': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'training': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'medical': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const resetToDefaultPersonnel = () => {
    const defaultPersonnel: Personnel[] = [
      // HQ
      { id: '1', name: 'TAN YAN MING', rank: 'CPT', platoon: 'HQ', category: 'PS', position: 'OC', status: 'present' },
      { id: '2', name: 'DOMINIC ANG', rank: '3WO', platoon: 'HQ', category: 'PS', position: 'SM', status: 'present' },
      { id: '3', name: 'TAN KAI EN TERENCE', rank: 'LTA', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
      { id: '4', name: 'EDEN KANG YI EN', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
      { id: '5', name: 'RYAN CHEN YI HENG', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
      { id: '6', name: 'ERNEST FOO JUN WEI', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
      { id: '7', name: 'JADEN TAN YAN HAO', rank: '2LT', platoon: 'HQ', category: 'PS', position: 'PS', status: 'present' },
      { id: '8', name: 'LEE JING SHENG', rank: 'SSG', platoon: 'HQ', category: 'SPECS', position: 'SPECS', status: 'present' },
      { id: '9', name: 'ERVIN LEE JIA LIANG', rank: '2SG', platoon: 'HQ', category: 'SPECS', position: 'SPECS', status: 'present' },
      { id: '10', name: 'SEAN LEE JIAN YI', rank: '2SG', platoon: 'HQ', category: 'SPECS', position: 'SPECS', status: 'present' },
      
      // PLATOON 1
      { id: '11', name: 'HENG JING XUAN', rank: '2LT', platoon: 'PLATOON 1', category: 'PS', position: 'PC', status: 'present' },
      { id: '12', name: 'LOH JIA WEI', rank: '2SG', platoon: 'PLATOON 1', category: 'SPECS', position: 'SPECS', status: 'present' },
      { id: '13', name: 'QUEK ZHEN BENG JOEL', rank: '2SG', platoon: 'PLATOON 1', category: 'SPECS', position: 'SPECS', status: 'present' },
      { id: '14', name: 'WONG KANG YU KAISER', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '15', name: 'JOSHUA JOSEPH JOHN', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '16', name: 'HWANG ZAVIER', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '17', name: 'TAN JUN YUAN RYAN', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '18', name: 'JUAY DING HONG', rank: '3SG', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '19', name: 'CHUA ZHI YANG JAVIER', rank: 'CFC', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '20', name: 'QUAH LIM KAI', rank: 'CFC', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '21', name: 'CHOO XING RONG', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '22', name: 'JAVAN ONG ZHENG TAT', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '23', name: 'JENSEN TOH RUIXUAN', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '24', name: 'OLSEN BONG GUAN RONG', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '25', name: 'JEREMY TAN JIA LE', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '26', name: 'GOH TIONG LOON', rank: 'CPL', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '27', name: 'SENG WEI XIAN BENJAMIN', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '28', name: 'SANAT ANAND', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '29', name: 'SHAUN RAJ A S/O RAMAESH', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '30', name: 'WEE ZHENG KAI', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '31', name: 'BENJAMIN PANG ZHI HAO', rank: 'LCP', platoon: 'PLATOON 1', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      
      // PLATOON 2
      { id: '32', name: 'CALEB NG CHI TIONG', rank: '2LT', platoon: 'PLATOON 2', category: 'PS', position: 'PC', status: 'present' },
      { id: '33', name: 'LEROY NEO EU XIANG', rank: '1SG', platoon: 'PLATOON 2', category: 'SPECS', position: 'SPECS', status: 'present' },
      { id: '34', name: 'ONG KAI FENG KEVIN', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '35', name: 'WONG FUKAI ZACHARY', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '36', name: 'LIAO QING WEI BENNY', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '37', name: 'DENZEL LEE EU HAN', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '38', name: 'TIMOTHY ZHANG ZHI SHENG', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '39', name: 'KOH JER MING', rank: '3SG', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '40', name: 'ZACHARY LEONG', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '41', name: 'BREDON OH JUN JIA', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '42', name: 'MATTHEW GOILE JIAN FENG', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '43', name: 'PRASATH NADARAJAN', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      { id: '44', name: 'CHAN XU YANG TIMOTHY', rank: 'LCP', platoon: 'PLATOON 2', category: 'TROOPERS', position: 'TROOPERS', status: 'present' },
      
      // PLATOON 3
      { id: '45', name: 'WONG EE SENG MAX', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
      { id: '46', name: 'LIN SHU NUO', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
      { id: '47', name: 'RAPHAEL LII', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
      { id: '48', name: 'KESAV KUMAR SUBBURAJ', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
      { id: '49', name: 'LEONG YU XUAN THADDEUS', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
      { id: '50', name: 'RYAN ASHLEY DAVID', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' },
      { id: '51', name: 'ANG QI YANG RYAN', rank: 'SCT', platoon: 'PLATOON 3', category: 'CADETS', position: 'CADETS', status: 'present' }
    ]
    setPersonnel(defaultPersonnel)
    localStorage.setItem('paradeStatePersonnel', JSON.stringify(defaultPersonnel))
  }

  const summary = getParadeStateSummary()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                Parade State Automation
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Automated parade state management system for tracking personnel status and generating daily reports.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('personnel')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'personnel'
                    ? 'bg-accent text-white'
                    : 'bg-secondary/20 text-text-secondary hover:text-text'
                }`}
              >
                Personnel Database
              </button>
              <button
                onClick={() => setActiveTab('input')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'input'
                    ? 'bg-accent text-white'
                    : 'bg-secondary/20 text-text-secondary hover:text-text'
                }`}
              >
                Daily Input
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'report'
                    ? 'bg-accent text-white'
                    : 'bg-secondary/20 text-text-secondary hover:text-text'
                }`}
              >
                Parade State Report
              </button>
            </div>

                             {/* Personnel Database Tab */}
                 {activeTab === 'personnel' && (
                   <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-6">
                     <div className="flex justify-between items-center mb-6">
                       <div>
                         <h2 className="text-2xl font-bold text-text">Personnel Database</h2>
                         <p className="text-text-secondary mt-1">Total Personnel: {personnel.length}</p>
                       </div>
                       <button
                         onClick={resetToDefaultPersonnel}
                         className="btn-secondary text-sm"
                       >
                         Reset to FOXTROT Personnel
                       </button>
                     </div>
                
                {/* Add New Personnel */}
                <div className="bg-primary/50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-text mb-4">Add New Personnel</h3>
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     <input
                       type="text"
                       placeholder="Name"
                       value={newPersonnel.name}
                       onChange={(e) => setNewPersonnel({...newPersonnel, name: e.target.value})}
                       className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text placeholder-text-secondary"
                     />
                     <input
                       type="text"
                       placeholder="Rank"
                       value={newPersonnel.rank}
                       onChange={(e) => setNewPersonnel({...newPersonnel, rank: e.target.value})}
                       className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text placeholder-text-secondary"
                     />
                     <input
                       type="text"
                       placeholder="Platoon"
                       value={newPersonnel.platoon}
                       onChange={(e) => setNewPersonnel({...newPersonnel, platoon: e.target.value})}
                       className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text placeholder-text-secondary"
                     />
                     <select
                       value={newPersonnel.category}
                       onChange={(e) => setNewPersonnel({...newPersonnel, category: e.target.value as any})}
                       className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text"
                     >
                       <option value="PS">PS</option>
                       <option value="PC">PC</option>
                       <option value="SPECS">SPECS</option>
                       <option value="TROOPERS">TROOPERS</option>
                       <option value="CADETS">CADETS</option>
                     </select>
                     <select
                       value={newPersonnel.position}
                       onChange={(e) => setNewPersonnel({...newPersonnel, position: e.target.value as any})}
                       className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text"
                     >
                       <option value="OC">OC</option>
                       <option value="SM">SM</option>
                       <option value="PC">PC</option>
                       <option value="PS">PS</option>
                       <option value="SPECS">SPECS</option>
                       <option value="TROOPERS">TROOPERS</option>
                       <option value="CADETS">CADETS</option>
                     </select>
                     <button
                       onClick={addPersonnel}
                       className="btn-primary"
                     >
                       Add Personnel
                     </button>
                   </div>
                </div>

                {/* Personnel List */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                                         <thead>
                       <tr className="border-b border-secondary/30">
                         <th className="py-3 px-4 text-text font-semibold">Name</th>
                         <th className="py-3 px-4 text-text font-semibold">Rank</th>
                         <th className="py-3 px-4 text-text font-semibold">Platoon</th>
                         <th className="py-3 px-4 text-text font-semibold">Category</th>
                         <th className="py-3 px-4 text-text font-semibold">Position</th>
                         <th className="py-3 px-4 text-text font-semibold">Actions</th>
                       </tr>
                     </thead>
                     <tbody>
                       {personnel.map((member) => (
                         <tr key={member.id} className="border-b border-secondary/20 hover:bg-primary/20">
                           <td className="py-3 px-4 text-text">{member.name}</td>
                           <td className="py-3 px-4 text-text">{member.rank}</td>
                           <td className="py-3 px-4 text-text-secondary">{member.platoon}</td>
                           <td className="py-3 px-4 text-text-secondary">{member.category}</td>
                           <td className="py-3 px-4 text-text-secondary">{member.position}</td>
                           <td className="py-3 px-4">
                             <button
                               onClick={() => setPersonnel(personnel.filter(p => p.id !== member.id))}
                               className="text-red-400 hover:text-red-300 transition-colors"
                             >
                               Remove
                             </button>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Daily Input Tab */}
            {activeTab === 'input' && (
              <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text mb-6">Daily Input</h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-text font-medium mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text"
                  />
                </div>

                {/* Add Daily Input */}
                <div className="bg-primary/50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-text mb-4">Add Daily Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <select
                      value={newInput.personnelId}
                      onChange={(e) => setNewInput({...newInput, personnelId: e.target.value})}
                      className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text"
                    >
                      <option value="">Select Personnel</option>
                                             {personnel.map((member) => (
                         <option key={member.id} value={member.id}>
                           {member.rank} {member.name}
                         </option>
                       ))}
                    </select>
                    <select
                      value={newInput.status}
                      onChange={(e) => setNewInput({...newInput, status: e.target.value as any})}
                      className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text"
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                      <option value="leave">Leave</option>
                      <option value="duty">Duty</option>
                      <option value="training">Training</option>
                      <option value="medical">Medical</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Notes (optional)"
                      value={newInput.notes}
                      onChange={(e) => setNewInput({...newInput, notes: e.target.value})}
                      className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text placeholder-text-secondary"
                    />
                    <button
                      onClick={addDailyInput}
                      className="btn-primary"
                    >
                      Add Status
                    </button>
                  </div>
                </div>

                {/* Daily Input List */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-secondary/30">
                        <th className="py-3 px-4 text-text font-semibold">Personnel</th>
                        <th className="py-3 px-4 text-text font-semibold">Status</th>
                        <th className="py-3 px-4 text-text font-semibold">Notes</th>
                        <th className="py-3 px-4 text-text font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dailyInputs
                        .filter(input => input.date === selectedDate)
                        .map((input, index) => {
                          const member = personnel.find(p => p.id === input.personnelId)
                          return (
                            <tr key={index} className="border-b border-secondary/20 hover:bg-primary/20">
                                                             <td className="py-3 px-4 text-text">
                                 {member ? `${member.rank} ${member.name}` : 'Unknown'}
                               </td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(input.status)}`}>
                                  {input.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-text-secondary">{input.notes || '-'}</td>
                              <td className="py-3 px-4">
                                <button
                                  onClick={() => setDailyInputs(dailyInputs.filter((_, i) => i !== index))}
                                  className="text-red-400 hover:text-red-300 transition-colors"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Parade State Report Tab */}
            {activeTab === 'report' && (
              <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text mb-6">Parade State Report</h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-text font-medium mb-2">Report Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-primary border border-secondary/30 rounded-lg px-4 py-2 text-text"
                  />
                </div>

                {/* Summary Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                  <div className="bg-primary/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-text">{summary.total}</div>
                    <div className="text-sm text-text-secondary">Total</div>
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{summary.present}</div>
                    <div className="text-sm text-green-400">Present</div>
                  </div>
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400">{summary.absent}</div>
                    <div className="text-sm text-red-400">Absent</div>
                  </div>
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{summary.leave}</div>
                    <div className="text-sm text-yellow-400">Leave</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{summary.duty}</div>
                    <div className="text-sm text-blue-400">Duty</div>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">{summary.training}</div>
                    <div className="text-sm text-purple-400">Training</div>
                  </div>
                  <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400">{summary.medical}</div>
                    <div className="text-sm text-orange-400">Medical</div>
                  </div>
                </div>

                {/* Present Percentage */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{summary.presentPercentage}%</div>
                  <div className="text-lg text-text-secondary">Present Rate</div>
                </div>

                {/* Detailed Report */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                                         <thead>
                       <tr className="border-b border-secondary/30">
                         <th className="py-3 px-4 text-text font-semibold">Name</th>
                         <th className="py-3 px-4 text-text font-semibold">Rank</th>
                         <th className="py-3 px-4 text-text font-semibold">Platoon</th>
                         <th className="py-3 px-4 text-text font-semibold">Category</th>
                         <th className="py-3 px-4 text-text font-semibold">Position</th>
                         <th className="py-3 px-4 text-text font-semibold">Status</th>
                         <th className="py-3 px-4 text-text font-semibold">Notes</th>
                       </tr>
                     </thead>
                     <tbody>
                       {personnel.map((member) => {
                         const status = getPersonnelStatus(member.id)
                         const input = dailyInputs.find(
                           input => input.date === selectedDate && input.personnelId === member.id
                         )
                         return (
                           <tr key={member.id} className="border-b border-secondary/20 hover:bg-primary/20">
                             <td className="py-3 px-4 text-text">{member.name}</td>
                             <td className="py-3 px-4 text-text">{member.rank}</td>
                             <td className="py-3 px-4 text-text-secondary">{member.platoon}</td>
                             <td className="py-3 px-4 text-text-secondary">{member.category}</td>
                             <td className="py-3 px-4 text-text-secondary">{member.position}</td>
                             <td className="py-3 px-4">
                               <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(status)}`}>
                                 {status}
                               </span>
                             </td>
                             <td className="py-3 px-4 text-text-secondary">{input?.notes || '-'}</td>
                           </tr>
                         )
                       })}
                     </tbody>
                  </table>
                </div>

                {/* Export Options */}
                <div className="mt-8 text-center">
                  <button className="btn-primary mr-4">
                    Export to PDF
                  </button>
                  <button className="btn-secondary">
                    Export to Excel
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
