const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculadoraController');

router.post('/salvar', controller.salvarOperacao);
router.get('/historico', controller.listarHistorico);
router.delete('/limpar', controller.limparHistorico);

module.exports = router;