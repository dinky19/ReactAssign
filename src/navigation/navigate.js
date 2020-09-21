import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Visit from './Visit';
import Home from './Home';
import Services from './Services'
import About from './About'
import Bar from './bar';
const Navbar = () => {
   
return( 
        <>
        <bar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/About' component={About}/>
        <Route  path='/services' component={Services}/>
        <Route  path='/Visit' component={Visit}/>
        </Switch>
        </>);
}
export default Navbar;