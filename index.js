const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Hello From My First Ever Node File!! I am so Excited. Are you Excited?"
  );
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});

const users = [
  { id: 1, name: "Shabana", profession: "Acting" },
  { id: 2, name: "Shakib Khan", profession: "Acting" },
  { id: 3, name: "Shakib Al Hasan", profession: "Cricketer" },
  { id: 4, name: "Khabib", profession: "Boxer" },
  { id: 5, name: "Sakhawat Hossain", profession: "Student" },
  { id: 6, name: "Tyler Williams", profession: "Web Developer" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    res.send(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  res.send(users.find((user) => user.id == req.params.id));
});

app.listen(port, () => {
  console.log("Listening to the port", port);
});
