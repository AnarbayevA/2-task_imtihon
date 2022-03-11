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

function sumSalary(item) {
    var collector = []
    var counter = 0

    for (var key in item){
        collector.push(item[key].salary)
    }

    for (let i = 0; i < collector.length; i++) {
        counter += collector[i]
        
    }

    return counter
    
}

function avarageAge(item2) {
    var collector = []
    var counter = 0
    var result

    for (var key in item2){
        collector.push(item2[key].age)
    }

    for (let i = 0; i < collector.length; i++) {
        counter += collector[i]
        
    }

    result = counter / collector.length
    
    return result
}

console.log(sumSalary(users));

console.log(avarageAge(users));