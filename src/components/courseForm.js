import { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("عنوان الزامی است");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };
  return (
    <div>
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button onClick={handleCourseSubmit}>افزودن دوره </button>
    </div>
  );
};
export default CourseForm;
