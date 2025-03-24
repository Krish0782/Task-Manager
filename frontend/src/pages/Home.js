import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../utils/api';
import TaskCard from '../components/TaskCard';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      alert('Failed to fetch tasks');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      alert('Failed to delete task');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      <Link to="/add" className="bg-teal-400 text-white px-4 py-2 rounded mb-4 inline-block">
        Add Task
      </Link>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;