// Only change code below this line
class Book {
    constructor (title) {
        this._title = title;
    }
    // getter
    get title () {
        return this._title;
    }
    // setter
    set title (newName) {
        this._title = newName;
    }
}


// Only change code above this line
const littlePrince = new Book ("The Little Price");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Price";
console.log(littlePrince.title);

module.exports = Book;