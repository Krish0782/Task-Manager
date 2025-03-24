import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTasks, updateTask } from '../utils/api';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const tasks = await getTasks();
      const task = tasks.find((task) => task._id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    } catch (err) {
      alert('Failed to fetch task');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, { title, description });
      alert('Task updated successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to update task');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;