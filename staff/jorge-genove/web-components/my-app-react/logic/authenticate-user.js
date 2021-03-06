function loginUser(email, password, callback) {
  debugger;

  Email.validate(email);

  String.validate.notVoid(password);

  Function.validate(callback);

  call(
    "POST",
    "https://skylabcoders.herokuapp.com/api/v2/users/auth",
    `{ "username": "${email}", "password": "${password}" }`,
    { "Content-type": "application/json" },
    (error, status, body) => {
      if (error) return callback(error);

      if (status === 200) {
        const { token } = JSON.parse(body);

        callback(undefined, token);
      } else {
        const { error } = JSON.parse(body);

        callback(new Error(error));
      }
    }
  );
}
