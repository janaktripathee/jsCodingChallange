//Develop an inventory application for a bookstore. 
//Create a book class,which provides information about different books in store .
//each book will have a title , author, ISBN, and keep track of the number of available copies.

// check the availability of each book's if there are not any copies of the book left, the function should return
//out of stock and if there are less than 10 copies the function should return low stock.
//otherwise the function should return in stock.

//also need function for selling a book which will take the number of copies sold and substract if from the total 
//number of copies.

//if no arguments is passed , then default the number of copies to sell to one.
//also want a restock function which takes in a number of copies to restock and add it to the total number of copies
//if no arguments is passed, default the restock number to five.


//use javascript class keywoard as well as a getter function for the availability method.



function Book(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;

}

Book.prototype.getAvailability = function(){
    if(this.numCopies ===0){
        return 'out of stock';
    }else if (this.numCopies<10){
        return 'low Stock';
    }
    return 'In Stock';
}

Book.prototype.sell= function(numCopiesSold =1){
    this.numCopies -=numCopiesSold;
}

Book.prototype.restock = function(numberCopiesStock =5){
    this.numCopies +=numberCopiesStock; 
}

const HungerGames = new Book('Hunger Games','Suzanne Collins', '123334', 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12)
    console.log(HungerGames.getAvailability());

HungerGames.sell(17)
    console.log(HungerGames.getAvailability());
