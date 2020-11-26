import React, { useState } from "react";
import { saveAs } from "file-saver";
import { triggerBase64Download } from "react-base64-downloader";
import "./BomDia.css";
import Loader from "react-loader-spinner";
import spark from './assets/spark.gif';

export default function BomDia() {
  const [estacao, setEstacao] = useState("verao");
  const [horario, setHorario] = useState("dia");
  const [tema, setTema] = useState("carnaval");
  const [cor, setCor] = useState("blue");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  function baixarImagem() {
    triggerBase64Download(`data:image/png;base64,${image}`, "bomdia.png");
  }
  return (
    <div>
      <div className="marquee-container">
        <img width="100%" src="https://i.imgur.com/i6hvJjx.gif"></img>
        <marquee width="100%">
          <div>
            <img className="spark" src={spark} alt="sparkless"></img>
            <p id="marquee-text">Compartilhe uma mensagem no seu ZapZap!</p>
            <img className="spark" src={spark} alt="sparkless"></img>
          </div>
        </marquee>
        <img width="100%" src="https://i.imgur.com/i6hvJjx.gif"></img>
      </div>
      <div className="container-column">
        <h2>Gerar de Imagens Bom dia</h2>
        <h3>imagens matinais</h3>
        <h3>Crie imagens temporárias de forma rápida e simples</h3>
      </div>
      <section className="bom-dia">
        <div className="bom-dia-area">
          {image && (
            <img
              id="ibagem"
              src={`data:image/png;base64,${image}`}
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            />
          )}
        </div>
        <div className="bom-dia-form">
          <div className="bom-dia-nav">
            <h3>Gerador Bom Dia</h3>
          </div>
          <div id="bom-dia-form-data">
            <div className="bom-dia-field select-type">
              <span>Horário:</span>
              <select
                value={horario}
                onChange={(e) => {
                  setHorario(e.target.value);
                }}
                name=""
                id="sel"
                className="bom-dia-input-data"
              >
                <option value="dia">Bom dia</option>
                <option value="tarde">Boa tarde</option>
                <option value="noite">Boa noite</option>
                <option value="madrugada">Boa madrugada</option>
                <option value="">Nenhum</option>
              </select>
            </div>
            <div className="bom-dia-field select-type">
              <span>Estação:</span>
              <select
                value={estacao}
                onChange={(e) => {
                  setEstacao(e.target.value);
                }}
                name=""
                id="sel"
                className="bom-dia-input-data"
              >
                <option value="primavera">Primavera</option>
                <option value="inverno">Inverno</option>
                <option value="outono">Outono</option>
                <option value="verao">Verão</option>
                <option value="">Nenhum</option>
              </select>
            </div>
            <div className="bom-dia-field select-type">
              <span>Tema:</span>
              <select
                value={tema}
                onChange={(e) => {
                  setTema(e.target.value);
                }}
                name=""
                id="sel"
                className="bom-dia-input-data"
              >
                <option value="ano novo">Ano Novo</option>
                <option value="carnaval">Carnaval</option>
                <option value="pascoa">Páscoa</option>
                <option value="natal">Natal</option>
                <option value="">Nenhum</option>
              </select>
            </div>
            <div className="bom-dia-field select-type">
              <span>Cor Predominante:</span>
              <select
                value={cor}
                onChange={(e) => {
                  setCor(e.target.value);
                }}
                name=""
                id="sel"
                className="bom-dia-input-data"
              >
                <option value="blue">Azul</option>
                <option value="brown">Marrom</option>
                <option value="Green">Verde</option>
                <option value="gray">Cinza</option>
                <option value="orange">Laranja</option>
                <option value="pink">Rosa</option>
                <option value="purple">Roxo</option>
                <option value="red">Vermelho</option>
                <option value="teal">Verde Azulado</option>
                <option value="white">Branco</option>
                <option value="yellow">Amarelo</option>
                <option value="">Nenhum</option>
              </select>
            </div>
            <div className="bom-dia-block">
              <div
                onClick={() => {
                  setLoading(true);
                  fetch(
                    // LOCAL
                    "http://localhost:8080", {
                    // HEROKU
                    // "https://bomdia-server-app.herokuapp.com/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      type: horario,
                      season: estacao,
                      theme: tema,
                      color: cor,
                    }),
                  })
                    .then((res) => res.json())
                    .then((res) => {
                      setImage(res.image);
                      setLoading(false);
                    });
                }}
                id="save"
                className="save-img"
              >
                Gerar Imagem
              </div>
              <div
                onClick={() => {
                  baixarImagem();
                }}
                id="save"
                className="save-img"
              >
                Baixar Imagem
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {loading && (
                <Loader type="Hearts" color="green" height={80} width={80} />
              )}
            </div>
          </div>
          <div className="bom-dia-share">
            <span>Compartilhe esta ferramenta:</span>
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
