function addProduct(user) {
  validateProductData(user);

  return saveProduct(user);
}

function validateProductData(user) {
  if (!inputIsValid(user.name, user.price)) {
    throw new Error('Invalid input - product was not created.');
  }
}

function inputIsValid(name, price) {
  return !isEmpty(name) && hasMinValue(price, 0);
}

function isEmpty(value) {
  return !value || value.trim() === '';
}

function hasMinValue(value, minValue) {
  return value > minValue;
}

function showErrorMessage(message) {
  console.log(message);
}

function saveProduct(user) {
  const product = {
    id: generateRandomId(user.name),
    name: user.name,
    price: user.price,
  };

  database.insert('products', product);

  return product;
}

function generateRandomId(baseValue) {
  return baseValue + '_' + Math.random().toString();
}

describe(function() {
  it('return true if an empty name is passed as a value', function() {
    const validationResult = isEmpty('');
    expect(validationResult).toEqual(true);
  });

  it('return false if a non-empty name is passed as a value', function() {
    const validationResult = isEmpty('Test');
    expect(validationResult).toEqual(false);
  });
});

describe(function() {
  it('return true if a value above the minValue is provided', function() {
    const validationResult = hasMinValue(10, 8);
    expect(validationResult).toEqual(true);
  });

  it('return false if a value below the minValue is provided', function() {
    const validationResult = hasMinValue(5, 8);
    expect(validationResult).toEqual(false);
  });
});
