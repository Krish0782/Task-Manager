import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <div className="mt-2 space-x-2">
        <Link
          to={`/edit/${task._id}`}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
        <Link
          to={`/task/${task._id}`}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;