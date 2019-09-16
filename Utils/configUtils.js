require('dotenv').config();

const port = process.env.PORT;
let url = process.env.DB_URI;

if (process.env.NODE_ENV === 'development') {
  url = process.env.DEV_DB_URI;
} else if (process.env.NODE_ENV === 'test') {
  url = process.env.TEST_DB_URI;
}

module.exports = {
  url,
  port
};
