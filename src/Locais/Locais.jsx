    import axios from "axios";
    import { useEffect, useState } from "react";

    export default function Locais() {

    const [locais, setLocais] = useState([]);

    // buscar dados da API
    useEffect(() => {
        async function carregarLocais() {
        try {
            const resposta = await axios.get("https://sosconecta.onrender.com/locais");
            setLocais(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
        }

        carregarLocais();
    }, []);

    // função para ajudar
    const ajudar = async (id) => {
        try {
        await axios.post(`https://sosconecta.onrender.com/ajudar/${id}`);
        alert("Você se voluntariou!");
        window.location.reload(); // atualiza tela (simples)
        } catch (erro) {
        console.error(erro);
        alert("Erro ao ajudar");
        }
    };

    return (
        <section>
        <h2>Locais disponíveis</h2>

        {locais.map((local) => (
            <div key={local.id}>
            <h3>{local.nome}</h3>
            <p>{local.tipo_ajuda}</p>
            <p>
                {local.quantidade_atual} / {local.quantidade_necessaria}
            </p>

            <button onClick={() => ajudar(local.id)}>
                Quero Ajudar
            </button>
            </div>
        ))}
        </section>
    );
    }