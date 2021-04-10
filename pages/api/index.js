import nc from "next-connect";
import data from "../../data/data.";
import NextCors from "nextjs-cors";

// GET DATA
const handler = nc().get((req, res) => {
  NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  res.json(data);
});

export default handler;
