import React, { useContext } from 'react';
import Bodycss from './Bodykit.module.css';
import imgLowProfile from '../image/lowprofile.PNG'; 
import imgLowRider from '../image/lowrider.PNG';
import imgWedge from '../image/wedge.PNG';
import Header from './Header';
import Basket from './Basket';
import AuthContext from '../auth/auth-context';


function Bodykit() {
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
                <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onRemoveAll={onRemoveAll}></Basket>
            </div>       
        </div>
    );
}

export default Bodykit;
