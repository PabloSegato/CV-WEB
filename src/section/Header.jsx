import "./Header.css";

export const Header = () => {
  return (
    <header className="header-cv">
      <h1>Pablo Nícolas Segato</h1>
      <h2>Frontend Developer</h2>
      <ul>
        <li>Full Stack en desarrollo</li>
        <li>Valencia, España</li>
        <li>Disponible remoto/presencial</li>
      </ul>
      <div className="container-links">
        <a>pablo.segato47@gmail.com</a>
        <a
          href="https://www.linkedin.com/in/segato-pablo-nicolas/"
          target="_blank"
        >
          Segato Pablo Nícolas
        </a>
        <a href="https://github.com/PabloSegato?tab=repositories">
          PabloSegato
        </a>
      </div>
    </header>
  );
};
