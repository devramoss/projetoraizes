import { processarPagamentoMock } from "../../application/services/PagamentoService.js";

export async function pagarMock(req, res) {
  try {
    const { pedidoId } = req.params;
    const { metodo } = req.body;
    const resultado = await processarPagamentoMock(pedidoId, metodo);
    res.json(resultado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}
