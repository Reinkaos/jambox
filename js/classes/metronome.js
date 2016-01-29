/*------------------------------------*\

  # Metronome

  # Richard Matthews: @Reinkaos

\*------------------------------------*/

var Metronome = function (game, x, y, name, options) {

  Phaser.Sprite.call(this, game, x, y, name);


  this.bpm = options.bpm;
  this.bps = 60 / this.bpm;
  this.beat = this.bps * 60;
  this.beatNumber = 4; // 4
  this.beatValue = 4; // Crochets ( currently unused param )
  this.elapsedTime = 0;
  this.currentBeat = 1;
  this.currentBar = 0;

  this.game.beat = new Phaser.Signal();

};

Metronome.prototype = Object.create(Phaser.Sprite.prototype);
Metronome.prototype.constructor = Metronome;

Metronome.prototype.update = function () {

  var delay = 0;
  var velocity = 127;

  if (this.elapsedTime % (this.beat * this.beatNumber) == 0) {

    if (this.currentBar < 4) {
      this.currentBar++;
    } else {
      this.currentBar = 1;
    }

    console.log(this.currentBar);

  }

  if (this.elapsedTime % this.beat == 0) {

    // send beat signal
    this.game.beat.dispatch(this);

    if (this.currentBeat == 1) {
      var note = 65;
    } else {
      var note = 50;
    }

    // MIDI.setVolume(0, 127);
    // MIDI.noteOn(0, note, velocity, delay);
    // MIDI.noteOff(0, note, delay);

    if (this.currentBeat < this.beatNumber) {
      this.currentBeat++;
    } else {
      this.currentBeat = 1;
    }
  }

  this.elapsedTime++;

};
