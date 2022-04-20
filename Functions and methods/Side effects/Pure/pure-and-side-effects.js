// Pure
function generateId(userName) {
  const id = 'id_' + userName;
  return id;
}

// Not pure
function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}

let lastAssignedId;

// Not pure
function generateId(userName) {
  const id = 'id_' + userName;
  lastAssignedId = id;
  return id;
}
