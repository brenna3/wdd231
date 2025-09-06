const courses = [
  { code: "WDD 130", credits: 3, completed: true },
  { code: "WDD 131", credits: 3, completed: true },
  { code: "WDD 231", credits: 3, completed: false },
];

const courseList = document.getElementById('courseList');
const totalCredits = document.getElementById('totalCredits');

function displayCourses(filter) {
  courseList.innerHTML = '';
  let filtered = filter === 'all' ? courses : courses.filter(c => c.code.startsWith(filter.toUpperCase()));
  let credits = 0;

  filtered.forEach(c => {
    const div = document.createElement('div');
    div.className = `course-card${c.completed ? ' completed' : ''}`;
    div.textContent = c.code;
    courseList.appendChild(div);
    credits += c.credits;
  });

  totalCredits.textContent = credits;
}

document.getElementById('all').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('wdd').addEventListener('click', () => displayCourses('WDD'));

window.addEventListener('DOMContentLoaded', () => displayCourses('all'));