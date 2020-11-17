import React, { Component , useState } from 'react'

import './BomDia.css'

export default  function BomDia(){
        const [estacao, setEstacao] = useState("primavera");
        const [horario, setHorario] = useState("bom-dia");
        const [tema, setTema] = useState("anonovo");
        const [cor, setCor] = useState("amarelo");
        function baixarImagem(){
            console.log("baixar imagem")
        }
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
                                <select value={horario} onChange={(e) => {setHorario(e.target.value)}} name="" id="sel" className="bom-dia-input-data">
                                    <option value="bom-dia">bom dia</option>
                                    <option value="boa-tarde">boa tarde</option>
                                    <option value="boa-noite">boa noite</option>
                                    <option value="boa-madrugada">boa madrugada</option>
                                </select>
                            </div>
                            <div className="bom-dia-field select-type">
                                <span>Estação:</span>
                                <select value={estacao} onChange={(e) => {setEstacao(e.target.value)}} name="" id="sel" className="bom-dia-input-data">
                                    <option value="primavera">primavera</option>
                                    <option value="inverno">inverno</option>
                                    <option value="outono">outono</option>
                                    <option value="verao">verao</option>
                                </select>
                            </div>
                            <div className="bom-dia-field select-type">
                                <span>Tema:</span>
                                <select value={tema} onChange={(e) => {setTema(e.target.value)}} name="" id="sel" className="bom-dia-input-data">
                                    <option value="ano-novo">ano-novo</option>
                                    <option value="carnaval">carnaval</option>
                                    <option value="sao-joao">sao joao</option>
                                    <option value="natal">natal</option>
                                </select>
                            </div>
                            <div className="bom-dia-field select-type">
                                <span>Cor Predominante:</span>
                                <select value={cor} onChange={(e) => {setCor(e.target.value)}} name="" id="sel" className="bom-dia-input-data">
                                    <option value="amarelo">amarelo</option>
                                    <option value="azul">azul</option>
                                    <option value="verde">verde</option>
                                    <option value="vermelho">vermelho</option>
                                </select>
                            </div>
                            <div className="bom-dia-block">
                                <div onClick={() => {console.log("chamar api")}} id="save" className="save-img">Gerar Imagem</div>
                                <div onClick={() => {baixarImagem()}} id="save" className="save-img">Baixar Imagem</div>
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



