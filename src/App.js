import React, { useEffect, useState } from "react";
import "./Style.css";

///https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  //nutri = estado
  //setNutri = alterar estado
  const [nutri, setNutri] = useState([]);

  function loadApi() {
    // URL do serviço
    const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

    // Chama um serviço
    fetch(url)
      // trata a resposta para json
      .then((resposta) => resposta.json())
      .then((json) => {
        console.log(json);
        //altera useState
        setNutri(json);
      });
  }

  // useEffect(() => {
  //   loadApi();
  // }, []); //"[]" fica ouvindo alguma coisa, se n tiver nada realiza logica quando abre a pagina

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {/* botao está buscando o loadApi que é a chamada que preenche a lista */}
      <button onClick={() => loadApi()} className="botao">
        Buscar dicas
      </button>
      {/* nutri.map = percorre lista */}
      {nutri.map((item) => {
        return (
          // classname = busca classe no arquivo css, sem classname não tem formatação
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <button onClick={() => alert("Clicou")} className="botao">
              Acessar
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default App;
