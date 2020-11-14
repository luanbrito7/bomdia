import React, { Component } from 'react'
import neymar from './neymar.jpg';
import avril from './avril.jpg'
import './Exemplos.css'

export class Exemplos extends Component {
    render() {
        return (
            <div id="Exemplos">
                <h3>Exemplos</h3>
                <div className="container-row">
                    <img src={neymar} alt="neymar"></img>
                    <img src={avril} alt="avril"></img>
                </div>
            </div>
        )
    }
}

export default Exemplos
