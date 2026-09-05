const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём статику из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Перенаправляем все запросы на index.html (работает в любой версии Express)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
    console.log(`🌐 Открой http://localhost:${PORT}`);
});