import React from 'react'
import './SectionHeading.css'

export const Heading = ({heading}) => {
  return (
    <div className="heading">
      {heading}
    </div>
  )
}

export const SubHeading = ({subHeading}) => {
  return (
    <div className="sub-heading">
      {subHeading}
    </div>
  )
}
