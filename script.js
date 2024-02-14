const header = document.querySelector('header');
let lastScroll = 0;

// Определите, когда кнопка должна отображаться
// Определите, когда кнопка должна отображаться
window.onscroll = function() {
    var button = document.getElementById('scrollToTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };
  
  // Плавная анимация прокрутки страницы вверх при клике на кнопку
  document.getElementById('scrollToTopButton').addEventListener('click', function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8); // Здесь можно настроить скорость анимации, уменьшив или увеличив шаг деления
    }
  }
  
  

// // Работа кнопки поиск
// const searchInput = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener('click', function() {
//     const searchText = searchInput.value.toLowerCase();

//     console.log('Вы выполнили поиск по запросу: ' + searchText);
// });

        
// const homeLink = document.getElementById("home-link");

        
// homeLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     showMessage("Вы уже находитесь на главной странице."); 
// });

        
// function showMessage(message) {
//     alert(message);
// }



// Кнопка вверх
function showScrollButton() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}

function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", showScrollButton);

