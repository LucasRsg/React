import { Top } from "../../components/Top/top.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function e10() {
 
  return (
    <div className="pagina-e10 pagina">
      <Top />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <img
                className="voltar"
                src="./assets/images/voltar.png"
                alt="logo"
              />
            </Link>

            <h2>Exercício 10 - Calculo de IMC com histórico</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
          Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, <br/> apresente o IMC e a situação
          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <div className="campo">
                <label>Total de Grmas</label>

                <input type="text" placeholder="0" />
              </div>

              <button className="executar"> Executar </button>

              <h3>Total a pagar é {} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
