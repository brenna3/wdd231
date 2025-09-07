const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 1, completed: true },
  { code: "WDD 131", name: "Dynamic Web", credits: 2, completed: true },
  { code: "WDD 231", name: "Frontend Dev I", credits: 3, completed: false },
  { code: "CSE 121b", name: "JavaScript Language", credits: 2, completed: false },
];

function renderCourses(filteredCourses) {
  const container = document.getElementById("courseContainer");
  container.innerHTML = "";

  let totalCredits = 0;

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;
    container.appendChild(card);

    totalCredits += course.credits;
  });

  document.getElementById("totalCredits").textContent = totalCredits;
}

function filterCourses(type) {
  let filtered = [];

  if (type === "all") filtered = courses;
  else filtered = courses.filter(c => c.code.startsWith(type));

  renderCourses(filtered);
}

window.addEventListener("DOMContentLoaded", () => {
  renderCourses(courses);
});