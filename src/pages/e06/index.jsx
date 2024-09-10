import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

export default function E06() {
  const [ salario, setSalario ] = useState(0);
  const [ bonus, setBonus ] = useState(0);
  const [ desconto ,setDesconto ] =useState(0);
  const [ total, setTotal ] = useState(0);

  function calculo(){
    let salario1 = Number(salario)
    let bonus1 = Number(bonus)
    let desconto1 = Number(desconto)

    let calc1 = (salario1*bonus1)/100;
    let calc2 = (calc1+salario1)-desconto1
    
    setTotal(calc2);
  }

  return (
    <div className="pagina-e06 pagina">
      <div className="cabecalho">
        <div className="titulo">
          <img src="./assets/images/logo.png" alt="logo" />

          <h1>React FreiS</h1>
        </div>

        <div className="links">
          <Link to="/" className="link">
            Inicio
          </Link>

          <Link to="/sobre" className="link">
            Sobre
          </Link>
        </div>
      </div>

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

            <h2>Exercício 06 - Sálario Líquido</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
            Implemente um programa em javascript para calcular o salário líquido
            de um funcionário, a partir de seu salário base, do bônus mensal em
            porcentagem e do total de descontos em reais
          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <div className="campo">
                <label>Salário base</label>

                <input type="text" placeholder="0" onChange={(e) => setSalario(e.target.value)}/>
              </div>

              <div className="campo">
                <label>Bônus mensal em porcentagem</label>

                <input type="text" placeholder="0" onChange={(e) => setBonus(e.target.value)}/>
              </div>

              <div className="campo">
                <label>Total de Descontos</label>

                <input type="text" placeholder="0" onChange={(e) => setDesconto(e.target.value)}/>
              </div>
            </div>

            <button className="executar" onClick={calculo}> Executar </button>

            <h3>Seu sálario liquido é de:  
              R$ {total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
