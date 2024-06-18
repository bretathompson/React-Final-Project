import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Bodycss from './Bodykit.module.css';
import Axlescss from './Axles.module.css';
import imgProSSGroove from '../image/ProSSGroove.PNG'; 
import imgspeed from '../image/speed.PNG';
import imgZinc from '../image/Zinc.PNG';
import Header from './Header';
import Basket from './Basket';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/auth-context';

function Axles() {
  const cartcontext = useContext(AuthContext);
  const { cartItems, setCartItems } = cartcontext;

  const onAdd = (product) => {
    const newItem = { ...product, cartId: uuidv4(), qty: 1 };
    setCartItems([...cartItems, newItem]);
  };

  const onRemove = (cartId) => {
    setCartItems(cartItems.filter((item) => item.cartId !== cartId));
  };

  const onRemoveAll = () => {
    setCartItems([]);
  };

  return (
    <div className={`${Axlescss.container} ${Bodycss.backgroundgradient}`}>
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <main className="block col-2">
          <Link className='product' to="/" href="">Products</Link>
          <ol className={Axlescss.ol}>
            <li>
              <article className={Axlescss.productarticle}>
                <figure>
                  <img className={Axlescss.productarticlethumbnail} src={imgspeed} alt="Speed Axles" />
                </figure>
                <header>
                  <span className={Axlescss.productarticlename}>Speed Axles</span>
                </header>
                <p className={Axlescss.productarticleprice}>$3</p>
                <div className={Axlescss.addtocartbutton}>
                  <button id={Axlescss.button} type="button" onClick={() => 
                    onAdd({ id: 3, name: 'Speed Axles', price: 3 })}> Add to Cart</button>
                </div>
              </article>
            </li>
            <li>
              <article className={Axlescss.productarticle}>
                <figure>
                  <img className={Axlescss.productarticlethumbnail} src={imgZinc} alt="Zinc Speed" />
                </figure>
                <header>
                  <span className={Axlescss.productarticlename}>Zinc Speed</span>
                </header>
                <p className={Axlescss.productarticleprice}>$5</p>
                <div className={Axlescss.addtocartbutton}>
                  <button id={Axlescss.button} type="button" onClick={() => 
                    onAdd({ id: 4, name: 'Zinc Speed', price: 5 })}> Add to Cart</button>
                </div>
              </article>
            </li>
            <li>
              <article className={Axlescss.productarticle}>
                <figure>
                  <img className={Axlescss.productarticlethumbnail} src={imgProSSGroove} alt="Pro SS" />
                </figure>
                <header>
                  <span className={Axlescss.productarticlename}>Pro SS</span>
                </header>
                <p className={Axlescss.productarticleprice}>$20</p>
                <div className={Axlescss.addtocartbutton}>
                  <button id={Axlescss.button} type="button" onClick={() => 
                    onAdd({ id: 5, name: 'Pro SS Grooved', price: 20 })}> Add to Cart</button>
                </div>
              </article>
            </li>
          </ol>
        </main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />
      </div>
    </div>
  );
}

export default Axles;

