import { PerfilProfesional } from "./section/PerfilProfesional";
import { Header } from "./section/Header";
import { Perfil } from "./section/Perfil";

export const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Perfil />
      <div style={{ flexDirection: "column" }}>
        <Header />
        <PerfilProfesional />
      </div>
    </div>
  );
};
