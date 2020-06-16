import React, { useState } from "react"
import "./Subnav.scss"
import { Link } from "gatsby"
import classnames from "classnames"
import Triangle from "../../../assets/triangle.svg"

function Subnav({ items, isVisible, mainLinkName, mainLinkAddress }) {
  const [dropdownVisible, setDropDownVisible] = useState(false)
  return (
    <div
      className="subnav"
      onMouseEnter={() => setDropDownVisible(true)}
      onMouseLeave={() => setDropDownVisible(false)}
    >
      <div className="subnav__main-link">
        <Link to={`/${mainLinkAddress}`}>{mainLinkName}</Link>
      </div>
      <Triangle />
      <div
        className={classnames("dropdown", {
          "dropdown--hidden": dropdownVisible,
        })}
      >
        {items.map(item => (
          <Link to={item.link} className="dropdown__item" key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Subnav
