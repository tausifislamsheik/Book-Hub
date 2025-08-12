import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    
    const book = data.find(book => book.bookId === id)
    const {image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;


    return (
        <div className="hero min-h-screen border-2 border-gray-200 rounded-2xl my-20 lg:px-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="bg-base-500">
                    <img
                    src={image}
                    className="lg:max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="space-y-3">
                    <h1 className="text-3xl lg:text-5xl font-bold">{bookName}</h1>
                    <p className="font-semibold text-gray-500">By: {author}</p>
                    <hr className="border-gray-200" />
                    <p className="font-semibold text-gray-500">{category}</p>
                    <hr className="border-gray-200" />
                    <p className="font-bold">Review: <span className="font-medium text-gray-400">{review}</span></p>
                    <div className="gap-3">
                        <span className="font-bold mr-3">Tag</span>
                        {
                        tags.map((tag, idx) => <p key={idx} class="badge badge-outline text-[#23BE0A] bg-[#23BE0A0D] rounded-full border-none font-bold">#{tag}</p>
                         )
                        }
                    </div>
                    <hr className="border-gray-200" />
                    <p className="font-semibold text-gray-400">Number of Pages: <span className="text-black">{totalPages}</span></p>
                    <p className="font-semibold text-gray-400">Publisher: <span className="text-black">{publisher}</span></p>
                    <p className="font-semibold text-gray-400">Year of Publishing: <span className="text-black">{yearOfPublishing}</span></p>
                    <p className="font-semibold text-gray-400">Rating: <span className="text-black">{rating}</span></p>
                    <div >
                        <button className="btn btn-outline border-gray-300 mr-4">Read</button>
                        <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;