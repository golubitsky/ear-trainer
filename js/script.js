(function() {
  //a polysynth composed of 6 Voices of Synth
  var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
  //set the attributes using the set interface
  synth.set("detune", -1200);
  
  //play a chord

  function getRandom(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
  }

  var notesInScale = ["A","B","C","D","E","F","G"];

  function sound(){
    var notes = []
    for (var i = 0; i < 3; i++){
      var rand = getRandom(0,6)
      var flatSharp = '';
      switch(getRandom(0,2)){
        case 1:
          flatSharp += 'b';
        break;
        case 2:
          flatSharp += '#';
        break;
      }
      if (i == 3){
        var octave = getRandom(6);
      } else {
        var octave = getRandom(4,5);
      }
      var note = notesInScale[rand] + flatSharp + octave;
      notes.push(note);
    }
    synth.triggerAttackRelease(notes, 0.5);

  }
  var test = document.getElementById('content');
  test.onclick = function() { 
    sound();
    this.innerHTML = "Click me again!";
  };
})();
