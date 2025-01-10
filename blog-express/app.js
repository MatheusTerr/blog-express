const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { sequelize } = require('./models/post'); // Configuração do banco de dados
const postRoutes = require('./routes/posts'); // Rotas do blog

const app = express();
const PORT = process.env.PORT || 3000; // Permite configurar a porta por variáveis de ambiente

// Configurações do Express
app.set('view engine', 'ejs'); // Configurando EJS como template engine
app.use(express.static('public')); // Arquivos estáticos (CSS, JS)
app.use(bodyParser.urlencoded({ extended: true })); // Parse de formulários
app.use(methodOverride('_method')); // Suporte a métodos HTTP PUT e DELETE

// Rotas do Blog
app.use('/', postRoutes);

// Middleware de Tratamento de Erros (404)
app.use((req, res) => {
  res.status(404).render('404', { message: 'Página não encontrada!' });
});

// Middleware de Tratamento de Erros Gerais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.' });
});

// Sincronização do banco de dados e inicialização do servidor
sequelize
  .sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
