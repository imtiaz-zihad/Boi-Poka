import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState([])

  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    //worst way

    //
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  const handleSort = sortType =>{
    setSort(sortType);

   if (sortType === 'Num. of pages') {
    const sortedReadList = [...readList].sort((a,b) =>a.totalPages - b.totalPages);
    setReadList(sortedReadList)
   }

   if (sortType === 'Ratings') {
    const sortedReadList = [...readList].sort((a,b) =>a.rating - b.rating);
    setReadList(sortedReadList)
   }

  }

  return (
    <div>
      <h3 className="text-3xl my-8">ListedBooks </h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
         {
         sort ? `Sort by: ${sort}`  : ' Sort by'
         }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() =>handleSort('Ratings')}>
            <a>Rating</a>
          </li>
          <li>
            <a onClick={() =>handleSort('Num. of pages')}>Num. of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i Read :{readList.length}</h2>
          <h2>
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;