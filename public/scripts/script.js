// required to clear localstorage cart once page is exited
//reference this script in main html

window.onunload = function() {
    localStorage.removeItem('cart');
  };