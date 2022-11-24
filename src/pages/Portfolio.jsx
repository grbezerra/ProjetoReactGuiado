import { Header } from "../components/Header";
import projetosImg from "../assets/projetos.jpg";
import { Repositorios } from "../components/Repositorios";

export function Portfolio() {
  return (
    <div>
      <hr />
      <br />
      <hr />
      <Header title="𓆩Alguns dos meus projetos𓆪" image={projetosImg} />
      <Repositorios />
    </div>
  );
}
