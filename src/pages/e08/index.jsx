import { Top } from "../../components/Top/top.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E08() {

  

  



  return (
    <div className="pagina-e08 pagina">
      <Top/>
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

            <h2>Exercício 08 - Temperatura</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
          Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">

              <img src='./assets/images/image.png' alt='gordo'/>
              <div className="campo">


                <label>Temperatura</label>

                <input type="text" placeholder="0" />
              </div>

             

               
            <button className="executar" > Executar </button>

            <h3>A situação para sua temperatura é{} </h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
