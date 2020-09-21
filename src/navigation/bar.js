import React from 'react';
import{NavLink} from 'react-router-dom';

const Bar = ()=> {
    return(<div>
        <NavLink exact to='/' >Home</NavLink>
        <NavLink exact to='/About' >About</NavLink>
        <NavLink exact to='/services' >Services</NavLink>
        <NavLink exact to='/Visit'>Visit</NavLink>
   </div> )
}
export default Bar;