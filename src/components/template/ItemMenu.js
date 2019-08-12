import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

const ItemMenu = props =>{
    return(
        <NavItem>
            <NavLink tag={Link} to={props.url}>{props.title}</NavLink>
        </NavItem>
    )
}

export default ItemMenu