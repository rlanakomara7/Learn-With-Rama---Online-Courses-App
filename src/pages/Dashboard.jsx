import { Navigate } from "react-router";
import { getUsername } from "../utils/auth";
import "../styles/Dashboard.css";

const courses = [
  { title: "HTML & CSS Basics", level: "Beginner", lessons: 12 },
  { title: "JavaScript Fundamentals", level: "Beginner", lessons: 20 },
  { title: "React for Beginners", level: "Intermediate", lessons: 16 },
];

function Dashboard() {
  const username = getUsername();

  // Belum login: kembali ke halaman Sign In
  if (!username) {
    return <Navigate to="/signin" />;
  }

  return (
    <main className="dashboard">
      <div className="wrapper">
        <h2>Welcome, {username}!</h2>
        <p className="dashboard-sub">Pick up where you left off.</p>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <span className="course-level">{course.level}</span>
              <h3>{course.title}</h3>
              <p>{course.lessons} lessons</p>
              <a href="#" className="tbl-pink">
                Start Learning
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
