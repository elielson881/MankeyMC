const express = require('express');
const app = express();
const PORT = 3000;

// Dados de exemplo (você substituirá isso com os dados reais do seu servidor)
let ranks = [
    { playerName: 'Teste 1', kills: 50, deaths: 10 },
    { playerName: 'Teste 2', kills: 30, deaths: 20 },
    { playerName: 'Teste 3', kills: 25, deaths: 15 },
    { playerName: 'Teste 4', kills: 10, deaths: 30 }
];

// Rota para obter os dados dos ranks
app.get('/ranks', (req, res) => {
    res.json(ranks);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
