// pages/api/[id].js
import nc from "next-connect";
import data from "../../data/data.";

//GET RESPECTIVE ID
const getTestimonials = (id) => data.find((n) => n.id === parseInt(id));

const handler = nc().get((req, res) => {
  const testimonialData = getTestimonials(req.query.id);

  if (!testimonialData) {
    res.status(404);
    res.end();
    return;
  }

  res.json(testimonialData);
});

export default handler;
