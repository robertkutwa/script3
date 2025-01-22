console.log("Hello World")

const book = {
    title: "48 Laws of Power",
    author: {
        firstName: "Robert",
        lastName: "Greene"
    },
    pages: 452,
    isPublished: true
};

console.log("Title:", book.title);

console.log("Author:", book.author); 

console.log("Author's Name:", book.author.firstName + " " + book.author.lastName); 

// Array of colors

const colors = ["indigo", "goldenRod", "blue", "cyan", "purple"];

console.log("Colors Array:", colors);

console.log("First Color:", colors[0]);

console.log("Third Color:", colors[2]);

console.log("Last Color:", colors[colors.length - 1]);

const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, isPublished: true },
    { title: "1984", author: "George Orwell", pages: 328, isPublished: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, isPublished: true }
];

console.log("Second Book Title:", library[1].title);

console.log("Third Book Author:", library[2].author);

console.log("second book author:", library[1].author);

console.log("First Book Pages:", library[0].pages);

console.log("Third Book isPublished:", library[2].isPublished);


const movies = [
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Crime" },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, genre: "Drama" },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" }
];

console.log("First Movie Title:", movies[0].title);

console.log("Second Movie Director:", movies[1].director);

console.log("Third Movie Year:", movies[2].year);

console.log("First Movie Genre:", movies[0].genre);