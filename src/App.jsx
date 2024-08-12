import "./App.css";
import logo from "./Logo_poziom_kolor.svg";
import jsLogo from "./Components/Icons/js.svg";
import tsLogo from "./Components/Icons/ts.svg";
import reactLogo from "./Components/Icons/react.svg";

function App() {
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
              Jak uczymy, czyli dlaczego Rockin'iT?
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                Nasz system nauczania jest oparty na połączeniu edukacji z
                praktyką. Dzięki nam poznasz jak kodować i stworzysz swój
                pierwszy projekt!
              </p>
              <div>
                <div className="columnModule">
                  <h3>Ciekawe podejście do nauczania</h3>
                  <p>
                    Chcesz stworzyć stronę internetową przedstawiającą swoje
                    artystyczne portfolio? Chcesz stworzyć pierwszą grę
                    komputerową? U nas się tego nauczysz!
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Wsparcie profesjonalisnych trenerów</h3>
                  <p>
                    Napotkasz w trakcie realizacji projektu problem z kodem? Nie
                    obawiaj się. U nas będziesz mógł z pomocą trenera krok po
                    kroku prześledzić, które elementy kodu mogą wywoływać błędy
                    i jak można je poprawić.
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Nauka bez oceniania</h3>
                  <p>
                    Masz złe wspomnienia ze szkoły lub obawiasz się bycia
                    niedocenionym? U nas nie oceniamy! Możesz być pewien, że
                    nasi trenerzy okażą przyjacielskie podejście i pomogą w
                    rozwiązaniu problemów z kodem.
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
              }}
            >
              O nas
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                Pełnimy rolę w największej w Polsce organizacji z zakresu
                edukacji prywatnej. Łączymy praktykę z pasją i ciągle podnosimy
                kwalifikacje absolwentów. Dzięki nam będziecie gwiazdami{" "}
                <span
                  style={{
                    color: "#FE5407",
                  }}
                >
                  Rocka
                </span>{" "}
                w dziedzinie IT! Zatrudniamy ponad{" "}
                <span
                  style={{
                    color: "#FE5407",
                  }}
                >
                  40 trenerów
                </span>{" "}
                z ponad{" "}
                <span
                  style={{
                    color: "#FE5407",
                  }}
                >
                  10 latami
                </span>{" "}
                doświadczenia. Współpracuje z nami{" "}
                <span
                  style={{
                    color: "#FE5407",
                  }}
                >
                  15 firm
                </span>{" "}
                w{" "}
                <span
                  style={{
                    color: "#FE5407",
                  }}
                >
                  9 miastach
                </span>
                . Poznaj naszych trenerów!
              </p>
              <div>
                <div className="columnModule">
                  <h3>Maciej Dojlido</h3>
                  <p>
                    Inżynier oprogramowania full-stack (JS, React, PHP, MySQL) z
                    8-letnim doświadczeniem
                  </p>
                </div>
                <div className="columnModule">
                  <h3>Karolina Saukens</h3>
                  <p>
                    Nauczyciel akademicki na kierunku Zarządzanie i Psychologia
                    w Biznesie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondSection">
          <div>
            <p
              style={{
                width: "480px",
              }}
            >
              <span>Rockin'iT sp. z o.o.</span>
            </p>
            <p>al. Zwycięstwa 96 / 98</p>
            <p>81-451 Gdynia, Polska</p>
            <a
              class="button"
              href="mailto:letsrock@rockinit.pl"
              style={{
                color: "#FE5407",
                margin: "0 0 32px 0",
                display: "block",
                backgroundColor: "#FFFFFF",
                width: "280px",
                height: "32px",
              }}
            >
              Kliknij żeby napisać do nas maila
            </a>
          </div>
          <div className="logoBoxes">
            <div className="logoBoxesRow">
              <div className="floatingblack"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
