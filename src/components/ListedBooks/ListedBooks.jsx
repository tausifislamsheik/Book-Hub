import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../../Utility/addToLS';
import ReadBooksList from '../ReadBooksList/ReadBooksList';
import WishlistBooks from '../WishlistBooks/WishlistBooks';


const ListedBooks = () => {
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('');
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() =>{
        setLoading(true);
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList);
        setLoading(false);
    }, [allBooks]);

    useEffect(() =>{
        const storedWishList = getStoredWishlist();
        const storedWishListInt = storedWishList.map(id => parseInt(id))
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId))
        setWishList(wishBookList);
    }, [allBooks]);

    const handleSort = sortType =>{
        setSort(sortType);

        if(sortType === 'Number of Pages'){
            const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages)
            const sortedWishList = [...wishList].sort((a,b) => a.totalPages - b.totalPages)
            setReadList(sortedReadList)
            setWishList(sortedWishList)
        }

        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating)
            const sortedWishList = [...wishList].sort((a,b) => a.rating - b.rating)
            setReadList(sortedReadList)
            setWishList(sortedWishList)
        }

        if(sortType === 'Publisher year'){
            const sortedReadList = [...readList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
            const sortedWishList = [...wishList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
            setReadList(sortedReadList)
            setWishList(sortedWishList)
        }
    }


   if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading books data...</p>
        </div>
      </div>
    );
  }


    return (
        <div>
            <div className='text-center my-10'>
                 <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white px-5">
                        {sort ? `Sort By: ${sort}`: 'Sort By'} 
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('Number of Pages')}><a>Number of Pages</a></li>
                        <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                        <li onClick={() => handleSort('Publisher year')}><a>Publisher year</a></li>
                    </ul>
                 </div>
            </div>
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                {
                    readList.map(readBooksList => <ReadBooksList readBooksList={readBooksList}></ReadBooksList>)
                }
                </TabPanel>
                <TabPanel>
                {
                    wishList.map(wishBookList => <WishlistBooks wishBookList={wishBookList}></WishlistBooks>)
                }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;