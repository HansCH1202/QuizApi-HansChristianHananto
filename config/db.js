module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "quizapi",
  dialect: "mysql",
  pool: {
    max: 4,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
