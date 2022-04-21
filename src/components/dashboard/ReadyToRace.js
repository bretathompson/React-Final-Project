import React from 'react';
import Racecss from './ReadyToRace.module.css';

import imgBasic from '../image/Basic.png'; 
import imgArrow from '../image/Arrow.png';
import imgStealth from '../image/stealth.jpg';

import Basket from './Basket';
import Header from './Header';
import AuthContext from '../auth/auth-context';
import { useContext } from 'react';


function ReadyToRace() {
    const cartcontext = useContext(AuthContext);
    const {cartItems, setCartItems} = cartcontext;

    return (
      <div>
            <Header countCartItems={cartItems.length}></Header>
          <div className='row'>
               <main className="block col-2">
                 <h1 className='product'>Products</h1>  

                  <ol className={Racecss.ol}>

                <li>
                <article className={Racecss.productarticle}>
                    <figure>
                    <img className={Racecss.productarticlethumbnail} src={imgBasic} />
                    </figure>
                    <header>
                    <span className={Racecss.productarticlename}>Basic</span>
                    </header>
                    <p className={Racecss.productarticleprice}>$60</p>
                    <div className={Racecss.addtocartbutton}>
                    <button id={Racecss.basic1} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Racecss.productarticle}>
                    <figure>
                    <img className={Racecss.productarticlethumbnail} src={imgArrow} />
                    </figure>
                    <header>
                    <span className={Racecss.productarticlename}>Arrow</span>
                    </header>
                    <p className={Racecss.productarticleprice}>$65</p>
                    <div className={Racecss.addtocartbutton}>
                    <button id={Racecss.arrow1} type="button"> Add to Cart</button>
                    </div>
                </article>
                </li>

                <li>
                <article className={Racecss.productarticle}>
                    <figure>
                    <img className={Racecss.productarticlethumbnail} src={imgStealth} />
                    </figure>
                    <header>
                    <span className={Racecss.productarticlename}>Stealth</span>
                    </header>
                    <p className={Racecss.productarticleprice}>$100</p>
                    <div className={Racecss.addtocartbutton}>
                    <button id={Racecss.stealth1} type="button"> Add to Cart</button>
                    </div>
                </article>
              </li>
              </ol>             
            </main>
        </div>       
     </div>

    );
}



export default ReadyToRace;
