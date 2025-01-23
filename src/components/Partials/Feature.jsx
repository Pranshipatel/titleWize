import React from 'react'
import FeatureTop from './Features/FeatureTop'
import FeatureBottom from './Features/FeatureBottom'
import '../css/Feature.css'

const Feature = () => {
  return (
    <div className='feature h-fit'>
      <FeatureTop/>
      <FeatureBottom/>
    </div>  
  )
}

export default Feature
