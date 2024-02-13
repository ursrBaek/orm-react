const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// db.json를 조작하기 위해 lowdb를 사용
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Use default router
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

// server.post('/article', (req, res) => {
//   const article = req.body;
//   const data = db
//     .get('posts')
//     .find({
//       id: Number(id),
//       password,
//     })
//     .value();
//   if (data) {
//     res.send({ result: true, message: 'success' });
//   } else {
//     res.send({ result: false, message: 'failed' });
//   }
// });
