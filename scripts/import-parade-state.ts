import * as XLSX from 'xlsx'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('🚀 Starting Parade State import...')
    
    // Read the Excel file
    const workbook = XLSX.readFile('Parade State.xlsx')
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    
    // Convert to JSON
    const rows = XLSX.utils.sheet_to_json<any>(worksheet, { defval: '' })
    
    console.log(`📊 Found ${rows.length} rows in Excel file`)
    
    // Process each row
    let importedCount = 0
    let updatedCount = 0
    
    for (const row of rows) {
      try {
        // Extract data (adjust column names based on your Excel structure)
        const name = row['Name'] || row['NAME'] || row['name']
        const rank = row['Rank'] || row['RANK'] || row['rank']
        const platoon = row['Platoon'] || row['PLATOON'] || row['platoon']
        const status = row['Status'] || row['STATUS'] || row['status'] || 'Available'
        
        // Skip if essential data is missing
        if (!name || !rank || !platoon) {
          console.log(`⚠️  Skipping row: Missing essential data - Name: ${name}, Rank: ${rank}, Platoon: ${platoon}`)
          continue
        }
        
        // Check if personnel already exists
        const existingPersonnel = await prisma.personnel.findFirst({
          where: { name }
        })
        
        if (existingPersonnel) {
          // Update existing personnel
          await prisma.personnel.update({
            where: { id: existingPersonnel.id },
            data: { rank, platoon, status, updatedAt: new Date() }
          })
          updatedCount++
          console.log(`🔄 Updated: ${name} (${rank}) - ${platoon}`)
        } else {
          // Create new personnel
          await prisma.personnel.create({
            data: { name, rank, platoon, status }
          })
          importedCount++
          console.log(`✅ Created: ${name} (${rank}) - ${platoon}`)
        }
      } catch (error) {
        console.error(`❌ Error processing row:`, row, error)
      }
    }
    
    console.log('\n🎉 Import completed successfully!')
    console.log(`📈 New personnel imported: ${importedCount}`)
    console.log(`🔄 Personnel updated: ${updatedCount}`)
    console.log(`📊 Total processed: ${importedCount + updatedCount}`)
    
    // Create default admin user if it doesn't exist
    const adminExists = await prisma.user.findUnique({
      where: { email: 'admin@foxtrot.saf.sg' }
    })
    
    if (!adminExists) {
      const hashedPassword = await hash('P@ssw0rd', 12)
      await prisma.user.create({
        data: {
          email: 'admin@foxtrot.saf.sg',
          name: 'System Administrator',
          password: hashedPassword,
          role: 'ADMIN',
          rank: '3SG',
          unit: '10C4I Foxtrot'
        }
      })
      console.log('👑 Default admin user created: admin@foxtrot.saf.sg / P@ssw0rd')
    }
    
  } catch (error) {
    console.error('💥 Import failed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Unexpected error:', error)
    process.exit(1)
  })
