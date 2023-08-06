document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const searchInput = document.getElementById('searchInput');
  const searchKeyword = searchInput.value.toLowerCase();

  // Perform actions based on the searchKeyword
  if (searchKeyword === 'ladies') {
    window.location.href = './ladiesWear.html';
  } else if (searchKeyword === 'madam') {
    window.location.href = './madamsWear.html';
  } else if (searchKeyword === 'kid') {
    window.location.href = './kidsWear.html';
  } else if (searchKeyword === 'login') {
    window.location.href = './login.html';
  } else if (searchKeyword === 'croptop') {
    window.location.href = './starPatchedCropTee.html'
  } else if (searchKeyword === 'leather') {
    window.location.href = './leatherHalterTop'
  } else if (searchKeyword === 'skirt') {
    window.location.href = './maxiSkirt'
  } else if (searchKeyword === 'sweater') {
    window.location.href = './sweater'
  } else if (searchKeyword === 'jacket') {
    window.location.href = './iceryKidJacket'
  } else if (searchKeyword === 'register') {
    window.location.href = './register.html'
  } else if (searchKeyword === 'about') {
    window.location.href = './aboutUs.html'
  } else if (searchKeyword === 'accessbility') {
    window.location.href = './accessbility.html'
  } else if (searchKeyword === 'career') {
    window.location.href = './careers.html'
  } else if (searchKeyword === 'cart') {
    window.location.href = 'cart.html'
  } else if (searchKeyword === 'gift') {
    window.location.href = './eGiftCart.html'
  } else if (searchKeyword === 'help') {
    window.location.href = 'help.html'
  } else if (searchKeyword === 'term') {
    window.location.href = './terms&Privacy'
  } else if (searchKeyword === 'privacy') {
    window.location.href = './terms&Privacy'
  } else if (searchInput === 'influencer') {
    window.location.href = './influencer'
  }
  else if (searchKeyword === 'home') {
    window.location.href = './index.html'
  } else {
    window.location.href = './index.html'
  }
});


