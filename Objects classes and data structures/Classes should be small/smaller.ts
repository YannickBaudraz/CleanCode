class Order {

  public refund() {}
}

class Customer {

  private orders: Order[];

  constructor(public email: string, public password: string) {}

  public login(email: string, password: string) {}

  public updateProfile(name: string) {}

  public makePurchase(productId: string) {}
}

class Product {

  constructor(public title: string, public price: number) {}

  public update(Id: string, title: string, price: number) {}

  public remove(Id: string) {}
}

class Inventory {

  private products: Product[];

  public getAvailableItems(productId: string) {}

  public restockProduct(productId: string) {}
}

const order = new Order();
const customer = new Customer('yannick@github.com', '123456');
const product = new Product('The Book', 19.99);
const inventory = new Inventory();
