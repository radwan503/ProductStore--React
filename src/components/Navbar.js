import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from '../logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link to="/">
                            <img src={logo} alt="img" className="navbar-brand"></img>
                        </Link>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ml-3">
                                    <Link to="/" className="nav-link" >Product</Link>
                                </li>
                            </ul>
                            <Link to="/cart" className="nav-link ml-auto" >
                                <ButtonContainer className="btn btn-outline-primary my-2 my-sm-0" type="button"><span className="mr-2"><i className="fas fa-cart-plus"></i></span> Add to cart</ButtonContainer>
                            </Link>
                    </div>
                </NavWrapper>
            </div>
        )

    }
}

const NavWrapper=styled.nav`
 background:var(--mainWhite);
 .nav-link{
   font-size:1.2rem;
 }

`