/*------------------------------------*\
    #PRELOAD
\*------------------------------------*/

JamBox.Preload = function (game) {};

JamBox.Preload.prototype = {

  /*------------------------------------*\
      #PHASER INBUILT FUNCTIONS
  \*------------------------------------*/

  create: function () {

    this.state.start('play');

  },

};
