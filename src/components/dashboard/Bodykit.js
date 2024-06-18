import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Bodycss from './Bodykit.module.css';
import imgLowProfile from '../image/lowprofile.PNG'; 
import imgLowRider from '../image/lowrider.PNG';
import imgWedge from '../image/wedge.PNG';
import Header from './Header';
import Basket from './Basket';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/auth-context';

function Bodykit() {
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
        <div className={`${Bodycss.container} ${Bodycss.backgroundgradient}`}>
            <Header countCartItems={cartItems.length}></Header>
            <div className='row'>
                <main className="block col-2">
                    <Link className='product' to="/" href="">Products</Link>
                    <ol className={Bodycss.ol}>
                        <li>
                            <article className={Bodycss.productarticle}>
                                <figure>
                                    <img className={Bodycss.productarticlethumbnail} src={imgWedge} alt="Basic Wedge" />
                                </figure>
                                <header>
                                    <span className={Bodycss.productarticlename}>Basic Wedge</span>
                                </header>
                                <p className={Bodycss.productarticleprice}>$30</p>
                                <div className={Bodycss.addtocartbutton}>
                                    <button id={Bodycss.button} type="button" onClick={() => 
                                        onAdd({id: 1, name: 'Basic Wedge', price: 30})}> Add to Cart</button>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={Bodycss.productarticle}>
                                <figure>
                                    <img className={Bodycss.productarticlethumbnail} src={imgLowRider} alt="The Arrow" />
                                </figure>
                                <header>
                                    <span className={Bodycss.productarticlename}>The Arrow</span>
                                </header>
                                <p className={Bodycss.productarticleprice}>$40</p>
                                <div className={Bodycss.addtocartbutton}>
                                    <button id={Bodycss.button} type="button" onClick={() => 
                                        onAdd({id: 2, name: 'The Arrow', price: 40})}> Add to Cart</button>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={Bodycss.productarticle}>
                                <figure>
                                    <img className={Bodycss.productarticlethumbnail} src={imgLowProfile} alt="Slim to WIN" />
                                </figure>
                                <header>
                                    <span className={Bodycss.productarticlename}>Slim to WIN</span>
                                </header>
                                <p className={Bodycss.productarticleprice}>$30</p>
                                <div className={Bodycss.addtocartbutton}>
                                    <button id={Bodycss.button} type="button" onClick={() => 
                                        onAdd({id: 3, name: 'Slim to WIN', price: 30})}> Add to Cart</button>
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

export default Bodykit;
