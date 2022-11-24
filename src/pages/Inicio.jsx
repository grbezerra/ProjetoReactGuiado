import { Header } from "../components/Header";
import homeImg from "../assets/home.jpg";

export function Inicio() {
  return (
    <div>
      <hr />
      <br />
      <hr />
      <Header title="𓆩Meu site pessoal𓆪" image={homeImg} />
    </div>
  );
}
