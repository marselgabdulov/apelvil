import React from "react"
import "./Cube.scss"

function Cube() {
  return (
    <div className="cube_area">
      <div className="cube">
        <div className="front">ECM</div>
        <div className="back">FA</div>
        <div className="left">HR</div>
        <div className="right">CRM</div>
        <div className="bottom">SCM</div>
        <div className="top">BI</div>
      </div>
    </div>
  )
}

export default Cube
