import React, { Component } from 'react'
import './BomDia.css'

export class BomDia extends Component {
    render() {
        return (
            <div>
                <div className="container-column">
                    <h1>Gerar de Imagens Bom dia - imagens matinais</h1>
                    <h2>Crie imagens temporárias de forma rápida e simples</h2>
                </div>
                <section className="bom-dia">
                    <div className="bom-dia-area">
                        <canvas id="cv2" width="540" height="400"></canvas>
                    </div>
                    <div className="bom-dia-form">
                        <div className="bom-dia-nav">
                            <h3>Gerador Bom Dia</h3>
                        </div>
                        <div id="bom-dia-form-data">
                            <div className="bom-dia-field select-type">
                                <span>Horário:</span>
                                <select name="" id="sel" className="bom-dia-input-data">
                                    <option value="bom-dia">bom dia</option>
                                    <option value="boa-tarde">boa tarde</option>
                                    <option value="boa-noite">boa noite</option>
                                    <option value="boa-madrugada">boa madrugada</option>
                                </select>
                            </div>
                            <div className="bom-dia-field select-type">
                                <span>Estação:</span>
                                <select name="" id="sel" className="bom-dia-input-data">
                                    <option value="primavera">primavera</option>
                                    <option value="inverno">inverno</option>
                                    <option value="outono">outono</option>
                                    <option value="verao">verao</option>
                                </select>
                            </div>
                            <div className="bom-dia-field select-type">
                                <span>Tema:</span>
                                <select name="" id="sel" className="bom-dia-input-data">
                                    <option value="ano-novo">ano-novo</option>
                                    <option value="carnaval">carnaval</option>
                                    <option value="sao-joao">sao joao</option>
                                    <option value="natal">natal</option>
                                </select>
                            </div>
                            <div className="bom-dia-field select-type">
                                <span>Cor Predominante:</span>
                                <select name="" id="sel" className="bom-dia-input-data">
                                    <option value="amarelo">amarelo</option>
                                    <option value="azul">azul</option>
                                    <option value="verde">verde</option>
                                    <option value="vermelho">vermelho</option>
                                </select>
                            </div>
                            <div className="bom-dia-block">
                                <div id="save" className="save-img">Baixar Imagem</div>
                            </div>
                        </div>
                        <div className="bom-dia-share">
                            <span>Compartilhe esta ferramenta:</span>
                            <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </section>
            </div>
           

        )
    }
}

export default BomDia
