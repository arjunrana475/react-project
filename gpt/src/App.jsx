import { useState } from 'react'
import Profile from './components/Profile'
import Card from './components/Card'

function App() {
  const [skills, setSkills] = useState(["Java", "JavaScript", "MongoDB"])
  const [editId, setEditId] = useState(null);
  function addSkill() {
    setSkills(prev => ([
      ...prev,"Node.js"
    ]))
  }
          
  function handleDelete(id) {
    setSkills(skills.filter((skill,index) => {
      return index!==id
    }))
  }
  function handleEdit(id) {
    setSkills(skills.map((skill,index) => {
      if (index === id) return "React"
      else return skill
    }))
  }
  // const [user, setUser] = useState({
  //   name: "Arjun",
  //   age: 21,
  //   city:"Delhi",
  // })

  // function handleName() {
  //   setUser(prev=>({
  //     ...prev,name:"Rahul"
  //   }))
  // }
  // function handleAge() {
  //   setUser(prev=>({
  //     ...prev, age: prev.age+1
  //   }))
  // }
  // function handleCity() {
  //   setUser(prev=>({
  //     ...prev,city:"Mumbai"
  //   }))
  // }
  return (
    <>
      {/* <Profile name="Arjun" age={20} />
      <Profile name="Rahul" age={20} />
      */}
   {/* <div className='flex flex-col md:flex-row gap-4'>
      <Card>
        <h1 className='text-lg md:text-2xl'>Profile</h1>
        <p>MERN - B.Tech CSE</p>
      </Card>
      <Card>
        <h1>Project</h1>
        <p>MERN - Airbnb clone</p>
      </Card>
      <Card>
        <h1>Learning</h1>
        <p>React + Tailwind</p>
        </Card>
        </div> */}
      
      {/* <div className="p-6 rounded-lg  m-4 shadow-lg bg-gray-100">
        <h1>Clicked : {count}</h1>
        <button className='p-4 m-4 bg-blue-500 hover:bg-blue-600' onClick={()=>handleClick()}>Increase Count</button>
      </div> */}
      {/* 
      */}

      <div>
        <ul>
          {skills.map((skill, index) => 
            <li key={index}>{skill} <button className='p-4 m-4 px-6 bg-green-500 hover:bg-green-600' onClick={() => handleEdit(index)}>Edit</button> <button className='p-4 m-4 px-6 bg-red-500 hover:bg-red-600' onClick={()=>handleDelete(index)}>Delete</button></li>
          )}
        </ul>
      </div>
      <button className='p-4 m-4 px-6 bg-blue-500 hover:bg-blue-600' onClick={addSkill}>add</button>
    </>
  )
}

export default App
