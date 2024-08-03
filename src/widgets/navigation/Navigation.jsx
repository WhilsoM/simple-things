import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navigation.css'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    
      <ul className={`nav ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/products" className="nav-link">Продукция</NavLink></li>
        <li><NavLink to="/materials" className="nav-link">Материалы</NavLink></li>
        <li><NavLink to="/about-us" className="nav-link">О нас</NavLink></li>
        <li><NavLink to="/contacts" className="nav-link">Контакты</NavLink></li>
        <li>
          <NavLink className="nav-search last-elem">
            <img src="/img/search.svg" alt="search"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" className="nav-log-in last-elem">
            <img src="/img/log_in.svg" alt="sign-up"/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
