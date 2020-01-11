import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../images/logo.svg';
import cart from '../images/cart.png';

function Header({ history }) {
    const handleRedirect = (page) => {
        history.push(page);
    }
    return (
        <div className="navigation">
            <div className="container">
            <a className="item grey-hover" onClick={ () => { handleRedirect('/') } }>
                <img 
                src={logo}
                alt="Logo"
                className="navigation__logo"
                />
            </a>
            <a className="item" onClick={ () => { handleRedirect('/Products'); } }>
                <p className="item-text">
                Products
                </p>
            </a>
            <a className="item" onClick={ () => { handleRedirect('/Admin'); } }>
                <p className="item-text">
                Admin
                </p>
            </a>
            <a className="item right red" onClick={ () => { handleRedirect('/Purchase'); } }>
                <img 
                src={cart}
                className="navigation__cart"
                alt="Checkout"
                />
                {/*<span className="navigation__quantity">
                0
                </span>*/}
            </a>
            </div>
        </div>
        );
    }

export default withRouter(Header);