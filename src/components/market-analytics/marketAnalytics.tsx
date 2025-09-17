import React from 'react'
import CustomCard from '../common/customCard'
import { marketAnalyticsCardData } from '../../utils/marketAnalyticsData'
import PriceMarketTrendGraph from './components/priceMarketTrendGraph'
import ModelSpecificTable from './components/modelSpecificTable'

const MarketAnalytics = () => {
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
        {marketAnalyticsCardData.map((card, idx) => (
          <CustomCard key={idx} {...card} />
        ))}
      </div>
        <PriceMarketTrendGraph/>
        <ModelSpecificTable/>

    </div>
  )
}

export default MarketAnalytics