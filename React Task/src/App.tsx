import React, { useEffect, useState } from "react";
import CourseForm from "./components/CourseForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

interface Course {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    const response = await fetch("http://localhost:4500/courses");
    const data: Course[] = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="app-container">
      <h1>Online Educational Platform</h1>

      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6">
            <div className="card course-card">
              <h4 className="card-title">{course.title}</h4>
              <p className="card-text">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <CourseForm refreshCourses={fetchCourses} />
      </div>
    </div>
  );
};

export default App;
