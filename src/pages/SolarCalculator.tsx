import { useState } from "react";

const tiposTelhado = [
  "Telhado Inclinado",
  "Telhado Plano",
  "Solo",
];
const orientacoes = [
  "Norte",
  "Sul",
  "Leste",
  "Oeste",
];

export default function SolarCalculator() {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [conta, setConta] = useState("");
  const [tipoTelhado, setTipoTelhado] = useState("");
  const [orientacao, setOrientacao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [result, setResult] = useState<any>(null);
  const [lead, setLead] = useState({ nome: "", email: "" });
  const [showLead, setShowLead] = useState(false);

  function calcular() {
    // Simulação simples para exemplo
    const consumo = Number(conta.replace(/\D/g, "")) / 0.7;
    const sistema = tamanho ? Number(tamanho) : Math.ceil(consumo / 150);
    const economia = sistema * 150 * 0.7 * 12; // R$ anual
    const investimento = sistema * 5000; // valor estimado
    const payback = investimento / economia;
    setResult({
      economia: economia.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      sistema,
      investimento: investimento.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      payback: payback.toFixed(1),
      incentivos: "Isenção de ICMS, financiamento facilitado (consulte sua região)",
    });
    setShowLead(true);
  }

  function handleLead(e: React.FormEvent) {
    e.preventDefault();
    // Aqui você pode enviar o lead para um backend ou serviço externo
    alert("Obrigado! Entraremos em contato em breve.");
    setLead({ nome: "", email: "" });
    setShowLead(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md bg-gray-50 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-900">Calculadora Solar Interativa ⚡</h1>
        <p className="text-gray-600 mb-6 text-center">Descubra quanto você pode economizar com energia solar!</p>
        <div className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="CEP (opcional)"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Cidade"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            required
          />
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Conta de luz mensal (R$)"
            value={conta}
            onChange={e => setConta(e.target.value)}
            required
            type="number"
            min={0}
          />
          <select
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            value={tipoTelhado}
            onChange={e => setTipoTelhado(e.target.value)}
            required
          >
            <option value="">Tipo de telhado</option>
            {tiposTelhado.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            value={orientacao}
            onChange={e => setOrientacao(e.target.value)}
            required
          >
            <option value="">Orientação do telhado</option>
            {orientacoes.map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Tamanho do sistema (kWp) - opcional"
            value={tamanho}
            onChange={e => setTamanho(e.target.value)}
            type="number"
            min={0}
          />
          <button
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition"
            onClick={calcular}
          >
            Calcular
          </button>
        </div>
        {result && (
          <div className="mt-8 bg-white rounded-lg shadow p-4 text-gray-800">
            <h2 className="text-lg font-semibold mb-2 text-center">Resultado</h2>
            <ul className="space-y-1">
              <li><b>Economia anual estimada:</b> {result.economia}</li>
              <li><b>Tamanho recomendado do sistema:</b> {result.sistema} kWp</li>
              <li><b>Investimento estimado:</b> {result.investimento}</li>
              <li><b>Ponto de equilíbrio:</b> {result.payback} anos</li>
              <li><b>Incentivos:</b> {result.incentivos}</li>
            </ul>
          </div>
        )}
        {showLead && (
          <form className="mt-6 space-y-3" onSubmit={handleLead}>
            <p className="text-center text-gray-700">Deseja receber uma proposta personalizada?</p>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              placeholder="Seu nome"
              value={lead.nome}
              onChange={e => setLead({ ...lead, nome: e.target.value })}
              required
            />
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              placeholder="Seu e-mail"
              value={lead.email}
              onChange={e => setLead({ ...lead, email: e.target.value })}
              required
              type="email"
            />
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
              type="submit"
            >
              Quero receber minha proposta
            </button>
          </form>
        )}
      </div>
      <a href="/" className="mt-8 text-gray-400 hover:text-gray-700 text-sm">Voltar para o início</a>
    </div>
  );
} 