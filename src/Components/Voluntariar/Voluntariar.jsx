import { useState } from "react"
import styles from "./Voluntariar.module.scss";
import cardImg from "../../assets/voluntarios1.jpg";

export default function Voluntariar() {

  const [modalOpen, setModalOpen] = useState(false)
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [locais, setLocais] = useState([])
  const [localSelecionado, setLocalSelecionado] = useState("")

  // URL DA SUA API NO RENDER
  const API_URL = "https://sosconecta.onrender.com";

  // abrir modal e buscar locais
  const abrirModal = async () => {
    setModalOpen(true)
    try {
      // Usando a URL do Render aqui
      const res = await fetch(`${API_URL}/locais`)
      const data = await res.json()
      setLocais(data)
    } catch (error) {
      console.error("Erro ao buscar locais:", error)
      alert("O servidor está acordando... tente abrir o modal novamente em alguns segundos.")
    }
  }

  // fechar modal
  const fecharModal = () => {
    setModalOpen(false)
    setNome("")
    setTelefone("")
    setLocalSelecionado("")
  }

  // enviar
  const candidatar = async () => {
    if (!nome || !telefone || !localSelecionado) {
      alert("Preencha todos os campos")
      return
    }

    try {
      // Usando a URL do Render aqui também
      const res = await fetch(`${API_URL}/voluntariar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          telefone,
          local_id: localSelecionado
        })
      })

      const msg = await res.text()
      alert(msg)
      fecharModal()
    } catch (error) {
      alert("Erro ao enviar cadastro. Verifique sua conexão.")
    }
  }

  return (
    <section className={styles.container}>
      
      <div className={styles.texto}>
        <h2>
          Durante <span>enchentes</span>, muitas pessoas querem ajudar...
        </h2>
        <p>
          Mas não sabem <span>onde ir</span> ou <span>o que fazer</span>.
        </p>
      </div>

      <div className={styles.card}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${cardImg})` }}
        ></div>

        <div className={styles.content}>
          <p>
            Cadastre-se como <span>voluntário</span> e seja direcionado para onde sua ajuda fará diferença real.
          </p>

          <button onClick={abrirModal}>
            Quero Ajudar
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>

            <h2>Se voluntariar</h2>

            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <select
              value={localSelecionado}
              onChange={(e) => setLocalSelecionado(e.target.value)}
            >
              <option value="">Escolha o local</option>
              {locais.length > 0 ? (
                locais.map(local => (
                  <option key={local.id} value={local.id}>
                    {local.nome}
                  </option>
                ))
              ) : (
                <option disabled>Carregando locais...</option>
              )}
            </select>

            <div className={styles.botoes}>
              <button onClick={candidatar}>Confirmar</button>
              <button onClick={fecharModal}>Cancelar</button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}