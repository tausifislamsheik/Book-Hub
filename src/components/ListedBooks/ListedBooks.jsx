import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToLS';
import ReadBooksList from '../ReadBooksList/ReadBooksList';


const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() =>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList);
    }, [])
    return (
        <div>
            <div className='text-center my-10'>
                 <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white px-5">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Number of Pages</a></li>
                        <li><a></a></li>
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
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;