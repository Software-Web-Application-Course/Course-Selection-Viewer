import { useState } from "react";
const courses = [
  { id: 1, title: "Web Engineering", credits: 3 },
  { id: 2, title: "Software Testing", credits: 3 },
  { id: 3, title: "Database Systems", credits: 4 },
];
/*
 Task 1:
 Use map() to create an option for every course.
 Use course.id as the key and value.
*/
function CourseOptions({ courses }) {
  //Task 1: Write the option-list code here
  return courses.map( (course) => ( <option key = {course.id} value = {course.id}> {course.title} </option> ));
}
/*
 Task 4:
 Show a message when no course is selected.
 Otherwise display the selected course title and credits.
*/
function CourseDetails({ course }) {
  //Task 4: Write the conditional JSX code here
  if (!course) {
    return <p>no course available to view.</p>;
  }
  return (
    <div>
      <h2>selected course: {course.title}</h2>
      <p>credits: {course.credits}</p>
    </div>
  );
} 

export default function App() {
  const [selectedId, setSelectedId] = useState("");
 /*
 Task 2:
 Read the selected value from the event
 and update selectedId.
 */
function handleCourseChange(event) {
  //Task 2: Update selectedId here
    setSelectedId(event.target.value);
  }
 /*
 Task 3:
 Use find() to get the course whose id
 matches selectedId.
 */
 //Task 3: Create selectedCourse here

 const selectedCourse = courses.find (
  (course) => course.id === Number(selectedId)
 );

 return (
 <main>
 <h1>Course Selection Viewer</h1>
 <select value={selectedId} onChange={handleCourseChange}>
 <option value="">Select a course</option>
 <CourseOptions courses={courses} />
 </select>
 <CourseDetails course={selectedCourse} />
 </main>
 );
}