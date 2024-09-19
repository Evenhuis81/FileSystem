import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.use(express.json());

app.get("/hello", (_, res) => {
  res.send("Hello Vite + Vue + TypeScript!");
});

app.post('/fs', (req, res) => {
  const body = req.body;
  
  console.log(body);

  res.send('test');
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
