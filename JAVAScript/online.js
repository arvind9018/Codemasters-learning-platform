function scrollToCourses() {
  document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

function showCourse(title) {
  document.getElementById('courseTitle').textContent = title;
  document.getElementById('courseModal').style.display = 'block';
  window.location.href = `course.html?course=${encodeURIComponent(title)}`;
}

function closeModal() {
  document.getElementById('courseModal').style.display = 'none';
}

function filterCourses() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const cards = document.querySelectorAll('.course-card');

  cards.forEach(card => {
    const title = card.textContent.toLowerCase();
    const cardCategory = card.getAttribute('data-category');

    const matchesSearch = title.includes(search);
    const matchesCategory = (category === 'all' || cardCategory === category);

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function showCourse(title) {
  window.location.href = `course.html?course=${encodeURIComponent(title)}`;
}
