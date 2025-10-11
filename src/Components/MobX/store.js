import { makeAutoObservable } from "mobx";

class Store {

    value = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }
}

export const store = new Store();