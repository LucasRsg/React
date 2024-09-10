import { Link } from "react-router-dom";
import "./index.scss";

export default function Inicio() {
  return (
    <div className="pagina-inicio pagina">
      <div className="cabecalho">
        <div className="titulo">
          <img className="logo" src="./assets/images/logo.png" alt="logo" />

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
      <div className="menu">
        <div className="titulo">
          <h2>Escolha um treino...</h2>
        </div>
        <div className="cards">
          <Link to="/e01" className="link">
            <div className="card">
              <div className="retangulo laranja" />
              <h3 className="titulo">Cupom de desconto</h3>
              <h4 className="subtitulo">Exercício 1</h4>
            </div>
          </Link>

          <Link to="/e02" className="link">
            <div className="card">
              <div className="retangulo azul" />
              <h3 className="titulo">Converter Kg/ gramas</h3>
              <h4 className="subtitulo">Exercício 2</h4>
            </div>
          </Link>

          <Link to="/e03" className="link">
            <div className="card">
              <div className="retangulo verde" />
              <h3 className="titulo">Valor total por quantidade</h3>
              <h4 className="subtitulo">Exercício 3</h4>
            </div>
          </Link>

          <Link to="/e04" className="link">
            <div className="card">
              <div className="retangulo amarelo" />
              <h3 className="titulo">Leitura de livro</h3>
              <h4 className="subtitulo">Exercício 4</h4>
            </div>
          </Link>

          <Link to="/e05" className="link">
            <div className="card">
              <div className="retangulo azuzin" />
              <h3 className="titulo">Média de Notas</h3>
              <h4 className="subtitulo">Exercício 5</h4>
            </div>
          </Link>

          <Link to="/e06" className="link">
            <div className="card">
              <div className="retangulo larajin" />
              <h3 className="titulo">Sálario Liquido</h3>
              <h4 className="subtitulo">Exercício 6</h4>
            </div>
          </Link>

          <Link to="/e07" className="link">
            <div className="card">
              <div className="retangulo verdin" />
              <h3 className="titulo">Cores Primárias</h3>
              <h4 className="subtitulo">Exercício 7</h4>
            </div>
          </Link>

          <Link to="/e11" className="link">
            <div className="card">
              <div className="retangulo roxo" />
              <h3 className="titulo">Tabuada</h3>
              <h4 className="subtitulo">Exercício 11</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
