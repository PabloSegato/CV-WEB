import "./Perfil.css";
import foto from "../public/assets/perfil.png";
export const Perfil = () => {
  return (
    <aside className="aside-container">
      <img src={foto} alt="Foto perfil" />

      <div className="contacto">
        <h2>CONTACTO</h2>
        <p>pablo.segato47@gmail.com</p>
        <p>+34 689 993 814</p>
        <a
          href="https://www.linkedin.com/in/segato-pablo-nicolas/"
          target="_blank"
        >
          linkedin.com/in/segato-pablo-nicolas
        </a>
        <br />
        <a href="https://github.com/PabloSegato" target="_blank">
          github.com/PabloSegato
        </a>
      </div>

      <div className="frontend">
        <h2>FRONTEND</h2>
        <ul>
          <li>HTML5 </li>
          <li>CSS3 </li>
          <li>JavaScript ES6+</li>
          <li>React </li>
          <li>TypeScript </li>
          <li>Redux </li>
          <li>Zustand </li>
          <li> Context API </li>
          <li>React Router </li>
          <li>React Query </li>
          <li> Tailwind CSS</li>
          <li>Lazy Loading</li>
        </ul>
      </div>

      <div className="conocimientos">
        <h2>BACKEND (EN DESARROLLO)</h2>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>RESTA APIs</li>
        </ul>
        <h2>HERRAMIENTAS</h2>
        <ul>
          <li>Git </li>
          <li>GitHub </li>
          <li>VS Code </li>
          <li>Figma </li>
        </ul>
      </div>
      <div className="idiomas">
        <h2> IDIOMAS</h2>
        <ul>
          <li>
            <strong>Español </strong> Nativo
          </li>
          <li>
            <strong>Ingles </strong>Intermedio
          </li>
        </ul>
      </div>

      <h2>FORMACIÓN</h2>
      <div className="estudios">
        <h3>
          <strong>Digital House</strong>
        </h3>
        <p> Tech Developer Bootcamp </p>
        <p>2022-2023</p>
        <h3>
          <strong>Univ. Nac. de la Matanza </strong>
        </h3>
        <p> Ing. en Informática (1er año) </p>
        <p>2013 — 2014</p>
        <h3>
          <strong>Inst. Pbro. J. V. Brizuela</strong>
        </h3>
        <p> Profesorado Ed. Física </p>
        <p>2015 — 2019</p>
      </div>

      <div className="sobre-mi">
        <h2>SOBRE MÍ</h2>
        <p>
          Frontend Developer formado en Digital House con stack React. Ampliando
          conocimientos en backend con Node.js y SQL. Proactivo, orientado a
          resultados y con rápida capacidad de adaptación.
        </p>
      </div>
    </aside>
  );
};
