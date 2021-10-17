// Book Lender Service


const BookLender = function (name) {
	const lenderName = name;
	const books = [];
	const users = [];

	function getLenderName() {
		return lenderName;
	}

	// user methods
	function getUsers() {
		console.log(users);
		return users;
	}

	function addUser(user) {
		users.push(user);
		console.log("New User Added!");
		return users;
	}

	// Book methods
	function getBooks() {
		return books;
	}

	function addBook(book) {
		books.push(book);
		console.log("New Book Added!");
	}

	function borrowBook(user, book) {
		for (let i = 0; i < users.length; i++) {
			if (user == users[i].name) {
				for (let i = 0; i < books.length; i++) {
					if (book.toLowerCase() == books[i].toLowerCase()) {
						let bookToBeBorrowed = books.splice(i, 1);
						let borrowedBookValue =
							bookToBeBorrowed[bookToBeBorrowed.length - 1];
						return borrowedBookValue;
					}
				}
			}
		}
	}

	function retrieveBook(user, book) {
		for (let i = 0; i < this.users.length; i++) {
			if (user == this.users[i].name) {
				books.push(book);
				console.log("Book returned!");
			}
		}
	}

	return {
		getLenderName: getLenderName,
		getUsers: getUsers,
		addUser: addUser,
		getBooks: getBooks,
		addBook: addBook,
		borrowBook: borrowBook,
		retrieveBook: retrieveBook,
	};
};

const bookLender1 = new BookLender("Mariam Bookshop");

bookLender1.addUser("mary");
bookLender1.addUser("john");
bookLender1.addUser("rita");
bookLender1.addUser("mark");
bookLender1.addBook("hamlet");

bookLender1.getUsers();
console.log(bookLender1.getLenderName());
console.log(bookLender1.getBooks());

// User Constructor
// function User(name) {
// 	(this.name = name), (this.books = []);
// }

// User.prototype = {
// 	borrowBook: function (book, lender) {
// 		let Users = lender.getUsers();
// 		let bookValue = lender.borrowBook(this.name, book);
// 		Users.forEach((user) => {
// 			if (Users.includes(user)) {
// 				if (bookValue !== undefined) {
// 					this.books.push(bookValue);
// 					console.log("Book borrowed!", this.books);
// 				} else {
// 					console.log("This book is unavailable.");
// 				}
// 			} else {
// 				console.log("user is not registered!");
// 			}
// 		});
// 	},

// 	returnBook: function (book, lender) {
// 		let bookIndex = -1;
// 		for (let i = 0; i < this.books.length; i++) {
// 			if (book.toLowerCase() == this.books[i].toLowerCase()) {
// 				bookIndex = this.books.indexOf(this.books[i]);
// 			}
// 		}
// 		if (bookIndex != -1) {
// 			let bookReturned = this.books.splice(bookIndex, 1);
// 			let bookReturnedValue = bookReturned[bookReturned.length - 1];
// 			lender.retrieveBook(this.name, bookReturnedValue);
// 			console.log(bookToBeReturnedValue);
// 		} else {
// 			console.log("User does not have the book!");
// 		}
// 	},
// };

// 
//Creating library
// console.log(library1.getUsers())

//Adding books to library
library1.addBook("Hamlet");
library1.addBook("Machbeth");
library1.addBook("Goosebumps");
library1.addBook("The Testament");
library1.addBook("Den of Thieves");
library1.addBook("Purple Hybiscus");
library1.addBook("Animal Farm");
library1.addBook("The Mill");
// console.log(library1.getBooks())

//Adding users to library
library1.addUser(user1);
library1.addUser(user2);
library1.addUser(user3);
console.log(library1.getUsers());

//Users borrowing books
user1.borrowBook("Hamlet", library1);
user2.borrowBook("Machbeth", library1);
user2.borrowBook("Hamlet", library1);
user3.borrowBook("goosebumps", library1);
user2.borrowBook("animal farm", library1);
user4.borrowBook("purple hybiscus", library1);

// //Users returning books
user1.returnBook("hamlet", library1);
user2.returnBook("hamlet", library1);
