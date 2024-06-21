import React from 'react';
// Assuming BookCard component is imported correctly
import './store.css'; 
import BookCard from '../../components/bookcard/BookCard';
const Store = () => {
  // Example list of books
  const books = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1kRj1nnXtv-dZUhSj2n_xUDvtQFf5MzNXXcZouIU1FU_hY4A',
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 300.99,
      description:'Follows the spirited Elizabeth Bennet as she navigates societal expectations, love, and misunderstandings with the proud Mr. Darcy in 19th century England.'
    },
    {
      id: 2,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3yRFcprRj7VwNBTloHp_UtamD1aidNpP4J-Fma8i2W39tDrisETol4r7Xb_gk_ZG6ndyAShF37NQ5LASATiKJJv10K1UjcTUXwAenLkYS&usqp=CAE',
      name: 'IT ENDS WITH US',
      author: 'Colleen Hoover',
      price: 299.0,
      description : 'Lily, driven by ambition and love, navigates a turbulent path between her new love Ryle and a resurfacing past with Atlas, testing her hearts resilience and the true meaning of love.'
    },
    {
        id:3,
        image:'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg',
        name: 'To Kill a Mockingbird',
        author:'Harper Lee',
        price: 600,
        description:'A lawyer in the racially divided South defends a wrongly accused black man.'
    },
    {
        id:4,
        image:'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        name: '1984',
        author:'George Orwell',
        price: 750,
        description:'A dystopian novel depicting a totalitarian society controlled by Big Brother.'
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX1000_.jpg',
        name: 'The Great Gatsby',
        author:'F. Scott Fitzgerald',
        price: 650,
        description:'A tale of wealth, ambition, and unrequited love during the Roaring Twenties.'
    },
    {
        id:6,
        image:'https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg',
        name: 'The Catcher in the Rye',
        author:'J.D. Salinger',
        price: 700,
        description:'A teenage boys journey through alienation and rebellion in New York City.'
    },
    {
        id:7,
        image:'https://covers.storytel.com/jpg-640/9781515459200.899cf7d9-dc06-476c-8ba2-dbdf5cac6176?optimize=high',
        name: 'To the Lighthouse',
        author:'Virginia Woolf',
        price: 750,
        description:' A familys introspective journey to a lighthouse, exploring the passage of time and relationships.'
    },
    {
        id:8,
        image:'https://m.media-amazon.com/images/I/81oAEEwxBWL._AC_UF1000,1000_QL80_.jpg',
        name: 'One Hundred Years of Solitude',
        author:' Gabriel Garcia Marquez',
        price: 800,
        description:'Generations of the Buendia family in a magical realist exploration of Latin American history.'
    },
    {
        id:9,
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg',
        name: 'The Hobbit',
        author:'J.R.R. Tolkien',
        price: 900,
        description:'Bilbo Baggins embarks on an unexpected adventure with dwarves and a wizard.'
    },
    {
        id:10,
        image:'https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg',
        name: 'The Handmaids Tale',
        author:'Margaret Atwood',
        price: 870,
        description:'In a dystopian future, women are subjugated and a handmaid seeks freedom.'
    }
  ];

  return (
    <div className="store-page">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {books.map((book) => (
            <BookCard
                key={book.id}
                image={book.image}
                name={book.name}
                author={book.author}
                price={book.price}
                description={book.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
