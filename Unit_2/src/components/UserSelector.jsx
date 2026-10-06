import { useState } from "react";
import useFetch from '../hooks/useFetch';

export default function UserSelector() {
    const [userId, setUserId] = useState(1);
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const { data, loading, error } = useFetch(url);
    
    if (loading) {
        return (
            <h1>Loading....</h1>
        )
    }
    if (error.trim()!=="") {
        return (
            <h1>{error }</h1>
        )
    }
    else return (
        
        <div>
            <button onClick={() => setUserId(1)}>Aman</button>
            <button onClick={() => setUserId(2)}>Rahul</button>
            <button onClick={() => setUserId(3)}>Amit</button>
                <div key={data.id }>
                    <p>{ data.name}</p>
                    <p>{data.email }</p>
                </div>
    </div>
      )
}
