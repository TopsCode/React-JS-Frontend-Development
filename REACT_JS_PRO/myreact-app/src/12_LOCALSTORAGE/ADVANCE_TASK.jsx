import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { FaTrash, FaEdit, FaCheckCircle, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function FancyTaskManager() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'PENDING',
    deadline: null
  });

  const [allTask, setAllTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('MYTASK')) || [];
    setAllTask(stored);
  }, []);

  const saveTasks = (tasks) => {
    setAllTask(tasks);
    localStorage.setItem('MYTASK', JSON.stringify(tasks));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...allTask];
      updated[editIndex] = task;
      saveTasks(updated);
      setEditIndex(null);
    } else {
      saveTasks([...allTask, task]);
    }
    setTask({ title: '', description: '', status: 'PENDING', deadline: null });
  };

  const handleEdit = (index) => {
    setTask(allTask[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = allTask.filter((_, i) => i !== index);
    saveTasks(updated);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(allTask);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    saveTasks(items);
  };

  const isDeadlineNear = (deadline) => {
    if (!deadline) return false;
    const now = new Date();
    const diff = new Date(deadline) - now;
    return diff <= 86400000 && diff > 0; // within 24 hours
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">📝 Fancy Task Manager</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-lg mb-6 space-y-4">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="status"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="PENDING">Pending</option>
          <option value="COMPLETED">Completed</option>
        </select>
        <DatePicker
          selected={task.deadline ? new Date(task.deadline) : null}
          onChange={(date) => setTask({ ...task, deadline: date })}
          placeholderText="Set deadline"
          className="w-full border p-2 rounded"
          showTimeSelect
          dateFormat="Pp"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {allTask.map((t, i) => (
                <Draggable key={i} draggableId={i.toString()} index={i}>
                  {(provided) => (
                    <motion.div
                      className={`bg-white shadow-md p-4 rounded-lg mb-4 border-l-4 ${
                        t.status === 'COMPLETED' ? 'border-green-500' : 'border-yellow-500'
                      }`}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center">
                            {t.status === 'COMPLETED' ? (
                              <FaCheckCircle className="text-green-500 mr-2" />
                            ) : (
                              <FaClock className="text-yellow-500 mr-2" />
                            )}
                            {t.title}
                          </h3>
                          <p>{t.description}</p>
                          {t.deadline && (
                            <p className="text-sm text-gray-600">
                              ⏰ {new Date(t.deadline).toLocaleString()}
                              {isDeadlineNear(t.deadline) && (
                                <span className="text-red-600 font-bold ml-2">Reminder!</span>
                              )}
                            </p>
                          )}
                          <p className="text-xs mt-1 text-gray-500">Status: {t.status}</p>
                        </div>
                        <div className="space-x-2">
                          <button onClick={() => handleEdit(i)} className="text-blue-600 hover:text-blue-800">
                            <FaEdit />
                          </button>
                          <button onClick={() => handleDelete(i)} className="text-red-600 hover:text-red-800">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
