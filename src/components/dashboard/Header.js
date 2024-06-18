import React, { useContext } from 'react';
import AuthContext from '../auth/auth-context';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const headerctx = useContext(AuthContext);

  return (
    <header className="block center">
      <div>
        <a href="#/">
          <h1 className='shoppingcart'>Derby-Pro</h1>
        </a>
      </div>
      <div className="header-links center">
        <Link className='home' to="/" href="">Home</Link>
        <Link className='products' to="/products">Products</Link>
        <Link className='ready-to-race' to="/readytorace">Cars Ready to Race</Link>
        <Link className='axles' to="/axles">Axles</Link>
        <Link className='wheels' to="/wheels">Wheels</Link>
        <Link className='body-kits' to="/bodykit">Body Kits</Link>
        <div style={{ marginRight: '20px' }}></div>
        {headerctx.isLoggedIn ? (
          <Link onClick={headerctx.logout} to="/" className='logout'>Logout</Link>
        ) : (
          <Link className='signin' to="/signin">Sign In</Link>
        )}
      </div>
    </header>
  );
}

