(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var greetingsContainer = document.getElementById('greetings-container');
  
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      var greeting = document.createElement('p');
  
      if (firstLetter === 'j') {
        greeting.textContent = "Good Bye " + names[i];
      } else {
        greeting.textContent = "Hello " + names[i];
      }
      
      greetingsContainer.appendChild(greeting);
    }
  })();
  
