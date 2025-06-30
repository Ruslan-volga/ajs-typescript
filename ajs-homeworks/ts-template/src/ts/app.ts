// src/ts/app.ts
import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();

// Добавляем товары
cart.add(new Book(1, 'Война и мир', 'Лев Толстой', 2000, 1225));
cart.add(new MusicAlbum(2, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(
    3,
    'Мстители',
    2200,
    'The Avengers',
    2012,
    'США',
    '«Avengers Assemble!»',
    'фантастика, боевик, фэнтези, приключения',
    137,
    'Marvel'
));
cart.add(new Smartphone(4, 'iPhone 15', 90000, true, 'Apple', '15 Pro'), 2);

// Увеличиваем количество смартфона
cart.increaseQuantity(4);

// Уменьшаем количество смартфона
cart.decreaseQuantity(4);

// Выводим информацию
console.log('Товары в корзине:', cart.items);
console.log('Общее количество товаров:', cart.getTotalCount());
console.log('Общая стоимость:', cart.getTotalPrice());

// Удаляем один товар
cart.removeItem(2);
console.log('Товары после удаления:', cart.items);

// Очищаем корзину
cart.clear();
console.log('Корзина после очистки:', cart.items);