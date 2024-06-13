import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import AuthContext from '../auth/auth-context';
import { useContext } from 'react';


function DashBoard() {
  const { products } = data;
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
    <div className="DashBoard">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        ></Basket>
      </div>
    </div>
  );
}

export default DashBoard;