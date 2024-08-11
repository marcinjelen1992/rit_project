import { useState } from "react";
import "./App.css";
import logo from "./Logo_poziom_kolor.svg";
import jsLogo from "./Components/Icons/js.svg";
import tsLogo from "./Components/Icons/ts.svg";
import reactLogo from "./Components/Icons/react.svg";

function App() {
  const [count, setCount] = useState(0);

  // import { RoundImage } from "./Components/RoundImage/RoundImage";
  // comments

  return (
    <>
      <div className="rit">
        <div>
          <img src={logo} alt="Zdjęcie logo" className="logoClass" />
          <div>
            <p>Nasze cele</p>
            <p>Oferta kursów</p>
            <p>Kontakt</p>
          </div>
        </div>
        <div className="secondSection">
          <div>
            <p>
              Poznaj nowe spojrzenie na <span>nauczanie</span>
            </p>
            <p>
              Wyznaczamy nowe ścieżki w dziedzinie edukacji i wprowadzania do
              świata IT. Poznaj nasze podejście do praktyki i naszych
              specjalistów. <span>Let's rock!</span>
            </p>
            <button
              style={{
                color: "#FE5407",
                margin: "0 0 32px 0",
              }}
            >
              Kliknij żeby sprawdzić
            </button>
          </div>
          <div className="logoBoxes">
            <div className="logoBoxesRow">
              <div className="floatingfirst"></div>
              <div className="floatingfirst"></div>
              <div className="floatingblack"></div>
            </div>
            <div className="logoBoxesRow">
              <div className="floatingsecond"></div>
              <div className="floatingblack"></div>
              <div className="floatingsecond"></div>
            </div>
            <div className="logoBoxesRow">
              <div className="floatingblack"></div>
              <div className="floatingsecond"></div>
              <div className="floatingfirst"></div>
            </div>
          </div>
        </div>

        <div className="thirdSection">
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Dla kogo?
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                Jesteśmy prężnie rozwijającą się firmą oferującą zróżnicowane
                szkolenia dla osób zainteresowanych światem IT
              </p>
              <div>
                <div className="columnModule">
                  <h3>Studenci informatyki</h3>
                  <p>
                    Skończyłeś studia, lecz chciałbyś pogłębić temat jeszcze
                    bardziej? Oferujemy zaawansowane kursy dla osób mających
                    edukacyjne tło w dziedzinie IT.
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Pasjonaci IT</h3>
                  <p>
                    Od dzieciństwa pasjonowałeś się komputerami i chcesz wejść
                    do większego świata IT? U nas znajdziesz odpowiednie kursy,
                    które to umożliwią
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Szukający pracy</h3>
                  <p>
                    Znudziła się dotychczasowa praca lub niezadowalają cię
                    zarobki? Nauczymy cię od podstaw jak stać się
                    profesjonalistą w tworzeniu stron internetowych
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fourthSection">
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              Czego uczymy?
            </div>
            <div>
              <div>
                <div className="columnModule">
                  <img src={jsLogo} />
                  <h3>JavaScript</h3>
                  <p>Uczymy JavaScript od podstaw i w stopniu zaawansowanym.</p>
                </div>
                <div className="columnModule">
                  <img src={tsLogo} />
                  <h3>TypeScript</h3>
                  <p>
                    Pokazujemy czym TypeScript różni się od JavaScript i uczymy
                    typowania.
                  </p>
                </div>
                <div className="columnModule">
                  <img src={reactLogo} />
                  <h3>React</h3>
                  <p>
                    Dzięki znam poznasz podstawy działania Reacta i stworzysz
                    swoją pierwszą aplikację!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="thirdSection">
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Dla kogo?
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                Jesteśmy prężnie rozwijającą się firmą oferującą zróżnicowane
                szkolenia dla osób zainteresowanych światem IT
              </p>
              <div>
                <div className="columnModule">
                  <h3>Studenci informatyki</h3>
                  <p>
                    Skończyłeś studia, lecz chciałbyś pogłębić temat jeszcze
                    bardziej? Oferujemy zaawansowane kursy dla osób mających
                    edukacyjne tło w dziedzinie IT.
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Pasjonaci IT</h3>
                  <p>
                    Od dzieciństwa pasjonowałeś się komputerami i chcesz wejść
                    do większego świata IT? U nas znajdziesz odpowiednie kursy,
                    które to umożliwią
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Szukający pracy</h3>
                  <p>
                    Znudziła się dotychczasowa praca lub niezadowalają cię
                    zarobki? Nauczymy cię od podstaw jak stać się
                    profesjonalistą w tworzeniu stron internetowych
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p>Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;
