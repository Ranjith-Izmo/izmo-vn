import React from 'react'
import CustomCard from '../../../components/customCard'
import { inventoryCardData } from '../../../utils/inventoryData'
import InventoryOrderGraph from './inventoryOrderGraph'
import InventoryWeekGraph from './inventoryWeekGraph'
import InventoryListTable from './invetoryListTable'

const inventoryManagement = () => {
  return (
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

      {/* Header Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        {inventoryCardData.map((card, idx) => (
          <CustomCard key={idx} {...card} />
        ))}
      </div>

      {/* Graph Section */}
      <div style={{ display: "grid",  gridRow: 1,  gridTemplateColumns: "repeat(2, 1fr)",flexWrap: "wrap", gap: "40px" }}>
        <InventoryOrderGraph />
        <InventoryWeekGraph />
      </div>
      <InventoryListTable />
    </div>
  )
}

export default inventoryManagement