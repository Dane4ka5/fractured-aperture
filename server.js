const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём статику из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Страница входа для разработчиков
app.get('/dev-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dev-login.html'));
});

// Панель разработчика
app.get('/dev-panel', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dev-panel.html'));
});

// Всё остальное → на главную
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
    console.log(`🌐 Открой http://localhost:${PORT}`);
});