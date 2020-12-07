import React from 'react'

export const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="./index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">JS - theory</li>
      </ol>
    </nav>
  )
}