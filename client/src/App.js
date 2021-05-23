import logo from './logo.svg';
import './App.css';
import Header from './Component/Layout/Header';
import Login from './Component/Auth/Login';
import Footer from './Component/Layout/Footer';
import { checkAuth } from './utils/auth'
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from './Component/Auth/Register';
import Index from './Component/Home/Index';
function App(props) {
  return (
    <>
      <Header {...props} />
      <Switch >
        <PrivateRoute exact path='/' component={Index}></PrivateRoute>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
      </Switch>
      <Footer />
    </>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    checkAuth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
export default App;
