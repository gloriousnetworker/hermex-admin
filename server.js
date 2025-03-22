const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  const users = router.db.get("users").value();
  const existingUser = users.find(user => user.email.trim().toLowerCase() === normalizedEmail);
  
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  
  const newUser = { id: Date.now(), name, email: normalizedEmail, password };
  router.db.get("users").push(newUser).write();
  
  res.status(201).json({ message: "Registration successful", email: normalizedEmail });
});

server.post("/api/login", (req, res) => {
  const { email, password, keepLoggedIn } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  
  // Hardcoded test credentials (case-insensitive)
  if (normalizedEmail === "test@gmail.com" && password === "1234567890") {
    return res.status(200).json({ token: "fake-jwt-token", keepLoggedIn, name: "Test User" });
  }
  if (normalizedEmail === "mano@gmail.com" && password === "1234567890") {
    return res.status(200).json({ token: "fake-jwt-token", keepLoggedIn, name: "Mano" });
  }
  
  // Otherwise, check stored users in db.json
  const user = router.db.get("users").find({ email: normalizedEmail, password }).value();
  
  if (user) {
    return res.status(200).json({ token: "fake-jwt-token", keepLoggedIn, name: user.name });
  }
  
  return res.status(401).json({ message: "Invalid credentials" });
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
