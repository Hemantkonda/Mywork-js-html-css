const book = [

    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 2001},
    {title: "Pride and Prejudice", author: "J.D. Salinger", year: 2009},
    {title: "The Hobbit", author: "J.D. Salinger", year: 2010},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 2018},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 2002},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1990},
    {title: "1984", author: "J.D. Salinger", year: 2022},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1999}
];

// filtering array and applying condition by year of book
const filterBook = book.filter(book=> book.year >= 2010).map(book=>{
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
    };
});

console.log(filterBook);