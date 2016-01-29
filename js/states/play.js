JamBox.Play = function (game) {};

JamBox.Play.prototype = {

  /*------------------------------------*\
      #PHASER INBUILT FUNCTIONS
  \*------------------------------------*/

  create: function () {

    /*------------------------------------*\
        # METRONOME
    \*------------------------------------*/

    this.game.metronome = new Metronome(this.game, this.game.world.centerX, this.game.world.centerY, '');
    this.game.physics.arcade.enable(this.game.metronome);
    this.game.add.existing(this.game.metronome);

  },

  update: function () {

  },

};
