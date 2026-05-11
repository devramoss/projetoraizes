import { criarPedido } from "../../application/services/PedidoService.js";

export async function criar(req, res) {
  try {
    const pedido = await criarPedido(req.body);
    res.status(201).json(pedido);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}
