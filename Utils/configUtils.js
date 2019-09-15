const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const port = process.env.PORT;
let db = process.env.DB_NAME;

if (process.env.NODE_ENV === 'development') {
  db = process.env.DEV_DB_NAME;
} else if (process.env.NODE_ENV === 'test') {
  db = process.env.TEST_DB_NAME;
}

module.exports = {
  user,
  password,
  port,
  db
};
