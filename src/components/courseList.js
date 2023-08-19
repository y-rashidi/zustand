import React from "react";
import useCourseStore from "../store/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <ul>
      {courses?.map((course, i) => {
        return (
          <li
            key={i}
            style={{ backgroundColor: course?.completed ? "green" : "red" }}
          >
            <input
              type="checkbox"
              checked={course?.completed}
              onChange={() => toggleCourseStatus(course.id)}
            />
            <span>{course.title}</span>
            <button onClick={() => removeCourse(course.id)}>حذف</button>
          </li>
        );
      })}
    </ul>
  );
};
export default CourseList;
