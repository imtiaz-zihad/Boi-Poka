import { toast } from "react-toastify";

const getStoreReadList = () =>{
    const storereadListStr = localStorage.getItem('read-list');
    if (storereadListStr) {
        const storeList = JSON.parse(storereadListStr);
        return storeList
    }else{
        return [];
    }
}

const addToStoreReadList = (id) =>{
    const storeList  = getStoreReadList();
    if (storeList.includes(id)) {
        
    }else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list',storeListStr);
        toast('Book added to your read list')
    }
}

export {addToStoreReadList, getStoreReadList}