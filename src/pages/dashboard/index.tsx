import CourseForm from "../../components/courseForm";
import CourseList from "../../components/courseList";

const DashboardPage = () => {
  return (
    <div>
      <h1>لیست دوره های من</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};
export default DashboardPage;
