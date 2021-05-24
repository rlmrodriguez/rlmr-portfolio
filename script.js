const sidebarBtn = document.getElementById('sidebarBtn');
const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');

sidebarBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebarBtn.classList.toggle('active');
  sidebar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (e.target.id !== 'sidebarBtn' && e.target.id !== 'sidebar') {
    sidebarBtn.classList.remove('active');
    sidebar.classList.remove('active');
  }
  console.log(e.target);
});
