document.addEventListener('DOMContentLoaded', function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  // Fecha o menu se clicar fora
  document.addEventListener('click', function () {
    dropdownContent.style.display = 'none';
  });
});
