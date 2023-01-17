import { useState } from "react";
import Yo from "./Yo";
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
              <button className="ButtonNav">button</button>
            </li>
            <li>
              <button className="ButtonNav">button</button>
            </li>
            <li>
              <button className="ButtonNav">button</button>
            </li>
          </ul>
        </div>
        <div className="grid-item-option">{yo === "yo" && <Yo />}</div>
      </div>
    </>
  );
}

export default NavBar;
