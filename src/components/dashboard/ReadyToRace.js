import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Bodycss from './Bodykit.module.css';
import Racecss from './ReadyToRace.module.css';
import imgBasic from '../image/Basic.png'; 
import imgArrow from '../image/Arrow.png';
import imgStealth from '../image/stealth.jpg';
import Header from './Header';
import Basket from './Basket';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/auth-context';

function ReadyToRace() {
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
        <div className={`${Racecss.container} ${Bodycss.backgroundgradient}`}>
            <Header countCartItems={cartItems.length}></Header>
            <div className='row'>
                <main className="block col-2">
                    <Link className='product' to="/" href="">Products</Link>
                    <ol className={Racecss.ol}>
                        <li>
                            <article className={Racecss.productarticle}>
                                <figure>
                                    <img className={Racecss.productarticlethumbnail} src={imgBasic} alt="Basic Wedge" />
                                </figure>
                                <header>
                                    <span className={Racecss.productarticlename}>Basic</span>
                                </header>
                                <p className={Racecss.productarticleprice}>$90</p>
                                <div className={Racecss.addtocartbutton}>
                                    <button id={Racecss.basic1} type="button" onClick={() => onAdd({ id: 1, name: 'Basic Wedge', price: 90 })}> Add to Cart</button>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={Racecss.productarticle}>
                                <figure>
                                    <img className={Racecss.productarticlethumbnail} src={imgArrow} alt="Arrow" />
                                </figure>
                                <header>
                                    <span className={Racecss.productarticlename}>Arrow</span>
                                </header>
                                <p className={Racecss.productarticleprice}>$90</p>
                                <div className={Racecss.addtocartbutton}>
                                    <button id={Racecss.arrow1} type="button" onClick={() => onAdd({ id: 2, name: 'Arrow', price: 90 })}> Add to Cart</button>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={Racecss.productarticle}>
                                <figure>
                                    <img className={Racecss.productarticlethumbnail} src={imgStealth} alt="Stealth" />
                                </figure>
                                <header>
                                    <span className={Racecss.productarticlename}>Stealth</span>
                                </header>
                                <p className={Racecss.productarticleprice}>$100</p>
                                <div className={Racecss.addtocartbutton}>
                                    <button id={Racecss.stealth1} type="button" onClick={() => onAdd({ id: 3, name: 'Stealth', price: 100 })}> Add to Cart</button>
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

export default ReadyToRace;
