var Tone = require('./Tone.js');  

//a polysynth composed of 6 Voices of Synth
var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
//set the attributes using the set interface
synth.set("detune", -1200);
//play a chord
synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");