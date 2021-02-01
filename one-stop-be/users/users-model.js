const db = require("../database/db-config.js");

module.exports = {
  findBy,
  find,
  add,
  findById,
};

function add(user) {
  return db("registered").insert(user);
}

function find() {
  return db("registered").select("*");
}

function findBy(filter) {
  return db("registered").where(filter);
}

function findById(id) {
  return db("users").where({ id }).first();
}
