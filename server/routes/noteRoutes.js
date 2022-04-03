const { Note } = require("../models/noteModel");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  Note.find()
    .then((notes) => res.send(notes))
    .catch((err) => console.log(err.message));
});

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).send("Note not found...");

    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    res.send(deletedNote);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).send("Note not found...");

  const { title, desc } = req.body;

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, desc },
    { new: true }
  );

  res.send(updatedNote);
});

router.post("/", (req, res) => {
  const { title, desc } = req.body;
  let note = new Note({
    title,
    desc,
  });

  note
    .save()
    .then((note) => res.send(note))
    .catch((error) => console.log(error.message));
});

module.exports = router;
