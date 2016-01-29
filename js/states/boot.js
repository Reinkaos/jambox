var JamBox = {};

JamBox.Boot = function (game) {};

JamBox.Boot.prototype = {

  /*------------------------------------*\
      #PHASER INBUILT FUNCTIONS
  \*------------------------------------*/

  create: function () {

    this.game.stage.backgroundColor = '#fff';
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    var _this = this
    MIDI.loadPlugin({
      soundfontUrl: '/js/vendor/soundfont/',
      instrument: 'acoustic_grand_piano',
      onprogress: function (state, progress) {
        console.log(state, progress);
      }, onsuccess: function () {

        _this.state.start('preload');
      },
    });

  },
};
