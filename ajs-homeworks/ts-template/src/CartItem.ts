// src/service/Cart.ts
import Buyable from '../domain/Buyable';
import CartItem from '../domain/CartItem';

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable, quantity: number = 1): void {
        const existingItem = this._items.find(i => i.product.id === item.id);

        if (existingItem) {
            if (item.countable) {
                existingItem.quantity += quantity;
            }
            // Для уникальных товаров не увеличиваем количество
        } else {
            this._items.push(new CartItem(item, quantity));
        }
    }

    get items(): CartItem[] {
        return [...this._items];
    }

    getTotalCount(): number {
        return this._items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice(): number {
        return this._items.reduce((total, item) => total + item.totalPrice, 0);
    }

    increaseQuantity(productId: number): void {
        const item = this._items.find(i => i.product.id === productId);
        if (item) {
            item.increase();
        }
    }

    decreaseQuantity(productId: number): void {
        const item = this._items.find(i => i.product.id === productId);
        if (item) {
            item.decrease();
            if (item.quantity === 0) {
                this.removeItem(productId);
            }
        }
    }

    removeItem(productId: number): void {
        this._items = this._items.filter(item => item.product.id !== productId);
    }

    clear(): void {
        this._items = [];
    }
}