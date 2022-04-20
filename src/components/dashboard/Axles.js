import React from 'react';
import Axlescss from './Axles.module.css';

import imgProSSGroove from '../image/ProSSGroove.PNG'; 
import imgspeed from '../image/speed.PNG';
import imgZinc from '../image/Zinc.PNG';

import Basket from './Basket';
import Header from './Header';
import AuthContext from '../auth/auth-context';
import { useContext } from 'react';


function Axles() {
    const cartcontext = useContext(AuthContext);
    const {cartItems, setCartItems} = cartcontext;

    return (
      <div>
          <Header countCartItems={cartItems.length}></Header>
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
                    <button id={Axlescss.button} type="button"> Add to Cart</button>
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
                    <button id={Axlescss.button} type="button"> Add to Cart</button>
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
                    <button id={Axlescss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

             </ol>
             
        </div>

    );
}

export default Axles;
