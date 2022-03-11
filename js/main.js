// given array
var users = {
    "Akmal":  {
        name: "Akmal",
        suname: "O'ktamov",
        age: 27,
        salary: 800

    },

    "Oybek":  {
        name: "Oybek",
        suname: "Sallarov",
        age: 36,
        salary: 1500

    },

    "Umid":  {
        name: "Umid",
        suname: "Abdushukurov",
        age: 21,
        salary: 400

    }
}

function sumSalary(item) {  // total monthly salary
    var collector = [] // salary list
    var counter = 0 // variable

    for (var key in item){ // monthly withdrawal function
        collector.push(item[key].salary) 
    }

    for (var i = 0; i < collector.length; i++) { // a function that finds the sum of the months
        counter += collector[i]
        
    }

    return counter
    
}

function avarageAge(item2) { // average age function
    var collector = []  // salary list
    var counter = 0  // variable
    var result // average value

    for (var key in item2){ // a function that pulls out the average age
        collector.push(item2[key].age)
    }

    for (var i = 0; i < collector.length; i++) { // sum of age
        counter += collector[i]
        
    }

    result = counter / collector.length // average value
    
    return result
}

console.log(sumSalary(users)); // total monthly

console.log(avarageAge(users)); // avrage age