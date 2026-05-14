// Variable declarations
let name = "Maria";
let age = 25;
const birthYear = 1999;
let myAge = age;
console.log("Age in days:", myAge * 365);
console.log(" Age in hours:", myAge * 365 * 24);
console.log(" Year you'll turn 100:", birthYear + 100);


// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;

// Variable Practice
let myName = "Maria";
let isStudent = true;
let favoriteColors = ["blue", "green", "purple"];
let today = new Date();

console.log("My name is: " + myName);
console.log("My age is: " + myAge);
console.log("Am I a student: " + isStudent);
console.log("My favorite colors: " + favoriteColors);
console.log("Today's date: " + today);

console.log("=== Task 7.2: Number Operations ===");


let a = 10;
let b = 3;

console.log(a + b );
console.log(a - b );
console.log(a * b );
console.log(a / b ); // Division
console.log(a % b ); // Modulus
console.log(a ** b ); // Exponentiation


let count = 0;
console.log("count starts at:",count);
count++;
console.log("After count++:",count);
count--;
console.log("After count--:",count);

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alex"));
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Maria"));
// Exercise 2 - Build These Functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName.split(" ").map(word => word[0]).join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(5, 10));
console.log(celsiusToFahrenheit(100));
console.log(isEven(4));
console.log(getInitials("John Doe"));
console.log(reverseString("Maria"));
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log(calculateTip(100));
console.log(calculateTip(100, 20));
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getGrade(95)); // should print A
console.log(getGrade(82)); // should print B
console.log(getGrade(73)); // should print C
console.log(getGrade(65)); // should print D
console.log(getGrade(50)); // should print F
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
console.log(getDayName(0)); // Sunday 
console.log(getDayName(3)); // Wednesday
console.log(getDayName(6)); // Saturday
console.log(getDayName(7)); // Invalid day
console.log("--- 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("--- Even numbers from 1 to 50 ---");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
console.log("--- FizzBuzz from 1 to 15 ---");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("--- Star Triangle ---");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:    
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5)); // 15
console.log(calculate(10, "-", 5)); // 5
console.log(calculate(10, "*", 5)); // 50
console.log(calculate(10, "/", 5)); // 2
console.log(calculate(10, "/", 0)); // Error: Cannot divide by zero
console.log(calculate(10, "%", 3)); // 1
console.log(calculate(2, "**", 3)); // 8
console.log(calculate(10, "^", 5)); // Invalid operator
console.log("--- Arrays Exercise ---");

// 1. Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true,null];

// 2. Accessing elements
console.log("First fruit:'", fruits[0]); // apple
console.log("Length of fruits:", fruits.length); // 3

// 3. Modifying arrays
fruits.push("grape"); // Add to end 'n ["apple", "banana", "orange", "grape"]
console.log("After push:", fruits);

fruits.unshift("mango"); // Add to start ["mango", "apple", "banana", "orange", "grape"]
console.log("After unshift:", fruits);

fruits.pop(); // Remove from end ["mango", "apple", "banana", "orange"]
console.log("After pop:", fruits);  

fruits.shift(); // Remove from start ["apple", "banana", "orange"]
console.log("After shift:", fruits);
console.log("--- Array Methods Exercise ---");

const numbers2 = [1, 2, 3, 4, 5];

// 1. Double all numbers in an array 'n use map
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// 2. Filter out negative numbers 'n use filter
const withNegatives = [-3, 0, 5, -1, 8, 2];
const positives = withNegatives.filter(num => num >= 0);
console.log("Positive only:", positives); // [0, 5, 8, 2]

// 3. Find the first number greater than 10 'n use find
const nums2 = [5, 8, 12, 3, 15];
const firstBig = nums2.find(num => num > 10);
console.log("First number > 10:", firstBig); // 12

// 4. Calculate the product of all numbers 'n use reduce
const product = numbers2.reduce((acc, num) => acc * num, 1);
console.log("Product:", product); // 120 because 1*2*3*4*5 = 120
console.log("--- Objects Exercise ---");

// 1. Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        city: "New York",
        Country: "USA"
    }
};

// 2. Accessing properties - 2 ways
console.log("First name:", person.firstName); // Dot notation
console.log("Last name:", person["lastName"]); // Bracket notation
console.log("City:", person.address.city); // Nested property

// 3. Modifying properties
person.age = 31; // Change existing
person.email = "john.doe@example.com"; // Add new property
delete person.isStudent; // Remove property

console.log("Updated person object:", person);  
console.log("--- Object Methods Exercise ---");

const calculator = {
    // 1. Traditional function syntax
    add: function(a, b) {
        return a + b;
    },

    // 2. Shorthand method syntax - cleaner version
    subtract(a, b) {
        return a - b;
    },

    // 3. Arrow function syntax
    multiply: (a, b) => a * b,
};

// Calling the methods
console.log("Add: 5+ 3", calculator.add(5, 3));
console.log("Subtract: 10 - 4", calculator.subtract(10, 4));
console.log("Multiply: 6 * 7", calculator.multiply(6, 7));
console.log("--- Object Iteration Exercise ---");

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// 1. Get all keys 'n returns an array of property names
console.log("Keys:", Object.keys(scores));
 // ["math", "english", "science"]

// 2. Get all values 'n returns an array of  values
console.log("Values:", Object.values(scores));
// [95, 88, 92]

// 3. Get all entries 'n returns an array of [key, value] pairs
console.log("Entries:", Object.entries(scores));
// [["math", 95], ["english", 88], ["science", 92]]

// 4. Loop through with for...of destructuring
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
const average = total / Object.values(scores).length;
console.log("Average score:", average);
console.log("--- Array of Objects Exercise ---");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "Math" },
    { name: "Bob", age: 20, grade: 72, major: "Physics" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Biology" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map(student => student.name);
console.log("1. Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("2. Students with grade > 80:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("3. Charlie:", charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("4. Average grade:", avgGrade.toFixed(2));

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("5. CS majors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("6. Sorted by grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("7. Has Top Student:", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("8. All Passing:", allPassing);

const gradeTracker = {
    students: [],
    
    addStudent(name, grades) {
        const existingStudent = this.getStudent(name);
        if (existingStudent) {
            existingStudent.grades = grades;
            return;
        }
        this.students.push({ name, grades });
    },
    
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = Object.values(student.grades);
        if (grades.length === 0) return null;
        return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    },
    
    getSubjectAverage(subject) {
        const grades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);
        if (grades.length === 0) return null;
        return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, student) => {
            const avg = this.getStudentAverage(student.name);
            const topAvg = this.getStudentAverage(top.name);
            return avg > topAvg ? student : top;
        });     
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            const avg = this.getStudentAverage(student.name);
            return avg < 70;
        });
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F"; 
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student ${name} not found.`;

        let report = `Report Card for ${student.name}\n`;
        report += "--------------------------\n";

        for (let subject in student.grades) {
            const grade = student.grades[subject];
            const letter = this.getLetterGrade(grade);
            report += `${subject}: ${grade} (${letter})\n`;
        }

        const avg = this.getStudentAverage(name);
        if (avg === null) return report + "Average: Not available\n";
        const avgFormatted = avg.toFixed(2);
        report += `--------------------------\nAverage: ${avgFormatted} (${this.getLetterGrade(avg)})\n`;
        return report;
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

const aliceAvg = gradeTracker.getStudentAverage("Alice");
const safeAliceAvg = aliceAvg ? aliceAvg.toFixed(2) : "Not found";
console.log("Alice average:", safeAliceAvg);
const mathAvg = gradeTracker.getSubjectAverage("math");
const safemathAvg = mathAvg ? mathAvg.toFixed(2) : "Not found";
console.log("Math average:", safemathAvg);
console.log("Top student", gradeTracker.getTopStudent());
console.log("Struggling students",gradeTracker.getStrugglingStudents().map(s => s.name));      
console.log(gradeTracker.generateReportCard("Alice"));