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

function f (arr, paramName){
    return arr.map (item => {
        return item[paramName];
    });
};
f(fruits, "name");


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

function fun (arr){
    return arr.reduce ((acc, item) => {
       if(item.books){ 
        acc.push(item.books);
        return acc;
       }
    },[]);
};
fun (readers);
