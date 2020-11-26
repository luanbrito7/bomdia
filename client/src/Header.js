import React, { Component } from 'react'
import logo from './assets/sun.gif';
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="container">
                <header id="hd">
                    <img className="sol" src={logo} alt="sol"></img>
                    <ul>
                        <a href="#oqueeh">O que é Bom Dia?</a>
                        <a href="#Exemplos">Exemplos</a>
                    </ul>
                    <img className="sol" src={logo} alt="sol"></img>
                </header>
            </div>
        )
    }
}

export default Header
