import { GrLocation } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";

const WishlistBooks = ({wishBookList}) => {
    const {image, bookName, author, tags, category, rating, yearOfPublishing, publisher, totalPages} = wishBookList;
        return (
            <div className="hero border-2 border-gray-200 justify-start rounded-2xl mb-20 mt-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="bg-gray-100 rounded-xl">
                        <img
                        src={image}
                        className="lg:h-60 rounded-lg p-7"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-xl lg:text-3xl font-bold">{bookName}</h1>
                        <p className="font-semibold text-gray-500">By: {author}</p>
                        <div className="lg:flex gap-3">
                            <span className="font-bold mr-3">Tag</span>
                            {
                            tags.map((tag, idx) => <p key={idx} class="badge badge-outline text-[#23BE0A] bg-[#23BE0A0D] rounded-full border-none font-bold">#{tag}</p>
                             )
                            }
                            <p className="text-gray-400 mt-2 lg:mt-0 flex items-center gap-1"><GrLocation className="text-xl" />Year of Publishing: {yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className="text-gray-400 flex items-center gap-1"><BsPerson className="text-xl" />Publisher: {publisher}</p>
                            <p className="text-gray-400 flex items-center gap-1"><MdOutlineContactPage className="text-xl" /> Pages: {totalPages}</p>
                        </div>
    
                        <hr className="border-gray-200 w-full" />
                        
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <p className="text-[#328EFF] bg-[#328EFF26] px-3 py-2 rounded-full">Category: {category}</p>
                        <p className="text-[#FFAC33] bg-[#FFAC3326] px-3 py-2 rounded-full">Rating: {rating}</p>
                        <button className="btn bg-[#23BE0A] text-white rounded-full">View Details</button>
                        </div>               
                        <div >
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default WishlistBooks;