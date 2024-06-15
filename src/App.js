import DashBoard from './components/dashboard/DashBoard';
import AuthForm from './components/auth/AuthForm';
import Wheels from './components/dashboard/Wheels';
import Axles from './components/dashboard/Axles';
import Bodykit from './components/dashboard/Bodykit';
import ReadyToRace from './components/dashboard/ReadyToRace';
import { Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/dashboard/CartContext';


function App() {

  return (
    <CartProvider>
    
    <Switch>  
      <Route exact path="/bodykit" component={Bodykit} />
      <Route exact path="/wheels" component={Wheels} />
      <Route exact path="/axles" component={Axles} />
      <Route exact path="/readytorace" component={ReadyToRace} />
      <Route path="/signin">
        <AuthForm />
      </Route>

      <Route path="/">
        <DashBoard />
      </Route>
    </Switch>
  
    </CartProvider>
  );
}

export default App;


// chat gbp had me create a cartcontext not sure why when it should be 
  // my basket.js then it wants me to add this to App.js or index.js
  // I dont have a HOME line 56 not sure what the home page is app.js, index.js, dashboard



// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { CartProvider } from './components/dashboard/CartContext';
// import Wheels from './components/dashboard/Wheels';
// import Axles from './components/dashboard/Axles';
// import Product from './components/dashboard/Product';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/product" component={Product} />
//           <Route path="/wheels" component={Wheels} />
//           <Route path="/axles" component={Axles} />
//         </Switch>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


