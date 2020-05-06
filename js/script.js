let fruits = [{
    name: "banana",
    count: 10,
},{
    name: "orange",
    count: 12,
},{
    name: "peach",
    count: 15,
},{
    name:"pineapple",
    count: 13,
},{
    name: "kiwi",
    count: 11,
}];

let fruitsName = fruits.map(fruit => {
    return fruit.name;
});


console.log(fruitsName);



/*==========================================================*/
 let readers = [{
    name: "Anna",
    books:["Harry Potter", "War and Peace"],
 },{
    name: "Peter",
    books:["two captains", "The Master and Margarita"]

 },{
    name: "Ivan",
    books: ["Sherlock Holmes", "Three Musketeers"],
    
 },{
    name: "Alisa",
    books:["gone With the Wind", "The little Prince"],
 },{
    name:"Lyuba",
    books:["Green Mile", "Lord of the Rings"],
 }];

 let readersBooks = readers.reduce((accBooks, book) =>{
     if (book.books){
         accBooks.push(book.books);
     }
     return accBooks;
 }, []);
 console.log(readersBooks)