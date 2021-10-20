import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Diagonostic from './Components/Diagonostic/Diagonostic';
import Register from './Components/Register.js/Register';
import Services from './Components/Services/Services';
import AuthProvider from './context/AuthProvider';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import ServiceDetais from './Components/ServiceDetails/ServiceDetails';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/diagonostic">
              <Diagonostic></Diagonostic>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>







          </Switch>

        </BrowserRouter>
      </AuthProvider>

      <Footer></Footer>
    </div>
  );
}

export default App;
