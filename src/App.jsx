import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg">

        <h1 className="text-2xl font-bold mb-5 text-center">
          Todo App
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter a todo..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Add
          </button>
        </div>

        {/* Todo */}
        <div className="bg-gray-700 rounded p-3 flex justify-between items-center">

          <span>Learn React</span>

          <div className="flex gap-2">
            <button className="text-yellow-400 hover:text-yellow-500">
              Edit
            </button>

            <button className="text-red-400 hover:text-red-500">
              /  Delete
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App