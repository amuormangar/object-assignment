// ASSIGNMENT
//Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that increases the balance and logs the new balance, and another method withdraw(amount) that decreases the balance only if there are enough funds. Create 3 user accounts and simulate deposits and withdrawals.

// pseudocode
// 1.Create bankAccount constructor with objects [name,balance]
// 2.Add a method deposit taking in the amount
// 3.In the deposit method ,add balance and amount to get the new balance
// 4.Then create a method to  subtract withdrawawals from the current balance
//   with if condition to return the correct results
// then use the new word to create 3 other user accounts 

function BankAccount(name,balance){
    this.name = name
    this.balance = balance
    this.deposit = function(amount){

    return this.balance += amount
    }
    this.withDraw = function (amount){
        if(amount >=balance){
          return  this.balance-=amount
        }
           
    }
}
const personBalance = new BankAccount("Paul" , 70090)
console.log(personBalance.deposit(9000)) 

console.log(personBalance.withDraw(4000))

const personAccount = new BankAccount ("Mary",40000)
console.log(personBalance.deposit(60000))
console.log(personBalance.withDraw(2000))

const personBalance2 = new BankAccount("Amuor" , 79990)
console.log(personBalance.deposit(90000)) 
console.log(personBalance.withDraw(4000))









// Create an object taskList with a property tasks (an array of task names). Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() to print all remaining tasks. Test the object with 4–5 tasks and demonstrate the functionality of each method.
// 1.Define tasklist Object. 
// 2.create an empty array for the tasklists that will be listed
// 3.create the addItems method to add items to the empty array created 
// 4.i create completeTask method filter out completed tasks and remove them 
// 5.create listTasks() withpout parameters to print out all the tasks 


const taskList ={
    tasks : [],
    addTask (task){
        this.tasks.push(task)
        console.log(`Your is ${task} `)
    },
completeTask(task){
    this.task = this.tasks.filter(task =>task !==task)
    console.log(`${task} completed`)
},
listTasks (){
    return this.tasks
}   
}
taskList.addTask('go shopping')
taskList.addTask('doing assignment')
taskList.completeTask(`cooking lunch`)
console.log(taskList.listTasks)
   

//Create a Student object with name, scores (an array), and a method getAverage() that returns the average score. Add another method hasPassed() that returns true if the average is 50 or more, otherwise false. Create and test this for at least two students.
// 1.create Student as an object with name,scores as an array 
// 2.create getAverage method for calculating the average of students scores
// 3.create hasPassed method that return true when student average is > 50 

function Student (name,scores){
    this.name = name;
    this.scores = scores;

this.getAverage = function(){
    const total =this.scores.reduce((acc,score)=>
        acc + score,0);
    return total/this.scores.length
    }
this.hasPassed = function(){
    return this.getAverage() > 50

};
}
   const studentscore1 = new Student("Amuor",[90,85,76])
   console.log(studentscore1.getAverage())
   console.log(studentscore1.hasPassed())

   const studentscore2 = new Student("Hellen",[70,55,66])
   console.log(studentscore2.getAverage())
   console.log(studentscore2.hasPassed())

   const studentScore3 = new Student("Amuor",[40,25,45])
   console.log(studentScore3.getAverage())
   console.log(studentScore3.hasPassed())


//Create a ShoppingCart object with a property items (an array of item objects with name and price). Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart. Add 3 items and print the final total.
// 1.Define ShoppingCart object with items as the property 
// 2.create items as array to store items 
// 3.create addItems method and then push items into the empty array 
// 4.create getTotal to calculate the total prices of items 


const ShoppingCart ={
    items : [],
    addItems (name,price){
        const item = {name,price};
        return this.items.push(item)
    },
    getTotal (){
        let total = 0;
        for(const item of this.items){
            total+=item.price;
        }
        return total
    }
    }

        ShoppingCart.addItems('coffee',345)
        ShoppingCart.addItems('yoghurt',300)
        ShoppingCart.addItems('Amara lotion',478)
                  
    console.log(`Total cost:${ShoppingCart.getTotal()}`)


    //Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000, and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.
    // 1.create movie constructor and initialise title,year and rating as parameters and define them 
    // 2.create isClassic method that checks if the year is < 2000
    // 3.create recommend method check the rating ,give 'highly recommended!'for rating > 8 

    function Movie(title,year,rating){
        this.title = title
        this.title = year
        this.rating = rating
        this.isClassic = function(){
            
                if(year < 2000){
                    return true
                }
                else {
                    return false
                }
            }
        
    
        this.recommend = function(){
         
          if(this.rating >8){
            console.log("Highly recommended!")
          }
          else{
            console.log('outdated')
          }
         }
        }
    
      const movies = new Movie ( "Money Heist", 2012,7)
    
      console.log(movies.isClassic())
      console.log (movies.recommend())

      const Movie2 = new Movie("The Outpost",2021,9)
      console.log(Movie2.isClassic())
      console.log(Movie2.recommend())
      

      const movies3 = new Movie("Never have i ever",2022,5)
      console.log(movies3.isClassic())
      console.log(movies3.isClassic())
    



