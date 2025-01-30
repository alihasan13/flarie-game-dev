import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // Load assets here
    this.load.image('logo', '/logo.png'); // Example asset
  }

  create() {
    // Add game objects here
    const logo = this.add.image(400, 300, 'logo');
    this.tweens.add({
      targets: logo,
      y: 200,
      duration: 1500,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}
