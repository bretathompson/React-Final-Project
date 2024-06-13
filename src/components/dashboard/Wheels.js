import React, { useContext } from 'react';
import Bodycss from './Bodykit.module.css';
import Wheelscss from './Wheels.module.css';
import imgUltraLight from '../image/UltraLight.PNG'; 
import imgstock from '../image/stock.PNG';
import imgProLight from '../image/ProLight.PNG';
import Basket from './Basket';
import Header from './Header';
import AuthContext from '../auth/auth-context';


function Wheels() {
    const cartcontext = useContext(AuthContext);
    const {cartItems, setCartItems} = cartcontext;
    
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

                <ol className={Wheelscss.ol}>
                 <li>
                <article className={Wheelscss.productarticle}>
                    <figure>
                    <img className={Wheelscss.productarticlethumbnail} src={imgstock} />
                    </figure>
                    <header>
                    <span className={Wheelscss.productarticlename}>Stock</span>
                    </header>
                    <p className={Wheelscss.productarticleprice}>$8</p>
                    <div className={Wheelscss.addtocartbutton}>
                        <button id={Wheelscss.button} type="button" onClick={() => 
                            onAdd({id: 1, name: 'Stock', price: 30})}> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Wheelscss.productarticle}>
                    <figure>
                    <img className={Wheelscss.productarticlethumbnail} src={imgProLight} />
                    </figure>
                    <header>
                    <span className={Wheelscss.productarticlename}>PL 1.5 grams</span>
                    </header>
                    <p className={Wheelscss.productarticleprice}>$38</p>
                    <div className={Wheelscss.addtocartbutton}>
                    <button id={Wheelscss.button} type="button" onClick={() => 
                        onAdd({id: 2, name: 'Pro Light', price: 38})}> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                 <article className={Wheelscss.productarticle}>
                    <figure>
                    <img className={Wheelscss.productarticlethumbnail} src={imgUltraLight} />
                    </figure>
                    <header>
                    <span className={Wheelscss.productarticlename}>UL 1 grams</span>
                    </header>
                    <p className={Wheelscss.productarticleprice}>$45</p>
                    <div className={Wheelscss.addtocartbutton}>
                    <button id={Wheelscss.button} type="button" onClick={() => 
                        onAdd({id: 2, name: 'Ultra Light', price: 45})}> Add to Cart</button>
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

export default Wheels;
