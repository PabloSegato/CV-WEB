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
      <section className="perfil-profesional"></section>
      <section className="formacion-practica"></section>
      <section className="proyectos"></section>
      <section className="competencias"></section>
    </header>
  );
};
