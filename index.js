const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const morgan = require("morgan");
const app = express();

//app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());
// app.use(
//   morgan(function(tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, "content-length"),
//       "-",
//       tokens["response-time"](req, res),
//       "ms",
//       JSON.stringify(req.body)
//     ];
//   })
// );

let entries = [
  {
    name: "Chris",
    number: "571-356-9549",
    id: 1
  },
  {
    name: "James",
    number: "703-243-6787",
    id: 2
  }
];

app.get("/api/persons", (req, res) => {
  return res.json(entries);
});

// app.get("/info", (req, res) => {
//   const content = `<p>Phonebook has info for ${
//     entries.length
//   } people</p><p>${new Date()}</p>`;
//   return res.send(content);
// });

// app.get("/api/persons/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const entry = entries.find(e => e.id === id);

//   if (entry) {
//     return res.json(entry);
//   } else {
//     return res.status(404).end();
//   }
// });

// app.delete("/api/persons/:id", (req, res) => {
//   const id = Number(req.params.id);
//   entries = entries.filter(e => e.id !== id);

//   console.log(entries);
//   return res.status(204).end();
// });

// app.post("/api/persons", (req, res) => {
//   const body = req.body;

//   const match = entries.find(
//     entry => entry.name.trim().toLowerCase() === body.name.trim().toLowerCase()
//   );

//   if (!body.name || !body.number) {
//     return res.status(400).json({
//       error: "content not found"
//     });
//   } else if (match) {
//     return res.status(400).json({
//       error: "name must be unique"
//     });
//   }

//   const entry = {
//     name: body.name,
//     number: body.number,
//     date: new Date(),
//     id: generateID()
//   };

//   entries.concat(entry);
//   return res.json(entry);
// });

// const generateID = () => {
//   return Math.floor(Math.random() * 1000);
// };

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
