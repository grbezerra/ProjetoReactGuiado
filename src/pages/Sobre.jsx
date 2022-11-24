import { Header } from "../components/Header";
import sobreImg from "../assets/sobre.jpg";

import { Foto } from "../components/Foto";
import { Paragrafo } from "../components/Paragrafo";

export function Sobre() {
  return (
    <div>
      <hr />
      <br />
      <hr />
      <Header title="𓆩Quem eu sou𓆪" image={sobreImg} />
      <h2>
        <div className="teste">
      <Foto />
      <Paragrafo />
        </div>
      </h2>
    </div>
  );
}
