import Element from "./Element.js";

export default class Task {
  #title;
  #isCompleted;
  #id;
  constructor(title, isCompleted) {
    [this.#title, this.#isCompleted, this.#id] = [title, isCompleted, this.#setID()];
    this.#store();
  }
  // getters and setters
  getTitle() {
    return this.#title;
  }
  getIsCompleted() {
    return this.#isCompleted;
  }
  setTitle(title) {
    this.#title = title;
  }
  setIsCompleted(isCompleted) {
    this.#isCompleted = isCompleted;
  }

  // Other methods
  #setID() {
    let idExists = true;
    let id;
    let counter = 0;
    while (idExists) {
      idExists = false;
      id = Math.floor(Math.random() * 10000);
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key[i] === id) {
          idExists = true;
          break;
        }
      }
      counter++;
      if (counter > 1000) {
        idExists = true;
        console.log("ERROR: cannot choose random id"); //Isvesti vartotojui
      }
    }
    return id;
  }
  #store() {
    localStorage.setItem(
      this.#id,
      JSON.stringify(
        { id: this.#id, title: this.#title, isCompleted: this.#isCompleted }
      )
    );
  }
}





