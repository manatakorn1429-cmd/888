import { EquipmentCard } from './components/EquipmentCard'  // [1] import Component

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h1>รายการอุปกรณ์ไอที</h1>
      <EquipmentCard name="MacBook Pro"    category="Notebook"  status="available"   />
      <EquipmentCard name="iPad Air"       category="Tablet"    status="borrowed"    />
      <EquipmentCard name="Projector Epson" category="Projector" status="maintenance" />
    </div>
  )
}