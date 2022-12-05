import { useState } from 'react'
import SwitchModeTheme from './switch-mode/SwitchMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import "./_nav.scss";
import Logo from './logo/Logo';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Link to='/' className='navbar-brand' aria-label='Jose Luis Olivar'><Logo /></Link>
      <div className="mobile-items">
        <ul>
          <li className='switch-mobile'><SwitchModeTheme /></li>
          <li className='burger-button' onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars} /></li>
        </ul>
      </div>
      <div className={isOpen ? 'button-close active' : 'button-close'} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul className={isOpen ? 'links-nav active' : 'links-nav'}>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <Link to="/products" aria-label='Products Fake-Store'>Products</Link>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <Link to='/categories' aria-label='Categories Fake-Store'>Categories</Link>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <Link to="/singup" aria-label='SingUp Fake-Store'>SingUp</Link>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <Link to="/login" aria-label='Login Fake-Store'>Login</Link>
        </li>
        <li className='switch-desktop'><SwitchModeTheme /></li>
      </ul>
    </header >
  )
}

export default Header