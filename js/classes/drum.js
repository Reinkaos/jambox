/*------------------------------------*\

  # Drum

  # Richard Matthews: @Reinkaos

\*------------------------------------*/

var Drum = function (game, x, y, name) {

  Phaser.Sprite.call(this, game, x, y, name);

  this.game.beat.add(this.play, this);

};

Drum.prototype = Object.create(Phaser.Sprite.prototype);
Drum.prototype.constructor = Drum;

Drum.prototype.play = function (metronome) {

  var delay = 0;
  var velocity = 127;

  if (metronome.currentBeat == 1) {
    // play a kick!
    console.log(MIDI.keyToNote);
    var note = 61;
    MIDI.setVolume(0, 127);
    MIDI.noteOn(0, note, velocity, delay);
    MIDI.noteOff(0, note, delay);
    console.log('kick');
  }

  if (metronome.currentBeat == 3) {
    // play a snare!
  }

  // play a hat!

};
