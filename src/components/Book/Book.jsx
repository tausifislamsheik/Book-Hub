import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, image, bookName, author, rating, category, tags} = book;
    return (
        <Link to={`/books/${bookId}`}>
           <div class="card bg-base-100 border border-gray-200 p-5">
            <figure className="bg-gray-100 py-6">
                <img
                src={image}
                className="h-50 rounded-xl"
                alt={bookName} />
            </figure>
            <div class="card-actions justify-end pt-4">
                    {
                        tags.map((tag, idx) => <p key={idx} class="badge badge-outline text-[#23BE0A] bg-[#23BE0A0D] rounded-full">{tag}</p>
                    )
                    }
            </div>
            <div class="card-body px-0">
                <h2 class="text-2xl font-semibold">
                {bookName}
                </h2>
                <p>By: <span className="font-semibold text-gray-400">{author}</span></p>
                <hr className="text-gray-300" />
            </div>
                <div className="flex text-gray-500 justify-between font-semibold w-auto">
                    <p>{category}</p>
                    <p className="flex gap-2 items-center">{rating}<FaRegStar className="text-lg" /></p>

                </div>
        </div>
        </Link>
    );
};

export default Book;