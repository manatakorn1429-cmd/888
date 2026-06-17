interface EquipmentCardProps {
  name:     string
  category: string
  status:   string
}

export function EquipmentCard({ name, category, status }: EquipmentCardProps) {
  const statusLabel: Record<string, string> = {
    available:   'ว่าง',
    borrowed:    'ถูกยืม',
    maintenance: 'ซ่อมบำรุง',
  }

  // สีพื้นหลัง badge ตามสถานะ
  const badgeColor: Record<string, string> = {
    available:   '#16a34a',
    borrowed:    '#dc2626',
    maintenance: '#d97706',
  }

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: 8,
      padding: 16,
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    }}>

      <div>
        <h3 style={{ margin: '0 0 4px 0', fontSize: 16 }}>{name}</h3>
        <p style={{ color: '#64748b', margin: 0, fontSize: 13 }}>{category}</p>
      </div>

      <span style={{
        backgroundColor: badgeColor[status] ?? '#94a3b8',
        color: 'white',
        borderRadius: 12,
        padding: '2px 10px',
        fontSize: 12,
        fontWeight: 'bold',
      }}>
        {statusLabel[status] ?? status}
      </span>

    </div>
  )
}