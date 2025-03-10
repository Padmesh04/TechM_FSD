import React, { useState } from "react";

interface CourseFormProps {
  refreshCourses: () => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ refreshCourses }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    await fetch("http://localhost:4500/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    refreshCourses();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-light shadow"
    >
      <h3 className="text-primary">Add a Course</h3>
      <div className="mb-3">
        <label className="form-label">Course Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary w-100">Submit</button>
    </form>
  );
};

export default CourseForm;
