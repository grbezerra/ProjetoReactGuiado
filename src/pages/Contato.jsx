import { useState } from "react";
import { Header } from "../components/Header";
import contatoImg from "../assets/contato.jpg";

import styles from "../styles/pages/contato.module.css";

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputValueNome(event) {
    setNome(event.target.value);
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();
    console.log(nome, email, mensagem);
  }

  return (
    <div>
      <hr />
      <br />
      <hr />
      <Header title="𓆩Entre em contato𓆪" image={contatoImg} />

      <form className={styles.form} onSubmit={handleCreateMessage}>
        <input
          className={styles.formInput}
          placeholder="𓆩♡𓆪 - Informe seu nome"
          onChange={handleInputValueNome}
        />
        <input
          className={styles.formInput}
          placeholder="𓆩♡𓆪 - Informe seu e-mail"
          onChange={handleInputValueEmail}
        />
        <textarea
          className={styles.formTextArea}
          placeholder="𓆩♡𓆪 - Informe a mensagem"
          onChange={handleInputValueMensagem}
        />
        <button type="submit" className={styles.formButton}>
          🦋 - Enviar mensagem - 🦋
        </button>
      </form>
    </div>
  );
}
