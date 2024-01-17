const db = require("../models");
const Quiz = db.quizzes;

// menambah data
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "Quiz created successfully.",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// menampilkan atau mengambil semua data
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "Quizzes retrieved successfully.",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// mengubah data
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "Quizzes updated successfully.",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while updating quiz",
      data: null,
    });
  }
};

// menghapus data
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });

    quiz.destroy();

    res.json({
      message: "Quiz deleted succesfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while deleting quiz",
      data: null,
    });
  }
};

// menampilkan data tertentu
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Quizzes retrieved successfully with id=${id}.`,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving quiz",
      data: null,
    });
  }
};

// menampilkan atau mengambil data kategori tertentu
exports.getCategoryById = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      categoryId: id,
    },
  });
  res.json({
    message: `Quizzes retrieved successfully with categoryId=${id}.`,
    data: quizzes,
  });
};

// menampilkan data berdasrkan level
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      levelId: id,
    },
  });
  res.json({
    message: `Quizzes retrieved successfully with levelId=${id}.`,
    data: quizzes,
  });
};
