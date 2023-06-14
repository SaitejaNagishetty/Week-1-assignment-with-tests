/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var totalSpentByCategory = {};

  // Iterate over each transaction
  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    var category = transaction.category;
    var price = transaction.price;

    // If category already exists, add the price to the existing total
    if (category in totalSpentByCategory) {
      totalSpentByCategory[category] += price;
    } else {
      // If category doesn't exist, initialize it with the price
      totalSpentByCategory[category] = price;
    }
  }

  // Convert the object into an array of objects
  var result = Object.keys(totalSpentByCategory).map(function (category) {
    var totalAmountSpent = totalSpentByCategory[category];
    var categoryObject = {};
    categoryObject[category] = totalAmountSpent;
    return categoryObject;
  });

  return result;
}

function totalSpentByCategory1(transactions){
  let eachCatergorySpent = {};
  for(let i = 0; i < transactions.length; i++){
      let transaction = transactions[i];
      let category = transaction.category;
      let price = transaction.price;
      
      if(category in eachCatergorySpent){
          eachCatergorySpent[category] += price;
      }
      else{
          eachCatergorySpent[category] = price;
      }
  } 
      
      let res = Object.keys(eachCatergorySpent).map(function (category){
          var amount = eachCatergorySpent[category];
          var catObject = {};
          catObject[category] = amount;
          return catObject;
      });

      return res;
  }




const transactions = [
      {
          id: 1,
          timestamp: 1656076800000,
          price: 10,
          category: 'Food',
          itemName: 'Pizza',
      },
      {
          id: 2,
          timestamp: 1656259600000,
          price: 20,
          category: 'Food',
          itemName: 'Burger',
      },
      {
          id: 3,
          timestamp: 1656019200000,
          price: 15,
          category: 'Clothing',
          itemName: 'T-Shirt',
      },
      {
          id: 4,
          timestamp: 1656364800000,
          price: 30,
          category: 'Electronics',
          itemName: 'Headphones',
      },
      {
          id: 5,
          timestamp: 1656105600000,
          price: 25,
          category: 'Clothing',
          itemName: 'Jeans',
      },
  ];

  console.log(totalSpentByCategory1(transactions));


module.exports = calculateTotalSpentByCategory;