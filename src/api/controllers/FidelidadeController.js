import { Fidelidade } from "../../infrastructure/database/models/index.js";

export async function consultar(req, res) {
  try {
    const fidelidade = await Fidelidade.findOne({ where: { clienteId: req.params.clienteId } });
    if (!fidelidade) return res.status(404).json({ erro: "Cliente não encontrado" });
    res.json(fidelidade);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

export async function resgatar(req, res) {
  try {
    const fidelidade = await Fidelidade.findOne({ where: { clienteId: req.params.clienteId } });
    if (!fidelidade || fidelidade.pontos < 10) {
      return res.status(400).json({ erro: "Pontos insuficientes" });
    }
    fidelidade.pontos -= 10;
    await fidelidade.save();
    res.json({ desconto: 5.00, pontosRestantes: fidelidade.pontos });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}
