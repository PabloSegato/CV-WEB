import "./PerfilProfesional.css";
import { proyectos } from "../constants.js";

export const PerfilProfesional = () => {
  return (
    <div className="containter-pp">
      <h2>PERFIL PROFESIONAL </h2>
      <section className="section-pp">
        <p>
          Desarrollador frontend con sólidos conocimientos en React y el
          ecosistema JavaScript moderno, incluyendo TypeScript, Redux, Zustand y
          React Query. Formado como Tech Developer en Digital House, con
          experiencia en interfaces responsivas y optimización de rendimiento
          mediante lazy loading. Actualmente ampliando habilidades en backend
          con Node.js, Express y SQL, orientado a consolidarme como
          desarrollador Full Stack. Disponible para trabajo remoto o presencial
          en cualquier parte del mundo.
        </p>
      </section>
      <h2>FORMACION PRACTICA</h2>

      <section className="section-pp">
        <div className="container-encabezado-proyectos">
          <h3>
            <strong>Tech Developer — Bootcamp Intensivo</strong>
          </h3>
          <p> 2025 — 2026 </p>
        </div>

        <div className="container-estudios">
          <h3> Digital House</h3>
          <ul>
            <li>
              Desarrollo de aplicaciones web completas con HTML, CSS,
              JavaScript, React y Node.js.
            </li>
            <li>
              Proyectos grupales con metodologías ágiles y control de versiones
              en Git / GitHub.
            </li>
            <li>
              Consumo de APIs REST y manejo de estado global con Redux, Context
              y Zustand.
            </li>
          </ul>
        </div>
      </section>

      <h2>PROYECTOS</h2>

      <section>
        {proyectos.map((item) => (
          <div className="card-proyectos" key={item.title}>
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank">
              {item.title} GitHub
            </a>
            <div className="container-tec">
              {item.tec.map((tec, index) => (
                <span className="tec" key={index}>
                  {tec}
                </span>
              ))}
            </div>

            <p>{item.description}</p>
            <a href={item.web} className="boton-demo">
              Demo en vivo
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
