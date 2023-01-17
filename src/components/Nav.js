import { useState } from "react";
import Yo from "./Yo";
import Contendor from "./calculator/Calculadora";
function NavBar() {
  const [yo, setYo] = useState("");
  return (
    <>
      <div className="grid-option">
        <div className="grid-item-option">
          <ul>
            <li>
              <button
                type="button"
                onClick={() => setYo("yo")}
                className="ButtonNav"
              >
                YO
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setYo("Calculadora")}
                className="ButtonNav"
              >
                Calculadora
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setYo("juegoLinia")}
                className="ButtonNav"
              >
                Juego de Linias
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setYo("vinculacionProyect")}
                className="ButtonNav"
              >
                Vinculacion a otros proyectos
              </button>
            </li>
          </ul>
        </div>
        <div className="grid-item-option">
          {yo === "yo" && <Yo />}
          {yo === "Calculadora" && <Contendor />}
          {yo === "juegoLinia" && <h1>juego en linia</h1>}
          {yo === "vinculacionProyect" && <h1>vinculacionProyect</h1>}
        </div>
      </div>
    </>
  );
}

export default NavBar;
