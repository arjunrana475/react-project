import { useState } from 'react'

export default function LoginPage() {

    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
        city:""
    })

    const [errors, setErrors] = useState({});
    const [show, setshow] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        if(user.name.trim()==="")  newErrors.name="Name is required"
        if (user.age < 18) newErrors.age = "You are too young"
        if (user.email.trim() === "") newErrors.email = "Email is required"
        if (user.city.trim() === "") newErrors.city = "City is required"
        setErrors(newErrors);
        setshow(Object.keys(newErrors).length === 0);
    }

    function handleChange(e) {
        setUser(prevUser => ({
            ...prevUser,[e.target.name]:e.target.value
        }))
    }
    
    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center py-10 px-4">
            
           
            <form className="w-full max-w-xl" onSubmit={handleSubmit}>

                <label htmlFor="name">Enter your name : </label>

                <input type="text" id="name" name="name" className="mb-4 flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    value={user.name} onChange={handleChange} />
                <div>
                    {errors.name && (
                        <p className="text-2xl font-bold text-red-800">{errors.name}</p>
                    )}
                </div>

                <br />

                <label htmlFor="age">Enter your age : </label>

                <input type="number" id="age" name="age" className=" mb-4 flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    value={user.age} onChange={handleChange} />
                <div>
                    {errors.age && (
                        <p className="text-2xl font-bold text-red-800">{errors.age}</p>
                    )}
                </div>

                <label htmlFor="email">Enter your Email : </label>

                <input type="email" id="email" name="email" className=" mb-4 flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    value={user.email} onChange={handleChange} />
                <div>
                    {errors.email && (
                        <p className="text-2xl font-bold text-red-800">{errors.email}</p>
                    )}
                </div>

                <label htmlFor="city">Enter your city : </label>

                <input type="text" id="city" name="city" className=" mb-4 flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    value={user.city} onChange={handleChange} />
                <div>
                    {errors.city && (
                        <p className="text-2xl font-bold text-red-800">{errors.city}</p>
                    )}
                </div>

                <button
                    className="px-4  py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                >
                    Submit
                </button>
            </form>
            {
                show && 
                <div>
                        <h1 className="text-xl font-medium text-gray-800">name: {user.name}</h1>
                        <h1 className="text-xl font-medium text-gray-800">age:{ user.age}</h1>
                        <h1 className="text-xl font-medium text-gray-800">Email:{ user.email}</h1>
                        <h1 className="text-xl font-medium text-gray-800">city:{ user.city}</h1>
                </div>
            }
        </div>
    )
}
