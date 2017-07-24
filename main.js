var numberRunner = {
 numberChecker: function(i) {
   if(i % 3 === 0 && i % 5 === 0) {
     return 'FizzBuzz';
   } else if (i % 3 === 0) {
     return 'Fizz';
   } else if (i % 5 === 0) {
     return 'Buzz';
   } else {
     return i;
   }
 }
}

var mainDisplay = {
  displayItem: function() {
    var unList = document.getElementById('displayItems');
    unList.innerHTML = '';
    for(i = 1; i < 101; i++) {
      lister = document.createElement('li');
      lister.textContent = numberRunner.numberChecker(i);
      unList.appendChild(lister);
    }
  },

  removeButton: function() {
    terminus = document.getElementById('mainButtonDiv');
    terminus.innerHTML = '';
  }
}

handlers = {
  runDisplay: function() {
    mainDisplay.displayItem();
    mainDisplay.removeButton();
  }
}
