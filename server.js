const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const users = router.db.get("users").value();
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  const newUser = { id: Date.now(), name, email, password };
  router.db.get("users").push(newUser).write();
  res.status(201).json({ message: "Registration successful", email });
});

server.post("/api/login", (req, res) => {
  const { email, password, keepLoggedIn } = req.body;
  const user = router.db.get("users").find({ email, password }).value();
  if (user) {
    res.status(200).json({ token: "fake-jwt-token", keepLoggedIn, name: user.name });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
