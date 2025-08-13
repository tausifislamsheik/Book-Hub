// Read list section

const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read-list');
    if(storedReadList){
        const readListStr = JSON.parse(storedReadList);
        return readListStr;
    }else{
        return [];
    }

}

const addReadListToLS = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'Already existed')
    }else{
       storedList.push(id)
       const storedListStr = JSON.stringify(storedList)
       localStorage.setItem('read-list', storedListStr)
    }
}





// Wishlist section


const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem('wishlist')
    if(storedWishlist){
        const storedWishlistStr = JSON.parse(storedWishlist);
        return storedWishlistStr;
    }else{
        return [];
    }
};


const addWishlistToLS = (id) =>{
    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)){
        console.log(id, 'Already existed')
    }else{
        storedWishlist.push(id);
        const storedWishlistData = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistData)
    }
}


export {addReadListToLS,addWishlistToLS}