import { useState } from "react";
import Header from "@/components/Header";
import { Sun } from "lucide-react";

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
    <>
      <Header hideCalculatorButton />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-white px-4 py-24 pt-32">
        <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-2xl p-10 border border-gray-100 mt-24">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-yellow-100 rounded-full p-3 mb-2 shadow">
              <Sun className="text-yellow-400" size={36} />
            </span>
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-1">Calculadora Solar Interativa</h1>
            <p className="text-gray-600 text-center">Descubra quanto você pode economizar com energia solar!</p>
          </div>
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
            <div className="mt-10 bg-yellow-50 rounded-xl shadow-inner p-6 text-gray-800 border border-yellow-100">
              <h2 className="text-xl font-semibold mb-3 text-center text-yellow-700 flex items-center justify-center gap-2">
                <Sun className="text-yellow-400" size={22} /> Resultado
              </h2>
              <ul className="space-y-2 text-base">
                <li><b>Economia anual estimada:</b> {result.economia}</li>
                <li><b>Tamanho recomendado do sistema:</b> {result.sistema} kWp</li>
                <li><b>Investimento estimado:</b> {result.investimento}</li>
                <li><b>Ponto de equilíbrio:</b> {result.payback} anos</li>
                <li><b>Incentivos:</b> {result.incentivos}</li>
              </ul>
            </div>
          )}
          {showLead && (
            <form className="mt-8 space-y-4" onSubmit={handleLead}>
              <p className="text-center text-gray-700 font-medium">Deseja receber uma proposta personalizada?</p>
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
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow transition"
                type="submit"
              >
                Quero receber minha proposta
              </button>
            </form>
          )}
        </div>
        <a href="/" className="mt-10 text-gray-400 hover:text-gray-700 text-sm">Voltar para o início</a>
      </div>
    </>
  );
} 