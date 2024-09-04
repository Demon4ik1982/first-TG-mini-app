import { useState } from "react";
import "./scroll.css";
import { Button } from "../../ui/Button/Button";

export const Scroll = () => {
  const [active, setActive] = useState(false);
  const [arrayDiv, setArrayDiv] = useState([1])

  const handleClick = () => {
    const array = arrayDiv
    array.push(1)
    setArrayDiv(array)
  };


  function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 6;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
      setActive(true);
    }

    if (position < threshold) {
      setActive(false);
    }
  }
  window.addEventListener("scroll", checkPosition);

  return (
    <>
    <div className="scroll-container">
      <ul className="scroll-container__list">
        {arrayDiv.map((_, id) => (
          <li key={id} className="scroll-container__item">
            <div className="scroll-container__item-descr">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores architecto excepturi fuga cum vitae facilis, deserunt
              culpa placeat consectetur, molestiae amet odio reiciendis eum,
              ipsa voluptatibus optio neque illum ratione accusantium
              perferendis veritatis. Mollitia nemo non, ex impedit explicabo
              doloremque minima eveniet obcaecati, tempore laudantium eius illo
              alias sequi enim quas qui perferendis, at distinctio quod velit!
              Deleniti, ex id! Modi ea repellendus laudantium ipsa similique at
              commodi culpa odit illum sunt, tempora fugiat? Possimus ipsam aut
              eos eligendi nulla esse libero vitae voluptatibus tenetur.
              Voluptas molestiae placeat eaque quo? Doloribus magnam quisquam
              praesentium. Necessitatibus, mollitia cum culpa quasi aliquid ipsa
              quam, laboriosam velit neque aperiam eius. Eum quas dolorem
              suscipit distinctio, porro odio velit tempore, quia facere ab hic
              facilis nam alias, ut laboriosam saepe eos? Dolore, sapiente.
              Minus tenetur iure amet illum eligendi ad odit exercitationem
              praesentium ea reiciendis quos eum aspernatur porro facilis
              voluptatem aperiam voluptate consectetur quo doloribus itaque
              maiores, laborum ipsam earum. Perspiciatis, deserunt! Rerum enim
              ea earum eligendi doloremque expedita. Iusto, nihil. Blanditiis,
              facere! Dolores consequuntur delectus eius. Est, magnam, illo ad
              corporis laborum omnis ut nisi nemo, doloremque debitis fuga ab.
              Corporis sed maiores incidunt maxime ipsum quo ex minima quaerat
              provident enim.
            </div>
          </li>
        ))}
      </ul>
        {active ? <Button type='primary' onClick={() => (handleClick(), setActive(false))}>Дальше</Button> : ""}
    </div>
    </>
  );
};
