import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalPrice(): number {
        let totalPrice = 0;
        for (let item of this._items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }

    getTotalDiscountedPrice(discount: number):number {
        const initialPrice: number = this.getTotalPrice();
        return initialPrice - initialPrice * (discount / 100);
    }

    delete(id: number): void {
        let foundElement: boolean = false;
        this.items.forEach((element => {
          if(element.id === id) {
            this._items.splice(this._items.indexOf(element), 1);
            foundElement = true;
          }
        }))
        if (!foundElement) {
          throw new Error('id не найден');
        }
      }
}