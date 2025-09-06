const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Front-End Development", credits: 3, completed: false }
];

function displayCourses(filter) {
  const list = document.getElementById("course-list");
  list.innerHTML = "";

  let filtered = filter === "all" ? courses : courses.filter(c => c.code.startsWith(filter.toUpperCase()));

  let totalCredits = 0;

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.textContent = `${course.code}`;
    div.className = course.completed ? "completed" : "incomplete";
    list.appendChild(div);
    totalCredits += course.credits;
  });

  document.getElementById("total-credits").textContent = `The total credits for course listed above is ${totalCredits}`;
}

document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));

window.addEventListener("DOMContentLoaded", () => displayCourses("all"));