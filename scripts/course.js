const courses = [
  { code: "WDD 130", credits: 2, completed: true },
  { code: "WDD 131", credits: 2, completed: true },
  { code: "WDD 231", credits: 2, completed: false },
  { code: "CSE 121b", credits: 2, completed: false },
];

const courseContainer = document.getElementById("courses");
const creditDisplay = document.getElementById("totalCredits");

function renderCourses(list) {
  courseContainer.innerHTML = "";
  let total = 0;
  list.forEach(course => {
    const div = document.createElement("div");
    div.className = "courseCard";
    if (course.completed) div.classList.add("completed");
    div.textContent = `${course.code}`;
    courseContainer.appendChild(div);
    total += course.credits;
  });
  creditDisplay.textContent = total;
}

document.getElementById("all").addEventListener("click", () => renderCourses(courses));
document.getElementById("cse").addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("CSE"))));
document.getElementById("wdd").addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("WDD"))));

renderCourses(courses);