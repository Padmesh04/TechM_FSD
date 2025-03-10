import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildComponent from "./ChildComponent";
import CourseForm from "./CourseForm";
import { Container } from "react-bootstrap";

interface Course {
  id: number;
  title: string;
  description: string;
}

const ParentComponent: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = () => {
    axios
      .get<Course[]>("http://localhost:4500/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <ChildComponent
          key={course.id}
          title={course.title}
          body={course.description}
        />
      ))}

      {/* ✅ Fix: Passing refreshCourses to CourseForm */}
      <CourseForm refreshCourses={fetchCourses} />
    </Container>
  );
};

export default ParentComponent;
