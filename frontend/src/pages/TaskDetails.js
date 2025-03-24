
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTasks } from '../utils/api';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const tasks = await getTasks();
      const selectedTask = tasks.find((task) => task._id === id);
      if (selectedTask) {
        setTask(selectedTask);
      }
    } catch (err) {
      alert('Failed to fetch task details');
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Details</h1>
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskDetails;