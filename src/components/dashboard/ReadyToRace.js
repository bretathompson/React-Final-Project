import React, { useContext } from 'react';
import Bodycss from './Bodykit.module.css';
import Racecss from './ReadyToRace.module.css';
import imgBasic from '../image/Basic.png'; 
import imgArrow from '../image/Arrow.png';
import imgStealth from '../image/stealth.jpg';
import Header from './Header';
import Basket from './Basket';
import AuthContext from '../auth/auth-context';

function ReadyToRace() {
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
        <div className={`${Racecss.container} ${Bodycss.backgroundgradient}`}>
            <Header countCartItems={cartItems.length}></Header>
            <div className='row'>
                <main className="block col-2">
                    <h1 className='product'><a href="/products" className={Bodycss.productLink}>Products</a></h1>
                    <ol className={Racecss.ol}>
                        <li>
                            <article className={Racecss.productarticle}>
                                <figure>
                                    <img className={Racecss.productarticlethumbnail} src={imgBasic} />
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
                                    <img className={Racecss.productarticlethumbnail} src={imgArrow} />
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
                                    <img className={Racecss.productarticlethumbnail} src={imgStealth} />
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




// here is the new readytorace:

// import React, { useContext } from 'react';
// import Bodycss from './Bodykit.module.css';
// import Racecss from './ReadyToRace.module.css';
// import imgBasic from '../image/Basic.png'; 
// import imgArrow from '../image/Arrow.png';
// import imgStealth from '../image/stealth.jpg';
// import Header from './Header';
// import Basket from './Basket';
// import { CartContext } from './CartContext'; // Import your CartContext here

// function ReadyToRace() {
//     const { cartItems, addItem, removeItem, removeAllItems } = useContext(CartContext);

//     const onAdd = (product) => {
//         const exist = cartItems.find((x) => x.id === product.id);
//         if (exist) {
//             addItem({ ...exist, qty: exist.qty + 1 });
//         } else {
//             addItem({ ...product, qty: 1 });
//         }
//     };

//     const onRemove = (product) => {
//         const exist = cartItems.find((x) => x.id === product.id);
//         if (exist.qty === 1) {
//             removeItem(product.id);
//         } else {
//             addItem({ ...exist, qty: exist.qty - 1 });
//         }
//     };

//     const onRemoveAll = () => {
//         removeAllItems();
//     };

//     return (
//         <div className={`${Racecss.container} ${Bodycss.backgroundgradient}`}>
//             <Header countCartItems={cartItems.length}></Header>
//             <div className='row'>
//                 <main className="block col-2">
//                     <h1 className='product'><a href="/products" className={Bodycss.productLink}>Products</a></h1>
//                     <ol className={Racecss.ol}>
//                         <li>
//                             <article className={Racecss.productarticle}>
//                                 <figure>
//                                     <img className={Racecss.productarticlethumbnail} src={imgBasic} alt="Basic" />
//                                 </figure>
//                                 <header>
//                                     <span className={Racecss.productarticlename}>Basic</span>
//                                 </header>
//                                 <p className={Racecss.productarticleprice}>$90</p>
//                                 <div className={Racecss.addtocartbutton}>
//                                     <button id={Racecss.basic1} type="button" onClick={() => onAdd({ id: 1, name: 'Basic Wedge', price: 90 })}> Add to Cart</button>
//                                 </div>
//                             </article>
//                         </li>

//                         <li>
//                             <article className={Racecss.productarticle}>
//                                 <figure>
//                                     <img className={Racecss.productarticlethumbnail} src={imgArrow} alt="Arrow" />
//                                 </figure>
//                                 <header>
//                                     <span className={Racecss.productarticlename}>Arrow</span>
//                                 </header>
//                                 <p className={Racecss.productarticleprice}>$90</p>
//                                 <div className={Racecss.addtocartbutton}>
//                                     <button id={Racecss.arrow1} type="button" onClick={() => onAdd({ id: 2, name: 'Arrow', price: 90 })}> Add to Cart</button>
//                                 </div>
//                             </article>
//                         </li>

//                         <li>
//                             <article className={Racecss.productarticle}>
//                                 <figure>
//                                     <img className={Racecss.productarticlethumbnail} src={imgStealth} alt="Stealth" />
//                                 </figure>
//                                 <header>
//                                     <span className={Racecss.productarticlename}>Stealth</span>
//                                 </header>
//                                 <p className={Racecss.productarticleprice}>$100</p>
//                                 <div className={Racecss.addtocartbutton}>
//                                     <button id={Racecss.stealth1} type="button" onClick={() => onAdd({ id: 3, name: 'Stealth', price: 100 })}> Add to Cart</button>
//                                 </div>
//                             </article>
//                         </li>
//                     </ol>
//                 </main>
//                 <Basket
//                     cartItems={cartItems}
//                     onAdd={onAdd}
//                     onRemove={onRemove}
//                     onRemoveAll={onRemoveAll}
//                 />
//             </div>
//         </div>
//     );
// }

// export default ReadyToRace;
