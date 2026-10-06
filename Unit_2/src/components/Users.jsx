import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Users() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );
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
          {data.map((x) => (
              <div key={x.id }>
                  <p>{ x.name}</p>
                  <p>{x.email }</p>
              </div>)
          )}
      
    </div>
  )
}
