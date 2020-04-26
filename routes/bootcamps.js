const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
  //res.status(400).json({ success: false });
  //res.sendStatus(404);
  //res.send({ name: 'Brad' });
  //res.send('Hello from express');
});

router.get('/:id', (req, res) => {
  res.status(200).json({ succes: true, msg: `Get bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
