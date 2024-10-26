const { v4: uuidv4 } = require('uuid');

let posts = [
  { id: uuidv4(), username: 'johndoe', content: 'I am a web developer' },
  { id: uuidv4(), username: 'alexhales', content: 'I am a software engineer' },
  { id: uuidv4(), username: 'jamesbond', content: 'I am a secret agent' },
];

exports.getAllPosts = (req, res) => {
  res.render('index', { posts });
};

exports.getNewPostForm = (req, res) => {
  res.render('new');
};

exports.createPost = (req, res) => {
  const { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content });
  res.redirect('/posts');
};

exports.getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render('show', { post });
};

exports.updatePost = (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  const post = posts.find((post) => post.id === id);
  if (post) post.content = newContent;
  res.redirect('/posts');
};

exports.editPost = (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render('edit', { post });
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect('/posts');
};
