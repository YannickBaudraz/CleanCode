function saveUser(email, password) {
  const user = {
    id: Math.random().toString(),
    email: email,
    password: password,
  };

  db.insert('users', user);
}

saveUser('test@test.com', 'testers');

function saveUser(user) {
  db.insert('users', user);
}

saveUser(newUser);
