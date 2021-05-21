const sidebarBtn = document.getElementById('sidebarBtn');
const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');

sidebarBtn.addEventListener('click', () => {
  sidebarBtn.classList.toggle('active');
  if (sidebarBtn.classList.contains('active')) {
    sidebar.style.right = '0';
  } else {
    sidebar.style.right = '-250px';
  }
});
