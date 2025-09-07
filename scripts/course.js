const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web", credits: 3, completed: true },
  { code: "WDD 231", name: "Front-End Dev", credits: 3, completed: false },
  { code: "CSE 121b", name: "JavaScript Language", credits: 3, completed: false }
];

function renderCourses(filteredCourses) {
  const container = document.getElementById("course-container");
  container.innerHTML = "";
  let totalCredits = 0;

  filteredCourses.forEach(course => {
    const div = document.createElement("div");
    div.className = "course-card" + (course.completed ? " completed" : "");
    div.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} credits</p>
    `;
    container.appendChild(div);
    totalCredits += course.credits;
  });

  document.getElementById("total-credits").textContent = 
    `The total credits for course listed above is ${totalCredits}`;
}

function filterCourses(type) {
  if (type === "all") {
    renderCourses(courses);
  } else {
    renderCourses(courses.filter(c => c.code.toUpperCase().startsWith(type.toUpperCase())));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses(courses);
});
