import React from 'react'

export default function InlineCss1() {
    const headingStyle= {
        color: "blue",
        fontSize: "24px",
        textAlign: "center",
        padding: "10px",
        
    }
  return (
    <div>
        <h1 style={headingStyle}>Hello welcome to style</h1>
    </div>
  )
}
