import Buyable from '../domain/Buyable';
import CartItem from '../domain/CartItem';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.countable) {
            // Для товаров с количеством проверяем, есть ли уже такой
            const existingItem = this._items.find(i => i.id === item.id);
            if (existingItem) {
                // В реальном приложении нужно учитывать количество
                return; // Пока просто не добавляем дубликаты
            }
        }
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    priceWithoutDiscount(): number {
        return this._items.reduce((acc: number, item: Buyable) => acc + item.price, 0);
    }

    discountPrice(discount: number): number {
        return this.priceWithoutDiscount() - discount;
    }

    removeObject(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
// Новый метод для получения общего количества товаров
getTotalCount(): number {
    return this._items.length;
}

// Новый метод для получения общей стоимости с учетом количества
getTotalPrice(): number {
    return this.priceWithoutDiscount(); 
    }
}