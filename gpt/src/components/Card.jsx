import React from 'react'

export default function Card({children}) {
  return (
      <div className="p-6 rounded-lg  m-4 shadow-lg bg-gray-100">
          {children}
      </div>
  )
}
