/* globals __DEV__ */
import Ship from '../sprites/Ship'

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9'
  }
  preload() {
    this.load.image('Ship', 'assets/images/ship.png')
  }

  create() {

    this.Ship = new Ship({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'Ship'
    })

    this.game.add.existing(this.Ship)
  }

  render() {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.Ship, 32, 32)
    }
  }
}
