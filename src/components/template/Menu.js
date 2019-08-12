import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

import { Link } from 'react-router-dom';
import ItemMenu from './ItemMenu';

const Menu = () => {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

    return(
        <Navbar color="light" light expand="md">
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={open} navbar>
                <Nav className="ml-auto" navbar>
                    <ItemMenu url='/' title="Home"></ItemMenu>
                    <ItemMenu url='/news/business' title="Negócios"></ItemMenu>
                    <ItemMenu url='/news/entertainment' title="Entretenimento"></ItemMenu>
                    <ItemMenu url='/news/technology' title="Tecnologia"></ItemMenu>
                    <ItemMenu url='/news/sports' title="Esportes"></ItemMenu>
                    <ItemMenu url='/news/science' title="Ciência"></ItemMenu>
                    <ItemMenu url='/news/health' title="Saúde"></ItemMenu>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Menu;