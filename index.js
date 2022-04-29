const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my auto NODEMON.js!");
});

const users = [
  {
    id: 1,
    name: "Sabana",
    email: "shabana@gmail.com",
    phone: "017888888888",
  },
  {
    id: 2,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "017888888888",
  },
  {
    id: 3,
    name: "suchorita",
    email: "suchorita@gmail.com",
    phone: "017888888888",
  },
  {
    id: 4,
    name: "suchonda",
    email: "suchonda@gmail.com",
    phone: "017888888888",
  },
  {
    id: 5,
    name: "srabonti",
    email: "srabonti@gmail.com",
    phone: "017888888888",
  },
  {
    id: 6,
    name: "sabilaNoor",
    email: "sabilanoor@gmail.com",
    phone: "017888888888",
  },
  {
    id: 7,
    name: "sohanaAyla",
    email: "sohanaayla@gmail.com",
    phone: "017888888888",
  },
];

/**
 * for 1 thing match need to use find
 * for more thigns match need to use filter
 */

app.get("/users", (req, res) => {
  // filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

// post method
app.post("/user", (req, res) => {
  console.log("Request:", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Hello world!", port);
});
