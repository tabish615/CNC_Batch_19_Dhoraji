// var plan1  = {
//         name: "Basic",
//         price: 3.5,
//         pages: 3,
// }


// plan1.dicMonths = [2,7]

// var student1 = { 
//         name : "Ali",
//         fatherName: "Khan",
//         age: 10,
//         class: 2,
//         subjects: ["Maths", "Eng", "Urdu"]
// }

// var student2 = { 
//         name : "Ahmed",
//         fatherName: "Khan",
//         age: 12,
//         class: 4,
//         subjects: ["Maths", "Eng", "Urdu"]
// }

// console.log(student1)
// console.log(student1.subjects[1])


// student1.rollNo = 123

// // console.log(student1)

// student1.rollNo = 789


// student1["rollNo"]
// console.log(student1)

// delete student1.age 

// console.log(student1)

// var isAge = "age" in student1

// console.log(isAge)


// console.log(student1["rollNo"])


// student2.subjects.push("Science")

// console.log("St2", student2)

// function calcFee(percentIfDisc) {
//         var bestFee = student1.fee;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < student1.dicMonths.length; i++) {
//                 if (student1.dicMonths[i] === thisMo) {
//                         bestFee = student1.fee * percentIfDisc;
//                         break;
//                 }
//         }
//         return bestFee * 12;

// }
// var annualFee = calcFee(0.8)
// var student1 = {
//         name: "Ali",
//         fatherName: "Khan",
//         age: 10,
//         class: 2,
//         fee: 2000,
//         dicMonths: [0, 1],
//         calcFee : function (percentIfDisc) {
//                 var bestFee = this.fee;
//                 var currDate = new Date();
//                 var thisMo = currDate.getMonth();
//                 for (var i = 0; i < this.dicMonths.length; i++) {
//                         if (this.dicMonths[i] === thisMo) {
//                                 bestFee = this.fee * percentIfDisc;
//                                 break;
//                         }
//                 }
//                 return bestFee * 12;
//         }
// }


// var annualFee = student1.calcFee(0.8)

// console.log(annualFee)

function Student(name, fname, age, fee, dicMonths) {
    this.name = name
    this.fname = fname
    this.age = age
    this.fee = fee
    this.dicMonths = dicMonths
    this.calcFee = function (percentIfDisc) {
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
}


var student1 = new Student("Ali", "Ahmed", 14, 2500, [0, 1])

var student2 = new Student("Saad", "Khan", 12, 3500, [2, 3])

var student3 = new Student("Umer", "Ikhlas", 13, 1000, [4, 5])


// console.log(student1)
// console.log(student2)
// console.log(student3)

var annualFee = student1.calcFee(0.8)
console.log(annualFee)

localStorage.setItem('myFee', annualFee)






