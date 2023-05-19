const books = [
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2082 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 },
    { title: "The Help", author: "Kathryn Stockett", year: 2009 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    { title: "The Road", author: "Cormac McCarthy", year: 2010 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year
    };
  });
  
  console.log(filteredBooks);
  
  

