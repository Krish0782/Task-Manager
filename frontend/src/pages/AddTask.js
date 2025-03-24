import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../utils/api';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask({ title, description });
      alert('Task added successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to add task');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-teal-400 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;