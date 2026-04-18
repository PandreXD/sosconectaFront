import axios from "axios";
import { useEffect, useState } from "react";

export default function FormAjuda({ fechar }) {
  const [locais, setLocais] = useState([]);
  const [localSelecionado, setLocalSelecionado] = useState("");

  // buscar locais
  useEffect(() => {
    async function carregar() {
      const res = await axios.get("https://sosconecta.onrender.com/locais");
      setLocais(res.data);
    }

    carregar();
  }, []);

  // enviar ajuda
  const enviar = async (e) => {
    e.preventDefault();

    if (!localSelecionado) {
      alert("Escolha um local");
      return;
    }

    try {
      await axios.post(
        `https://sosconecta.onrender.com/ajudar/${localSelecionado}`
      );

      alert("Você se voluntariou!");
      fechar();
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar");
    }
  };

  return (
    <form onSubmit={enviar}>
      <h2>Escolha onde ajudar</h2>

      <select
        value={localSelecionado}
        onChange={(e) => setLocalSelecionado(e.target.value)}
      >
        <option value="">Selecione um local</option>

        {locais.map((local) => (
          <option key={local.id} value={local.id}>
            {local.nome} ({local.tipo_ajuda})
          </option>
        ))}
      </select>

      <button type="submit">Quero preencher essa vaga</button>
      <button type="button" onClick={fechar}>
        Cancelar
      </button>
    </form>
  );
}