import MathC from './math';

export default class Magician extends MathC {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
