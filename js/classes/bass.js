/*------------------------------------*\

  # Bass

  # Richard Matthews: @Reinkaos

\*------------------------------------*/

var Bass = function (game, x, y, name) {

  Phaser.Sprite.call(this, game, x, y, name);

  this.game.beat.add(this.play, this);

};

Bass.prototype = Object.create(Phaser.Sprite.prototype);
Bass.prototype.constructor = Bass;

Bass.prototype.play = function (metronome) {

  var delay = 0;
  var velocity = 100;

  // if it were to play a II V I
  // Bar 1 would be II, Bar 2 would be V and 3 & 4 would be I

  var cMajor = {
    1: 'C2',
    2: 'D2',
    3: 'E2',
    4: 'F2',
    5: 'G2',
    6: 'A2',
    7: 'B2',
  };

  if (metronome.currentBar == 4) {
    // we are in bar 4
    if (metronome.currentBeat == 1) {
      var note = MIDI.keyToNote[cMajor[1]];
      console.log('play chord I');
    }
  } else if (metronome.currentBar == 3) {
    // we are in bar 3
    if (metronome.currentBeat == 1) {
      console.log('play chord I');
      var note = MIDI.keyToNote[cMajor[1]];
    }
  } else if (metronome.currentBar == 2) {
    // we are in bar 2
    if (metronome.currentBeat == 1) {
      console.log('play chord V');
      var note = MIDI.keyToNote[cMajor[5]];
    }
  } else if (metronome.currentBar == 1){
    // we are in bar 1
    if (metronome.currentBeat == 1) {
      console.log('play chord II');
      var note = MIDI.keyToNote[cMajor[2]];
    }
  }

  MIDI.noteOn(1, note, 80, delay);
  MIDI.noteOff(1, note, delay + 3.25);

};
