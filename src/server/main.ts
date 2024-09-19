import express from "express";
import ViteExpress from "vite-express";
import scrape from 'website-scraper'; // only as ESM, no CommonJS

const options = {
  urls: ['https://www.gallerydutchart.nl/'],
  directory: '/scraper/test2',
};

const app = express();

app.use(express.json());

app.post('/scrape', async (req, res) => {

  // console.log(req.body);

  
// with async/await
  const result = await scrape(options);

  // console.log(result);

  res.send('done');
})

app.get("/hello", (_, res) => {
  res.send("Hello Vite + Vue + TypeScript!");
});

app.post('/fs', (req, res) => {
  const body = req.body;
  
  console.log(body);

  res.send('test');
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
