import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Bodycss from './Bodykit.module.css';
import Wheelscss from './Wheels.module.css';
import imgUltraLight from '../image/UltraLight.PNG'; 
import imgstock from '../image/stock.PNG';
import imgProLight from '../image/ProLight.PNG';
import Header from './Header';
import Basket from './Basket';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/auth-context';

function Wheels() {
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
        <div className={`${Wheelscss.container} ${Bodycss.backgroundgradient}`}>
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
                <main className="block col-2">
                    <Link className='product' to="/" href="">Products</Link>
                    <ol className={Wheelscss.ol}>
                        <li>
                            <article className={Wheelscss.productarticle}>
                                <figure>
                                    <img className={Wheelscss.productarticlethumbnail} src={imgstock} alt="Stock" />
                                </figure>
                                <header>
                                    <span className={Wheelscss.productarticlename}>Stock</span>
                                </header>
                                <p className={Wheelscss.productarticleprice}>$8</p>
                                <div className={Wheelscss.addtocartbutton}>
                                    <button id={Wheelscss.button} type="button" onClick={() => onAdd({ id: 1, name: 'Stock', price: 8 })}> Add to Cart</button>
                                </div>
                            </article>
                        </li>

                        <li>
                            <article className={Wheelscss.productarticle}>
                                <figure>
                                    <img className={Wheelscss.productarticlethumbnail} src={imgProLight} alt="Pro Light" />
                                </figure>
                                <header>
                                    <span className={Wheelscss.productarticlename}>PL 1.5 grams</span>
                                </header>
                                <p className={Wheelscss.productarticleprice}>$38</p>
                                <div className={Wheelscss.addtocartbutton}>
                                    <button id={Wheelscss.button} type="button" onClick={() => onAdd({ id: 2, name: 'Pro Light', price: 38 })}> Add to Cart</button>
                                </div>
                            </article>
                        </li>

                        <li>
                            <article className={Wheelscss.productarticle}>
                                <figure>
                                    <img className={Wheelscss.productarticlethumbnail} src={imgUltraLight} alt="Ultra Light" />
                                </figure>
                                <header>
                                    <span className={Wheelscss.productarticlename}>UL 1 grams</span>
                                </header>
                                <p className={Wheelscss.productarticleprice}>$45</p>
                                <div className={Wheelscss.addtocartbutton}>
                                    <button id={Wheelscss.button} type="button" onClick={() => onAdd({ id: 3, name: 'Ultra Light', price: 45 })}> Add to Cart</button>
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

export default Wheels;
