/*------------------------------------*\

  # Metronome

  # Richard Matthews: @Reinkaos

\*------------------------------------*/

var Metronome = function (game, x, y, name) {

  Phaser.Sprite.call(this, game, x, y, name);

  this.game.bars = 0;

  this.bpm = 80;
  this.bps = 60 / this.bpm;
  this.beat = this.bps * 60;
  this.beatNumber = 4; // 4
  this.beatValue =  4; // Crochets
  this.elapsedTime = 0;
  this.currentBeat = 1;

};

Metronome.prototype = Object.create(Phaser.Sprite.prototype);
Metronome.prototype.constructor = Metronome;

Metronome.prototype.update = function () {

  var delay = 0;
  var velocity = 127;

  if (this.elapsedTime % (this.beat * this.beatValue) == 0) {
    console.log('bar');
  }

  if (this.elapsedTime % this.beat == 0) {
    console.log('beat' + this.currentBeat);
    var note = 50;
    MIDI.setVolume(0, 127);
    MIDI.noteOn(0, note, velocity, delay);
    MIDI.noteOff(0, note, delay);

    if (this.currentBeat < this.beatValue) {
      this.currentBeat++;
    } else {
      this.currentBeat = 1;
    }
  }

  this.elapsedTime++;

};
