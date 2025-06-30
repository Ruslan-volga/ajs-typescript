// src/service/Cart.test.ts
import Cart from '../service/Cart';
import Book from '../domain/Book';
import Smartphone from '../domain/Smartphone';
import Movie from '../domain/Movie';

describe('Cart', () => {
  let cart: Cart;
  let book: Book;
  let smartphone: Smartphone;
  let movie: Movie;

  beforeEach(() => {
    cart = new Cart();
    book = new Book(1, 'Книга', 'Автор', 500, 200);
    smartphone = new Smartphone(2, 'Смартфон', 30000, true, 'Бренд', 'Модель');
    movie = new Movie(3, 'Фильм', 500, 'Оригинал', 2020, 'Страна', 'Слоган', 'Жанр', 120, 'Режиссер');
  });

  test('создание пустой корзины', () => {
    expect(cart.items.length).toBe(0);
    expect(cart.getTotalCount()).toBe(0);
    expect(cart.getTotalPrice()).toBe(0);
  });

  test('добавление уникального товара', () => {
    cart.add(book);
    expect(cart.items.length).toBe(1);
    expect(cart.getTotalCount()).toBe(1);
    expect(cart.getTotalPrice()).toBe(500);
  });

  test('добавление товара с количеством', () => {
    cart.add(smartphone, 2);
    expect(cart.items.length).toBe(1);
    expect(cart.getTotalCount()).toBe(2);
    expect(cart.getTotalPrice()).toBe(60000);
  });

  test('увеличение количества товара', () => {
    cart.add(smartphone);
    cart.increaseQuantity(smartphone.id);
    expect(cart.items[0].quantity).toBe(2);
    expect(cart.getTotalCount()).toBe(2);
  });

  test('уменьшение количества товара', () => {
    cart.add(smartphone, 3);
    cart.decreaseQuantity(smartphone.id);
    expect(cart.items[0].quantity).toBe(2);
    expect(cart.getTotalCount()).toBe(2);
  });

  test('удаление товара при уменьшении до 0', () => {
    cart.add(smartphone, 1);
    cart.decreaseQuantity(smartphone.id);
    expect(cart.items.length).toBe(0);
  });

  test('удаление товара', () => {
    cart.add(book);
    cart.add(smartphone);
    cart.removeItem(book.id);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].product.id).toBe(smartphone.id);
  });

  test('очистка корзины', () => {
    cart.add(book);
    cart.add(smartphone, 2);
    cart.clear();
    expect(cart.items.length).toBe(0);
    expect(cart.getTotalCount()).toBe(0);
  });
});