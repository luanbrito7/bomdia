import React, { Component } from 'react'
import logo from './sol.PNG';
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="container">
                <header id="hd">
                    <ul>
                        <img className="sol" src={logo} alt="sol"></img>
                        <a href="#oqueeh">O que é Bom Dia?</a>
                        <a href="#Exemplos">Exemplos</a>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Header
