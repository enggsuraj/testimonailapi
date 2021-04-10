// pages/api/[id].js
import nc from "next-connect";
import data from "../../data/data.";
import NextCors from "nextjs-cors";

//GET RESPECTIVE ID
const getTestimonials = (id) => data.find((n) => n.id === parseInt(id));

const handler = nc().get((req, res) => {
  const testimonialData = getTestimonials(req.query.id);

  if (!testimonialData) {
    res.status(404);
    res.end();
    return;
  }

  NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  res.json(testimonialData);
});

export default handler;
