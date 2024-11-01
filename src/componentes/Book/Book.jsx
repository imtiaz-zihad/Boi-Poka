const Book = ({ book }) => {
  const { bookId, bookName, author, image,tags,category,rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-2xl">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img src={image} className="h-[166px] " alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="card-actions text-green-300">
          <div className="badge badge-outline ">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="flex justify-between">
            <div><h3>{category}</h3></div>
            <div className="flex">
                <h4>{rating}</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
