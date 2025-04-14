import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  // = /
  res.send("Home Page");
});

router.get("/about", (req, res) => {
  // - /about
  res.send("About Page");
});

export default router;
