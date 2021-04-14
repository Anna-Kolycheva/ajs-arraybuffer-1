import MathC from './math';

export default class Daemon extends MathC {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
