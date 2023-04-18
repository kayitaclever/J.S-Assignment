// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.




// Aligorithm of inventory management system.(Women brand)

//in an array of 5 names  of items(array1)
// in array1create an array of corresponding stock quantities of each name and name it(stockArray)
// create a function that add a new item in the  inventory and affect both arrays.()
//create a function that calculate the stock quantity  when one item exit. (newArray)
// create a function that calculate total number of items in the inventory (newA)
// create a function that find an item with the lowest stock quantinty in array1

// pseudo codes
//create an Array of names, array1=["beauty","sanitary","drinks",'food','clothes','shoes','bags']
// stock array=[{name,stock}]
// create a function that add an item, Declare a variable that will hold the added item
// use push(), to add an item to the existing array
// 

const array1=["beauty","sanitary","drinks",'food','clothes','shoes','bags']
const stockArray = [  { name: 'beauty', stock: 5 },  { name: 'sanitary', stock: 10 },  
{ name: 'drinks', stock: 15 },  { name: 'food', stock: 20 },  { name: 'clothes', stock: 25 },  
{ name: 'shoes', stock: 30 },  { name: 'bags', stock: 35 }, ]
console.log(stockArray)
const newItem=({name:"fruits",stock:23})

function AddnewItem(){
   
    stockArray.push(newItem)
    return stockArray
}
console.log(AddnewItem())

function calculateQuantity(){


    stockArray.shift()
    return stockArray

}
console.log(calculateQuantity())

function calculateTotalItems() {
    let total = 0;
    
    for (let i = 0; i < stockArray.length; i++) {
      total += stockArray[i];
    }
    
    return total;
}
console.log(calculateTotalItems())

function lowestStock(){       

    let lowestStockIndex = 0;
  
    for (let i = 1; i < stockArray.length; i++) {
      if (stockArray[i] < stockArray[lowestStockIndex]) {
        lowestStockIndex = i;
      }
    }
    
    return stockArray[lowestStockIndex]
}

console.log(lowestStock())




