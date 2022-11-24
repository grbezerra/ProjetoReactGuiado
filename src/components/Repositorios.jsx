import { useState, useEffect } from "react"
import Axios from "axios"


export function Repositorios() {
    const [repositorio, setRepositorio] = useState([]);
    const [buscaTermo, setBuscaTermo] = useState("");
    const [repositoriosFiltrados, setRepositoriosFiltrados] = useState([]);
    const baseURL = "https://api.github.com/users/grbezerra/repos";
  
    useEffect(() => {
      async function getData() {
        const response = await Axios.get(baseURL);
        setRepositorio(response.data);
      }
      getData();
    }, []);
  
    function pegaInput(event) {
      setBuscaTermo(event.target.value);
    }
  
    useEffect(() => {
      setRepositoriosFiltrados(
        repositorio.filter((repositorio) => {
          return repositorio.name.includes(buscaTermo);
        })
      );
    }, [repositorio, buscaTermo]);
  
    return (
      <>
        <br />
        <input
          className="input"
          placeholder="Busque os projetos \(•◡•)/"
          onChange={pegaInput}
        />
        <div className="repositorio">
          {repositoriosFiltrados.map((repositorio) => {
            return (
              <div>
                <h3 key={repositorio.id}>{repositorio.name}</h3>
                <a href={repositorio.html_url}> 👉🏿 Conferir 👈🏿</a>
              </div>
            );
          })}
        </div>
      </>
    );
  }