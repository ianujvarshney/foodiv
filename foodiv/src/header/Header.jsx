import React  from 'react';
import { Container } from 'reactstrap';
import logo from '../assets/images/lg.svg';
import { NavLink, Link } from 'react-router-dom';
import '../styles/header.css';

const nav__links = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Foods',
    path: '/foods',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];


const Header = () => {
  return (
    <header className='header' >
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <Link to='/home'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
          </Link>

          {/* ======= menu ======= */}
          <div className='navigation' >
            <div className='menu d-flex align-items-center gap-5 '>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? 'active__menu' : ''
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ======= nav right icons ======= */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='cart__icon' >
              <i className='ri-shopping-basket-line' />
              <span className='cart__badge'></span>
            </span>

            <span className='user'>
              <Link to='/login'>
                <i className='ri-user-line' />
              </Link>
            </span>

            <span className='mobile__menu'>
              <i className='ri-menu-line' />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
