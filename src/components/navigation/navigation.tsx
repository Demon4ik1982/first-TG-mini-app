import { Link } from "react-router-dom";
import "./navigation.css"

export const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__item-link" to={"/"}>Websoket</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item-link" to={"/weather"}>Погода</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item-link" to={"/scroll"}>Скролл</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
