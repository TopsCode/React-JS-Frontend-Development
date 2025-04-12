import React, { useEffect, useState } from 'react';

export default function TASK_PROJECT() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "PENDING"
    });

    const [allTask, setAllTask] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [filterStatus, setFilterStatus] = useState("ALL");
    const [selectedTasks, setSelectedTasks] = useState([]);

    useEffect(() => {
        const lastTask = JSON.parse(localStorage.getItem("MYTASK")) || [];
        setAllTask(lastTask);
    }, []);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedTasks;
        if (editIndex !== null) {
            updatedTasks = [...allTask];
            updatedTasks[editIndex] = task;
            setEditIndex(null);
        } else {
            updatedTasks = [...allTask, task];
        }

        setAllTask(updatedTasks);
        localStorage.setItem("MYTASK", JSON.stringify(updatedTasks));
        setTask({ title: "", description: "", status: "PENDING" });
    };

    const handleEdit = (index) => {
        setTask(allTask[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedTasks = allTask.filter((_, i) => i !== index);
        setAllTask(updatedTasks);
        localStorage.setItem("MYTASK", JSON.stringify(updatedTasks));
        setSelectedTasks(prev => prev.filter(i => i !== index));
        setEditIndex(null);
    };

    const handleFilterChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const toggleSelect = (index) => {
        setSelectedTasks(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const updateBulkStatus = (newStatus) => {
        const updatedTasks = allTask.map((task, i) =>
            selectedTasks.includes(i) ? { ...task, status: newStatus } : task
        );
        setAllTask(updatedTasks);
        localStorage.setItem("MYTASK", JSON.stringify(updatedTasks));
        setSelectedTasks([]);
    };

    const toggleSelectAll = () => {
        if (selectedTasks.length === filteredTasks.length) {
            setSelectedTasks([]);
        } else {
            const allIndices = filteredTasks.map(task =>
                allTask.findIndex(t => t === task)
            );
            setSelectedTasks(allIndices);
        }
    };

    const filteredTasks = allTask.filter(task => {
        if (filterStatus === "ALL") return true;
        return task.status.toUpperCase() === filterStatus;
    });

    const allVisibleSelected = filteredTasks.every(task =>
        selectedTasks.includes(allTask.findIndex(t => t === task))
    );

    return (
        <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <h2>{editIndex !== null ? "Edit Task" : "Add New Task"}</h2>
                <div style={{ marginBottom: "10px" }}>
                    <label>Title: </label><br />
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={task.title}
                        name="title"
                        onChange={handleChange}
                        style={{ width: "100%", padding: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Description: </label><br />
                    <input
                        type="text"
                        placeholder="Enter description"
                        value={task.description}
                        name="description"
                        onChange={handleChange}
                        style={{ width: "100%", padding: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Status: </label><br />
                    <select name="status" value={task.status} onChange={handleChange} style={{ width: "100%", padding: "5px" }}>
                        <option value="PENDING">PENDING</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                </div>

                <button type="submit" style={{ padding: "8px 16px", marginTop: "10px" }}>
                    {editIndex !== null ? "Update" : "Save"}
                </button>
            </form>

            <div style={{ marginBottom: "20px" }}>
                <label><strong>Filter by Status:</strong> </label>
                <select value={filterStatus} onChange={handleFilterChange} style={{ marginLeft: "10px", padding: "5px" }}>
                    <option value="ALL">All</option>
                    <option value="PENDING">Pending</option>
                    <option value="COMPLETED">Completed</option>
                </select>
            </div>

            {selectedTasks.length > 0 && (
                <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
                    <strong>{selectedTasks.length} item(s) selected</strong><br />
                    <button onClick={() => updateBulkStatus("COMPLETED")} style={{ marginRight: "10px", padding: "6px 10px" }}>
                        Mark as Completed
                    </button>
                    <button onClick={() => updateBulkStatus("PENDING")} style={{ padding: "6px 10px" }}>
                        Mark as Pending
                    </button>
                </div>
            )}

            {/* Select All */}
            {filteredTasks.length > 0 && (
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="checkbox"
                        checked={allVisibleSelected}
                        onChange={toggleSelectAll}
                    />{" "}
                    <label><strong>Select All</strong></label>
                </div>
            )}

            {/* Task List */}
            {filteredTasks.map((taskItem, i) => {
                const actualIndex = allTask.findIndex(t => t === taskItem);
                return (
                    <div
                        key={actualIndex}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                            backgroundColor: "#fafafa"
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={selectedTasks.includes(actualIndex)}
                            onChange={() => toggleSelect(actualIndex)}
                            style={{ marginRight: "10px" }}
                        />
                        <strong>{taskItem.title}</strong>
                        <p>{taskItem.description}</p>
                        <p><strong>Status:</strong> {taskItem.status}</p>
                        <button onClick={() => handleEdit(actualIndex)} style={{ marginRight: "10px", padding: "4px 10px" }}>Edit</button>
                        <button onClick={() => handleDelete(actualIndex)} style={{ padding: "4px 10px" }}>Delete</button>
                    </div>
                );
            })}

            {filteredTasks.length === 0 && (
                <p style={{ marginTop: "20px" }}>No tasks found for selected filter.</p>
            )}
        </div>
    );
}
