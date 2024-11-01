import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../utility/addToDb';

const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)
    
    const data = useLoaderData();
    
    const book = data.find(book => book.bookId === id)
    

    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead =(id) =>{
        addToStoreReadList(id)
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='flex gap-4'>
      <button 
      onClick={() =>handleMarkAsRead(bookId)}
       className="btn btn-outline btn-accent">Mark as Read</button>
      <button className="btn btn-accent">Add to WishList</button>
      </div>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <img src={image} alt="" />
      </form>
    </div>
  </div>
</div>
    );
};

export default BookDetail;