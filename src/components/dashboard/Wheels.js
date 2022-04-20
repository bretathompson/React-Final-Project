import React from 'react';
import Wheelscss from './Wheels.module.css';

import imgUltraLight from '../image/UltraLight.PNG'; 
import imgstock from '../image/stock.PNG';
import imgProLight from '../image/ProLight.PNG';

import Basket from './Basket';
import Header from './Header';
import AuthContext from '../auth/auth-context';
import { useContext } from 'react';


function Wheels() {
    const cartcontext = useContext(AuthContext);
    const {cartItems, setCartItems} = cartcontext;

    return (
      <div>
          <Header countCartItems={cartItems.length}></Header>
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
                    <button id={Wheelscss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Wheelscss.productarticle}>
                    <figure>
                    <img className={Wheelscss.productarticlethumbnail} src={imgProLight} />
                    </figure>
                    <header>
                    <span className={Wheelscss.productarticlename}>PL 1.5g</span>
                    </header>
                    <p className={Wheelscss.productarticleprice}>$38</p>
                    <div className={Wheelscss.addtocartbutton}>
                    <button id={Wheelscss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Wheelscss.productarticle}>
                    <figure>
                    <img className={Wheelscss.productarticlethumbnail} src={imgUltraLight} />
                    </figure>
                    <header>
                    <span className={Wheelscss.productarticlename}>UL 1grams</span>
                    </header>
                    <p className={Wheelscss.productarticleprice}>$45</p>
                    <div className={Wheelscss.addtocartbutton}>
                    <button id={Wheelscss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

             </ol>
             
        </div>

    );
}

export default Wheels;
