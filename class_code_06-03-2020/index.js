function Student(name, fname, age, fee, dicMonths) {
    this.name = name
    this.fname = fname
    this.age = age
    this.fee = fee
    this.dicMonths = dicMonths
    
}

Student.prototype.calcfee = function (percentIfDisc) {
        var bestFee = this.fee;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.dicMonths.length; i++) {
            if (this.dicMonths[i] === thisMo) {
                bestFee = this.fee * percentIfDisc;
                break;
            }
        }
        return bestFee * 12;
    }


Student.prototype.isActive = true

var student1 = new Student("Ali", "Ahmed", 14, 2500, [0, 1])

var student2 = new Student("Saad", "Khan", 12, 3500, [2, 3])

var student3 = new Student("Umer", "Ikhlas", 13, 1000, [4, 5])


console.log(student1, student2, student3)

// Set Student Data in local Storage

var student1String = JSON.stringify(student1)

localStorage.setItem("student1", student1String)


// Get Data from local storage

var studentFromLocalStorage = JSON.parse(localStorage.getItem("student1"))




console.log(student3.calcfee(0.8))
console.log(student3.isActive)

// student1.isActive = false

console.log("student 1",student1.isActive)

var listOfProperties = []
// for (var prop in student1) {
    
//     listOfProperties.push(prop);
//     }

    for (var prop in student1) {
        if(student1.hasOwnProperty(prop))
            listOfProperties.push(prop);
        }
console.log("properties", listOfProperties)

