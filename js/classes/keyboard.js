/*------------------------------------*\

  # Keyboard

  # Richard Matthews: @Reinkaos

\*------------------------------------*/

var Keyboard = function (game, x, y, name) {

  Phaser.Sprite.call(this, game, x, y, name);

  this.game.beat.add(this.play, this);

};

Keyboard.prototype = Object.create(Phaser.Sprite.prototype);
Keyboard.prototype.constructor = Keyboard;

Keyboard.prototype.play = function (metronome) {

  var delay = 0;
  var velocity = 100;

  // if it were to play a II V I
  // Bar 1 would be II, Bar 2 would be V and 3 & 4 would be I

  var cMajor = {
    1: 'C4',
    2: 'D4',
    3: 'E4',
    4: 'F4',
    5: 'G4',
    6: 'A4',
    7: 'B4',
  };

  if (metronome.currentBar == 4) {
    // we are in bar 4
    var chord = [MIDI.keyToNote[cMajor[1]], MIDI.keyToNote[cMajor[3]], MIDI.keyToNote[cMajor[5]]];
    var note = MIDI.keyToNote[cMajor[1]];
    console.log('play chord I');
  } else if (metronome.currentBar == 3) {
    // we are in bar 3
    var chord = [MIDI.keyToNote[cMajor[1]], MIDI.keyToNote[cMajor[3]], MIDI.keyToNote[cMajor[5]]];
    console.log('play chord I');
  } else if (metronome.currentBar == 2) {
    // we are in bar 2
    var chord = [MIDI.keyToNote[cMajor[5]], MIDI.keyToNote[cMajor[7]], MIDI.keyToNote[cMajor[2]]];
    console.log('play chord V');
  } else if (metronome.currentBar == 1){
    // we are in bar 1
    var chord = [MIDI.keyToNote[cMajor[2]], MIDI.keyToNote[cMajor[4]], MIDI.keyToNote[cMajor[6]]];
    console.log('play chord II');
  }

  if (metronome.currentBeat == 1) {
    MIDI.chordOn(0, chord, velocity, delay);
    MIDI.chordOff(0, chord, delay);
  } else {
    MIDI.noteOn(0, MIDI.keyToNote[cMajor[1]], 80, delay);
    MIDI.noteOff(0, MIDI.keyToNote[cMajor[1]], delay);
  }

};
