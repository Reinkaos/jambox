JamBox.Play = function (game) {};

JamBox.Play.prototype = {

  /*------------------------------------*\
      #PHASER INBUILT FUNCTIONS
  \*------------------------------------*/

  create: function () {

    /*------------------------------------*\
        # METRONOME
    \*------------------------------------*/

    this.game.metronome = new Metronome(this.game, this.game.world.centerX, this.game.world.centerY, '', options = { bpm: 60 });
    this.game.physics.arcade.enable(this.game.metronome);
    this.game.add.existing(this.game.metronome);

    // this.game.drum = new Drum(this.game, this.game.world.centerX, this.game.world.centerY, '');
    // this.game.physics.arcade.enable(this.game.drum);
    // this.game.add.existing(this.game.drum);

    this.game.keyboard = new Keyboard(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.game.physics.arcade.enable(this.game.keyboard);
    this.game.add.existing(this.game.keyboard);

  },

  update: function () {

  },

};
