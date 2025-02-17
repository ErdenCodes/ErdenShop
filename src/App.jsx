import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SliderComponent from './components/Slider';
import Team from './components/Team';
import Shop from './components/Shop';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Header />
     
      <main>
        <Switch>
          <Route exact path="/" component={SliderComponent} />
          <Route path="/team" component={Team} />
          <Route path="/shop" component={Shop} />
          <Route path="/product" component={Product} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/signup" component={Signup} />
          {/* Add more routes as needed */}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;