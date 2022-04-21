import React from 'react';
import Bodycss from './Bodykit.module.css';

import imgLowProfile from '../image/lowprofile.PNG'; 
import imgLowRider from '../image/lowrider.PNG';
import imgWedge from '../image/wedge.PNG';

import Basket from './Basket';
import Header from './Header';
import AuthContext from '../auth/auth-context';
import { useContext } from 'react';


function Bodykit() {
    const cartcontext = useContext(AuthContext);
    const {cartItems, setCartItems} = cartcontext;

    return (
        <div>
            <Header countCartItems={cartItems.length}></Header>
          <div className='row'>
               <main className="block col-2">
                 <h1 className='product'>Products</h1>       
                    
                 <ol className={Bodycss.ol}>
                <li>
                <article className={Bodycss.productarticle}>
                    <figure>
                    <img className={Bodycss.productarticlethumbnail} src={imgWedge} />
                    </figure>
                    <header>
                    <span className={Bodycss.productarticlename}>Basic Wedge</span>
                    </header>
                    <p className={Bodycss.productarticleprice}>$30</p>
                    <div className={Bodycss.addtocartbutton}>
                    <button id={Bodycss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Bodycss.productarticle}>
                    <figure>
                    <img className={Bodycss.productarticlethumbnail} src={imgLowRider} />
                    </figure>
                    <header>
                    <span className={Bodycss.productarticlename}>The Arrow</span>
                    </header>
                    <p className={Bodycss.productarticleprice}>$40</p>
                    <div className={Bodycss.addtocartbutton}>
                    <button id={Bodycss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Bodycss.productarticle}>
                    <figure>
                    <img className={Bodycss.productarticlethumbnail} src={imgLowProfile} />
                    </figure>
                    <header>
                    <span className={Bodycss.productarticlename}>Slim to WIN</span>
                    </header>
                    <p className={Bodycss.productarticleprice}>$30</p>
                    <div className={Bodycss.addtocartbutton}>
                    <button id={Bodycss.button} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                </ol>
              </main>
            </div>       
        </div>

    );
}



export default Bodykit;
