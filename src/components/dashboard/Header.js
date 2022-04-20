import React, {useContext} from 'react';
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
      <div>
        <a className='cart' href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}            
        </a>{' '}
        {headerctx.isLoggedIn ?
          <Link onClick={headerctx.logout} to="/" className='logout'> Logout</Link>:
          <Link className='signin' to="/signin"> SignIn</Link>}
      </div>
    </header>
  );
}