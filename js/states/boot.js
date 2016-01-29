var JamBox = {};

JamBox.Boot = function (game) {};

JamBox.Boot.prototype = {

  /*------------------------------------*\
      #PHASER INBUILT FUNCTIONS
  \*------------------------------------*/

  create: function () {

    this.game.stage.backgroundColor = '#fff';
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    var _this = this;
    MIDI.loadPlugin({
      soundfontUrl: '/js/vendor/soundfont/',
      instruments: ['acoustic_grand_piano', 'acoustic_bass'],
      onprogress: function (state, progress) {
        console.log(state, progress);
      }, onsuccess: function () {

        MIDI.programChange(1, MIDI.GM.byName['acoustic_bass'].number);
        _this.state.start('preload');
      },
    });

  },
};
