const express = require("express");
const router = express.Router();
const supabase = require("../db");

router.post("/save", async (req, res) => {
  try {
    const data = req.body;

    const { error } = await supabase
      .from("farmers")
      .insert([data]);

    if (error) throw error;

    res.json({ message: "Data saved successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;