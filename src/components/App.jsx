// src/components/App.jsx

import { GiAbstract023 } from "react-icons/gi";
import { GiAgave } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";

import Product from "./Product";
import Mailbox from "./mail-component/Mail";
// import { Mailbox } from "./mail-component/Mail";
import BookList from "./book-list-component/Book-list";
import { Alert } from "./alert-component/Alert";

// ? Якщо об'єкти масиву не мають унікальних значень властивостей
// ? і колекція не редагується, можна використовувати індекси масиву.

// const favBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
// ];

const favBooks = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" },
];

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Mailbox name="User" unreadMessages={[]} />
      <Mailbox name="Rex" unreadMessages={[3, 2]} />
      <>
        <h1>Books of the week</h1>

        <BookList books={favBooks} />
        <BookList books={favBooks} />
      </>

      <ul>
        <li>
          <Alert>
            <GiAbstract023 />
            Default alert message
          </Alert>
        </li>
        <li>
          <Alert>
            <GiAbstract023 />
            Second default alert message
          </Alert>
        </li>
        <li>
          <Alert variant="info">
            Would you like to browse our recommended products?
          </Alert>
        </li>
        <li>
          <Alert variant="success" outlined>
            <GiAnvilImpact />
            Payment received, thank you for your purchase
          </Alert>
        </li>
        <li>
          <Alert variant="error" elevated>
            There was an error during your last transaction
          </Alert>
        </li>
        <li>
          <Alert variant="warning" outlined elevated>
            <GiAgave />
            Please update your profile contact information
          </Alert>
        </li>
      </ul>
    </>
  );
}
