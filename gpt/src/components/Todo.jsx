import { useState } from 'react';

export default function Todo() {

    const [task, setTask] = useState({
        name: "",
        completed: false,
    });
    const [selected, setSelected] = useState("all");
    const [editValue, setEditValue] = useState("");
    const [editId, setEditId] = useState(null);

    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "Learn Java",
            completed: false,
        },
        {
            id: 2,
            name: "Wake Up",
            completed: false,
        },
        {
            id: 3,
            name: "Practice DSA",
            completed: false,
        },
    ])

    const Done = todos.filter((todo) => {
        return todo.completed
    })
    const Remaining = todos.filter((todo) => {
        return !todo.completed
    })

    function handleAddTask() {
        const newTodo = {
            id: Date.now(),
            name: task.name,
            completed:false,
        }
        setTodos(prevTask => ([
            ...prevTask,newTodo
        ]))
        setTask({
            name: '',
            completed:false,
        });
     }

    function handleChange(e) {
        setTask(prevTask => ({
            ...prevTask,
            [e.target.name]: e.target.value
        }))
    }

    function handleCheck(id) {
        setTodos(prevTodos =>
            prevTodos.map(todo=> {
                if (todo.id===id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            })
        );
    }
    function handleDelete(id) { 
        setTodos(prevTodos => prevTodos.filter(todo => todo.id!==id)
        )
    }
    
    function handleEdit(id) {
        const todo = todos.find(todo=>todo.id===id)
        setEditId(id);
        setEditValue(todo.name);
    }
    
    function handleEditValueChange(e) {
        setEditValue(e.target.value)
    }
    
    function Save(id) {
        if (editValue.trim() === "") return;
        setTodos(prevTodos =>
            prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        name: editValue
                    };
                } else {
                    return todo;
                }
            })
        );
        setEditId(null);
    }
    
    let filteredTodos;

    if (selected === "all") {
        filteredTodos = todos;
    } else if (selected === "done") {
        filteredTodos = Done;
    } else
        filteredTodos = Remaining;

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center py-10 px-4">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
                {/* heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
                        TODO
                    </h1>

                    <p className="mt-2 text-sm font-medium text-slate-500">
                        Manage your daily tasks and stay productive
                    </p>
                </div>
                {/* input section */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold text-slate-700">
                        Add New Task
                    </p>

                    <div className="flex gap-3">
                        <input
                            className="flex-1 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            placeholder="What do you need to do?"
                        />

                        <button
                            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
                            onClick={handleAddTask}
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                {/* 3 buttons  */}
                <div className="mb-8 flex gap-2 rounded-xl bg-slate-100 p-1">
                    <button
                        className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${selected === "all"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                            }`}
                        onClick={() => setSelected("all")}
                    >
                        All Tasks
                    </button>

                    <button
                        className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${selected === "done"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                            }`}
                        onClick={() => setSelected("done")}
                    >
                        Completed
                    </button>

                    <button
                        className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${selected === "active"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                            }`}
                        onClick={() => setSelected("active")}
                    >
                        Active
                    </button>
                </div>

                {/* show todos */}
                <div className="mb-8 space-y-3">
                    {filteredTodos.map((todo) => (
                        <div
                            key={todo.id}
                            className={`rounded-xl border p-4 transition ${todo.completed
                                    ? "border-green-200 bg-green-50"
                                    : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-md"
                                }`}
                        >
                            {editId === todo.id ? (
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <input
                                        className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        type="text"
                                        value={editValue}
                                        onChange={handleEditValueChange}
                                    />

                                    <button
                                        className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600"
                                        onClick={() => Save(todo.id)}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleCheck(todo.id)}
                                        className="h-5 w-5 cursor-pointer accent-blue-500"
                                    />

                                    <span
                                        className={`flex-1 text-base font-medium ${todo.completed
                                                ? "text-slate-400 line-through"
                                                : "text-slate-700"
                                            }`}
                                    >
                                        {todo.name}
                                    </span>

                                    <button
                                        className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
                                        onClick={() => handleEdit(todo.id)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100"
                                        onClick={() => handleDelete(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* statics  */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {/* Total */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-md">
                        <p className="text-sm font-medium text-slate-500">
                            Total Tasks
                        </p>

                        <span className="mt-2 block text-3xl font-bold text-slate-800">
                            {todos.length}
                        </span>
                    </div>

                    {/* Completed */}
                    <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-md">
                        <p className="text-sm font-medium text-green-600">
                            Tasks Completed
                        </p>

                        <span className="mt-2 block text-3xl font-bold text-green-700">
                            {Done.length}
                        </span>
                    </div>

                    {/* Remaining */}
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-md">
                        <p className="text-sm font-medium text-blue-600">
                            Tasks Remaining
                        </p>

                        <span className="mt-2 block text-3xl font-bold text-blue-700">
                            {Remaining.length}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}