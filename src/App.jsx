import "./App.css";
import logo from "./Logo_poziom_kolor.svg";
import logoDark from "./Logo_poziom_kolor_dark.svg";
import jsLogo from "./Components/Icons/js.svg";
import tsLogo from "./Components/Icons/ts.svg";
import reactLogo from "./Components/Icons/react.svg";

function App() {
  return (
    <>
      <div className="rit">
        <div>
          <picture>
            <source srcset={logoDark} media="(prefers-color-scheme: dark)" />
            <img src={logo} alt="Zdjęcie logo" className="logoClass" />
          </picture>
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
                  <h3>
                    Wdrożenie do zawodu{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      Junior Front-end Developer
                    </span>
                  </h3>
                  <p>
                    Przekazujemy wiedzę i doświadczenie pozwalające na podjęcie
                    pierwszych kroków jako{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      Junior Front-end Developer
                    </span>
                  </p>
                </div>
                <div className="columnModule">
                  <h3>
                    Cooperation with{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      Customer
                    </span>
                  </h3>
                  <p>
                    W ramach naszego programu szkoleń pomożemy rozwinąć soft
                    skills w zakresie współpracy z{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      klientem
                    </span>
                  </p>
                </div>
                <div className="columnModule">
                  <h3>
                    Rozwiązania dla{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      Biznesu
                    </span>
                  </h3>
                  <p>
                    Indywidualnie do potrzeb Twojej firmy skroimy dedykowane
                    szkolenie. Zależnie od wymagań dobierzemy program i
                    odpowiednich ekspertów
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
                    typowania
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
                  <h3>
                    Praktyka i{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      doświadczenie
                    </span>
                  </h3>
                  <p>
                    Nasi trenerzy mają doświadczenie praktyczne i zawodowe.
                    Przedstawią wiedzę teoretyczną w połączeniu z dobrymi
                    praktykami wynikającymi z własnych doświadczeń
                  </p>
                </div>
                <div className="columnModule">
                  <h3>
                    Przedstawienie{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      konkretnych
                    </span>{" "}
                    metod
                  </h3>
                  <p>
                    Przedstawimy wam realizację projektu z wykorzystaniem{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      konkretnych
                    </span>{" "}
                    narzędzi. Uczymy zgodnie z najnowszymi trendami i z
                    wykorzystaniem współczesnych narzędzi umożliwiających
                    tworzenie estetycznych projektów w wydajny sposób
                  </p>
                </div>
                <div className="columnModule">
                  <h3>
                    Wspólne osiąganie{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      wyników
                    </span>
                  </h3>
                  <p>
                    Dla nas proces szkolenia jest formą współpracy. Obustronne
                    zaangażowanie jest podstawią{" "}
                    <span
                      style={{
                        color: "#FE5407",
                      }}
                    >
                      wspólnego sukcesu
                    </span>
                    . Poprzez szkolenia tworzymy społeczność w ramach której
                    wzajemnie się wspiery i wspólnie pokonujemy wyzwania
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

        <div className="lastSection">
          <div>
            <p>
              <span>Rockin'iT sp. z o.o.</span>
            </p>
            <p>al. Zwycięstwa 96 / 98</p>
            <p>81-451 Gdynia, Polska</p>
            <a
              class="button"
              href="mailto:letsrock@rockinit.pl"
              style={{
                borderRadius: "8px",
                border: "1px solid transparent",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                color: "#FE5407",
                margin: "0 0 32px 0",
                display: "block",
                backgroundColor: "light-dark(#F9F9F9, #1A1A1A)",
                width: "280px",
                textAlign: "center",
              }}
            >
              Kliknij żeby napisać do nas maila
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
