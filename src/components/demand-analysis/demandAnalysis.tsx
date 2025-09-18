import React from 'react'
import CustomCard from '../common/customCard'
import { demandAnalysisCardData } from '@/utils/demandAnalysisData'
import TopModelsVolumeGraph from './components/topModelsVolumeGraph'
import MissingAlertTable from './components/missingAlertTable'

const DemandAnalysis = () => {
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
        {demandAnalysisCardData.map((card, idx) => (
          <CustomCard key={idx} {...card} />
        ))}
      </div>
        <TopModelsVolumeGraph/>
        <MissingAlertTable/>

    </div>
  )
}

export default DemandAnalysis