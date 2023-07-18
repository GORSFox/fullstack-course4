var helloSpeaker = {
  speak: function (name) {
    console.log("Hello " + name);
  }
};

var byeSpeaker = {
  speak: function (name) {
    console.log("Goodbye " + name);
  }
};

(function () {
  var names = ["Yaakov", "Glaucia", "Gabriela", "Renato", "Renatinho", "Dolly", "Flávia", "Olívia", "Grayce", "John"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i][0].toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
