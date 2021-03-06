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
        return this._items.reduce((sum: number, item: Buyable) => {return sum + item.price}, 0);
    }

    getTotalDiscountedPrice(discount: number):number {
        const initialPrice = this.getTotalPrice();
        return initialPrice - initialPrice * (discount/100);
    }

    delete(id: number): void {
        const editedItems = this._items.filter((item) => {
          return item.id !== id;
          });
        if (editedItems.length === this._items.length) {
          throw new Error('id не найден');
        } else {
          this._items = editedItems;
        }
    }
}