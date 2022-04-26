// @ts-ignore
import Logistics from './logistics';

abstract class Delivery {

  constructor(protected purchase: Purchase, protected logistics: any) {}

  abstract deliverProduct(): void;

  abstract trackProduct(): void;
}

class ExpressDelivery extends Delivery {

  deliverProduct() {
    this.logistics.issueExpressDelivery(this.purchase.product);
  }

  trackProduct() {
    this.logistics.trackExpressDelivery(this.purchase.product);
  }
}

class InsuredDelivery extends Delivery {

  deliverProduct() {
    this.logistics.issueInsuredDelivery(this.purchase.product);
  }

  trackProduct() {
    this.logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class StandardDelivery extends Delivery {

  deliverProduct() {
    this.logistics.issueStandardDelivery(this.purchase.product);
  }

  trackProduct() {
    this.logistics.trackStandardDelivery(this.purchase.product);
  }
}

enum DeliveryType {
  STANDARD,
  EXPRESS,
  INSURED,
}

class DeliveryFactory {

  static createDelivery(purchase: Purchase) {
    switch (purchase.deliveryType) {
      case DeliveryType.STANDARD:
        return new StandardDelivery(purchase, Logistics);
      case DeliveryType.EXPRESS:
        return new ExpressDelivery(purchase, Logistics);
      case DeliveryType.INSURED:
        return new InsuredDelivery(purchase, Logistics);
      default:
        throw new Error('Invalid delivery type');
    }
  }
}

type Purchase = {
  deliveryType: DeliveryType,
  customer: any;
  product: any;
};

const customer = {
  name: 'John',
  address: '123 Main Street',
};
const product = {
  name: 'iPhone',
  price: 1000,
  weight: '2kg',
};
const purchase: Purchase = {
  deliveryType: DeliveryType.EXPRESS,
  customer,
  product,
};

const delivery = DeliveryFactory.createDelivery(purchase);
delivery.deliverProduct();
delivery.trackProduct();
