export const lessons = [
	{
		name: "1. Variables",
		description:
			"Variables are used to store values. You can declare a variable with the let or const keywords, like this: let x; const y = 10; The difference between let and const is that let is block-scoped and can be reassigned, while const is block-scoped and cannot be reassigned.",
	},
	{
		name: "2. Data Types",
		description:
			"JavaScript has several data types, including numbers, strings, booleans, and objects.",
	},
	{
		name: "3. Numbers",
		description:
			"Numbers: Numbers can be integers or floating-point values. You can perform arithmetic operations with numbers, like this: let x = 10; let y = 20; let z = x + y; // z is now 30",
	},
	{
		name: "4. Strings",
		description:
			'Strings are sequences of characters, and can be declared with single or double quotes. You can oncatenate strings with the + operator, like this: let firstName = "John"; let lastName = "Doe"; let fullName = `${firstName} ${lastName}`; // fullName is now "John Doe" Note that the ${} syntax is called template literals, which allows you to include variables within a string without having to use string concatenation.',
	},
	{
		name: "5. Boolean",
		description:
			"Booleans represent true or false values. You can use comparison operators to create boolean values, like this: let x = 10; let y = 20; let z = x < y; // z is now true",
	},
	{
		name: "6. Objects",
		description:
			'Objects are collections of key-value pairs. You can create an object like this: let person = { firstName: "John", lastName: "Doe", age: 30 }; You can access the values in an object using dot notation or bracket notation, like this: console.log(person.firstName); // "John" console.log(person["lastName"]); // "Doe"',
	},
	{
		name: "7. Functions",
		description:
			'Functions are blocks of code that can be executed when called. You can define a function using the arrow function syntax, like this: const greet = (name) => { console.log(`Hello, ${name}`); } greet("John"); // prints "Hello, John" Note that the arrow function syntax is shorter and more concise than the traditional function syntax.',
	},
];
