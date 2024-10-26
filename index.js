const express = require('express');
const path = require('path');
const methodOverride = require('./middlewares/methodOverride');
const postRoutes = require('./routes/postsRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Listening to the port ... ${port}`);
});
