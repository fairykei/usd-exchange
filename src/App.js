import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> MoneyExchange
        <div className="cotacao">
          <p>COTAÇÃO DO DIA</p>
          <hr />
          <p>
            R$<span id="valor"></span>
          </p>
        </div>
      </header>

      <div id="intro">
        <form action="">
          <div class="input-wrapper">
            <label for="price">Valor em Dólar</label>
            <br />
            <input
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              name="price"
              placeholder="100.00"
            />
          </div>

          <div class="input-wrapper">
            <label for="tax">Taxa do Estado</label>
            <br />
            <input type="number" name="tax" placeholder="9,5%" />
          </div>

          <div class="input-wrapper">
            <label for="meio">Meio de compra</label>
            <br />
            <select id="cars" name="meio" defaultValue="Dinheiro">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao">Cartão</option>
            </select>
          </div>
          <br />
          <div id="buttons">
            <button onclick="">SIMULAR</button>
          </div>
        </form>
      </div>

      <div className="descricao">
        <p>Simule Agora!</p>
        <p>
          Disponibilizamos para nossos clientes uma simulação de conversão de
          montante em DÓLAR para REAL para que você possa planejar suas compras
          e viagens ao exterior sem complicações :)
        </p>
      </div>
      <div className="referencias">
        <a href="">Referências</a>
        <p>IOF</p>
        <p>
          Dinheiro: <span id=""></span> | Cartão: <span id=""></span>
        </p>
        <a href="">Informação de taxas por estado</a>
      </div>

      <div id="results">
        <div className="result">
          <div className="content">
            <h3>Cotação do Dólar</h3>
            <p className="value">
              R$<span className="" id=""></span>
            </p>

            <h3>Total sem Imposto</h3>
            <p className="value">
              R$<span className="" id=""></span>
            </p>
            <p className="value">
              USD<span className="" id=""></span>
            </p>

            <h3>Valor de IOF</h3>
            <p className="value">
              R$<span className="" id=""></span>
            </p>

            <h3>Total com Imposto</h3>
            <p className="value">
              R$<span className="" id=""></span>
            </p>
            <p className="value">
              USD<span className="" id=""></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
