const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamp.length, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      res.status(400).json({ succes: false });
    }

    res.status(200).json({ succes: true, data: bootcamp });
  } catch (err) {
    //res.status(400).json({ succes: false });
    next(err);
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      sucess: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }

  //console.log(req.body);
  //res.status(200).json({ success: true, msg: 'Create new bootcamp' });
  //Bootcamp.create(req.body);
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ succes: false });
    }
    res.status(200).json({ succes: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ succes: false });
    }
    res.status(200).json({ succes: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
