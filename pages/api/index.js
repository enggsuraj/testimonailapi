import nc from "next-connect";
import data from "../../data/data.";

// GET DATA
const handler = nc().get((req, res) => {
  res.json(data);
});

export default handler;
