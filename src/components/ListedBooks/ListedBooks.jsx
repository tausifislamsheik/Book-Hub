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