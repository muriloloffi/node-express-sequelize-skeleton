export default {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '123456',
  DB: 'avaliacao',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
