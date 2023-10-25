import React from 'react';
import {Switch , Route} from 'react-router-dom'
import Home from './components/Layout/Home';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import Classes from './components/Classes';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';


const MyRoute = () => {
    return (
        <div>

            <MyHeader />

            <Switch>
                <Route exact path="/" component={Home}  />
                <Route  path="/class" component={Classes}  />
                <Route  path="/about" component={About}  />
                <Route  path="/blog" component={Blog}  />
                <Route  path="/contact" component={Contact}  />
              
            </Switch>

            <MyFooter />

        </div>
    );
};

export default MyRoute;