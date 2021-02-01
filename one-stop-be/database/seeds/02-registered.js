exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("registered")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("registered").insert([
        { email: "ccurry20@gmail.com", password: "lambda1" },
        { email: "ctech828@gmail.com", password: "lambda2" },
        { email: "carmensalley31@gmail.com", password: "lambda3" },
      ]);
    });
};
