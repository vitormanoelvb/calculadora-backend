const db = require('../config/db');

exports.salvarOperacao = (req, res) => {
  const { expressao, resultado } = req.body;
  const sql = 'INSERT INTO historico (expressao, resultado) VALUES (?, ?)';
  db.query(sql, [expressao, resultado], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Operação salva com sucesso!' });
  });
};

exports.listarHistorico = (req, res) => {
  db.query('SELECT * FROM historico ORDER BY id DESC LIMIT 10', (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
};

exports.limparHistorico = (req, res) => {
  db.query('DELETE FROM historico', (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Histórico limpo!' });
  });
};
