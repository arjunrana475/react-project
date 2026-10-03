import { useState } from 'react'

export default function Skills() {
    const [skills, setSkills] = useState(["Java", "JavaScript", "MongoDB"])
    const [editId, setEditId] = useState(null);
    const [value, setValue] = useState("");

    function handleInput(e) {
        setValue(e.target.value);
    }
    function addSkill() {
        setSkills(prev => ([
            ...prev, "Node.js"
        ]))
    }

    function handleDelete(id) {
        setSkills(skills.filter((skill, index) => {
            return index !== id
        }))
    }
    function handleEdit(id) {
        setEditId(id);
        setValue(skills[id]);
    }
    function ChangeTask(i) {
        setSkills(prevSkills => prevSkills.map((skill, index) => {
            if (index === i) return value
            else return skill
        })
        );
        setEditId(null);
        setValue("");
    }
  return (
      <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
          <div className="w-full max-w-xl">

              <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-800">
                      My Skills
                  </h1>
                  <p className="text-gray-500 mt-1">
                      Manage your technical skills
                  </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">

                  <ul className="space-y-3">
                      {skills.map((skill, index) => (
                          <li
                              key={index}
                              className="border border-gray-200 rounded-lg p-4"
                          >
                              {/* Skill Row */}
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                                  <span className="text-lg font-medium text-gray-800">
                                      {skill}
                                  </span>

                                  <div className="flex gap-2">

                                      <button
                                          className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                                          onClick={() => handleEdit(index)}
                                      >
                                          Edit
                                      </button>

                                      <button
                                          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                                          onClick={() => handleDelete(index)}
                                      >
                                          Delete
                                      </button>

                                  </div>
                              </div>

                              {editId === index && (
                                  <div className="mt-4 flex flex-col sm:flex-row gap-2">

                                      <input
                                          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                          type="text"
                                          value={value}
                                          onChange={handleInput}
                                      />

                                      <button
                                          className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                          onClick={() => ChangeTask(index)}
                                      >
                                          Save
                                      </button>

                                  </div>
                              )}
                          </li>
                      ))}
                  </ul>

                  <button
                      className="w-full mt-5 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
                      onClick={addSkill}
                  >
                      + Add Skill
                  </button>

              </div>
          </div>
      </div>
  )
}
