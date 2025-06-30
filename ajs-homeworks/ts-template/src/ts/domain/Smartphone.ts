import Buyable from './Buyable';

export default class Smartphone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly countable: boolean = true, // Помечаем как товар с количеством
        readonly brand: string,
        readonly model: string,
    ) { }
}