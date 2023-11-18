import {useEffect,useState} from 'react';
import { USERS_URL } from '../constants';

const useGetUsers = ()=>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const getUsers=(USERS_URL)=>{
            fetch(USERS_URL)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setUsers(data);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        getUsers(USERS_URL);
    },[])
    return [users,setUsers];
}

export default useGetUsers;