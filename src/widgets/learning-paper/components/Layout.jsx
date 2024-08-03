import React from 'react'

export const Layout = ({version, imgPath, className}) => {
  return (
    <div className="layout">
      <img
        className={`what-img ${className}`}
        src={`/img/layouts/${imgPath}`}
        alt="layout1"
      />
      <div className="text">
        <h3 className="what-paper-text">{version}</h3>
        <p className="what-paper-desc">Результат вашего обучения</p>
      </div>
    </div>
  )
}
