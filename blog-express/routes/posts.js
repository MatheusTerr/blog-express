const express = require('express');
const { Post } = require('../models/post');
const router = express.Router();

// Listar posts
router.get('/', async (req, res) => {
  const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
  res.render('index', { posts });
});

// Formulário de criação de post
router.get('/posts/new', (req, res) => {
  res.render('new');
});

// Criar novo post
router.post('/posts', async (req, res) => {
  const { title, body } = req.body;
  await Post.create({ title, body });
  res.redirect('/');
});

// Visualizar post
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send('Post não encontrado');
    }
    res.render('show', { post });
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});

// Editar post
router.get('/posts/:id/edit', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.render('edit', { post });
});

// Atualizar post
router.put('/posts/:id', async (req, res) => {
  const { title, body } = req.body;
  await Post.update({ title, body }, { where: { id: req.params.id } });
  res.redirect('/');
});

// Deletar post
router.delete('/posts/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});

module.exports = router;
