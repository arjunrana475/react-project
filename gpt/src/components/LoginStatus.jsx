import { useState } from "react"

export default function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <div>
          {!isLoggedIn ?
              <div>
                  <h1 className="py-4 mb-4 mt 4 flex justify-center font-semibold">Logged Out</h1>
                  <button className="w-full mt-5 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition" onClick={()=>setIsLoggedIn(true) }> Login</button>
              </div>
              :
              <div>
                  <h1 className="py-4 mb-4 mt 4 flex justify-center font-semibold">Welcome ,Arjun</h1>
                  <button className="w-full mt-5 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition" onClick={()=>setIsLoggedIn(false)}> Logout</button>
              </div> }
      
    </div>
  )
}
