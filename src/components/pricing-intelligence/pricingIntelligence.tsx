import React from 'react'
import CustomCard from '../common/customCard'
import { pricingIntelligenceCardData } from '@/utils/pricingIntelligenceData'
import RegionalAveragePriceGraph from './components/regionalAveragePriceGraph'
import PricingOutliersTable from './components/pricingOutliersTable'

const PricingIntelligence = () => {
  return (
   <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* Header Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        {pricingIntelligenceCardData.map((card, idx) => (
          <CustomCard key={idx} {...card} />
        ))}
      </div>
        <RegionalAveragePriceGraph/>
        <PricingOutliersTable/>

    </div>
  )
}

export default PricingIntelligence