$(function () {

  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'jambox');

  game.state.add('boot', JamBox.Boot);
  game.state.add('preload', JamBox.Preload);
  game.state.add('play', JamBox.Play);
  game.state.start('boot');

});
