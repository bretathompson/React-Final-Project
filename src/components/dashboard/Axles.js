import React, { useContext } from 'react';
import Bodycss from './Bodykit.module.css';
import Axlescss from './Axles.module.css';
import imgProSSGroove from '../image/ProSSGroove.PNG'; 
import imgspeed from '../image/speed.PNG';
import imgZinc from '../image/Zinc.PNG';
import Basket from './Basket';
import Header from './Header';
import AuthContext from '../auth/auth-context';

function Axles() {
  const cartcontext = useContext(AuthContext);
    const { cartItems, setCartItems } = cartcontext;

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    
    const onRemoveAll = () => {
        setCartItems([]);
    };

  return (
    <div>
      <Header countCartItems={cartItems.length}></Header>
      <div className='row'>
        <main className="block col-2">
        <h1 className='product'><a href="/products" className={Bodycss.productLink}>Products</a></h1>  
          <ol className={Axlescss.ol}>
            <li>
              <article className={Axlescss.productarticle}>
                <figure>
                  <img className={Axlescss.productarticlethumbnail} src={imgspeed} />
                </figure>
                <header>
                  <span className={Axlescss.productarticlename}>Speed Axles </span>
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
                  <img className={Axlescss.productarticlethumbnail} src={imgZinc} />
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
                  <img className={Axlescss.productarticlethumbnail} src={imgProSSGroove} />
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
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onRemoveAll={onRemoveAll}></Basket>
      </div>       
    </div>
  );
}

export default Axles;
