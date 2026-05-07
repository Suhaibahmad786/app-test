import React, { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "React Basics" },
    { id: 2, name: "Node.js Fundamentals" },
    { id: 3, name: "MongoDB Mastery" },
  ]);

  const [newCourse, setNewCourse] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addCourse = () => {
    if (!newCourse.trim()) return;

    setCourses([
      ...courses,
      { id: Date.now(), name: newCourse }
    ]);

    setNewCourse("");
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const startEdit = (course) => {
    setEditId(course.id);
    setEditText(course.name);
  };

  const saveEdit = () => {
    setCourses(
      courses.map((c) =>
        c.id === editId ? { ...c, name: editText } : c
      )
    );

    setEditId(null);
    setEditText("");
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1>📚 Courses Dashboard</h1>
        <p>Manage your learning content easily</p>
      </div>

      {/* ADD BOX */}
      <div style={styles.addBox}>
        <input
          style={styles.input}
          placeholder="Enter new course..."
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />

        <button style={styles.addBtn} onClick={addCourse}>
          + Add Course
        </button>
      </div>

      {/* COURSES GRID */}
      <div style={styles.grid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.card}>

            {editId === course.id ? (
              <>
                <input
                  style={styles.editInput}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <button style={styles.saveBtn} onClick={saveEdit}>
                  Save
                </button>
              </>
            ) : (
              <>
                <h3 style={styles.title}>{course.name}</h3>

                <div style={styles.actions}>
                  <button
                    style={styles.editBtn}
                    onClick={() => startEdit(course)}
                  >
                    Edit
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};

// 🎨 PROFESSIONAL UI STYLES
const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    color: "white",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  addBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },

  input: {
    padding: "12px",
    width: "300px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  addBtn: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#00c6ff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  title: {
    marginBottom: "15px",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
  },

  editBtn: {
    padding: "6px 10px",
    border: "none",
    background: "#ffb400",
    borderRadius: "5px",
    cursor: "pointer",
  },

  deleteBtn: {
    padding: "6px 10px",
    border: "none",
    background: "#ff4d4d",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
  },

  saveBtn: {
    marginTop: "10px",
    padding: "8px",
    width: "100%",
    background: "#00c853",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },

  editInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    marginBottom: "10px",
  },
};

export default Courses;