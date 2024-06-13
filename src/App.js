import DashBoard from './components/dashboard/DashBoard';
import AuthForm from './components/auth/AuthForm';
import Wheels from './components/dashboard/Wheels';
import Axles from './components/dashboard/Axles';
import Bodykit from './components/dashboard/Bodykit';
import ReadyToRace from './components/dashboard/ReadyToRace';
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
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
  );
}

export default App;