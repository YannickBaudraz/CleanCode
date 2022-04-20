function buildUser(name, greet) {
  return {name, greet};
}

function buildUserByType(name, type) {
  let greet;
  if (type === 'friendly') {
    greet = () => console.log('Hi, nice to meet you!');
  } else if (type === 'unfriendly') {
    greet = () => console.log('Hm? What do you want?');
  }

  return buildUser(name, greet);
}

const friendlyUser = buildUserByType('Max', 'friendly');
friendlyUser.greet();

const unfriendlyUser = buildUserByType('Max', 'unfriendly');
unfriendlyUser.greet();
