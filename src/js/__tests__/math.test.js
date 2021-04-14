import Daemon from '../daemon';
import Magician from '../magician';


test('with attack 100, distance 4 and stoned = true', () => {
  const cookie = new Daemon('cookie');
  cookie.stoned = true;
  cookie.attack = 100;
  cookie.availableAttack = 4;
  expect(cookie.availableAttack).toBe(60);
});

test('with attack 200, distance 2 and stoned = true', () => {
  const potato = new Magician('potato');
  potato.stoned = true;
  potato.attack = 200;
  potato.availableAttack = 2;
  expect(potato.availableAttack).toBe(175);
});

test('with attack 1000, distance > 5 and stoned = false', () => {
  const chickpea = new Magician('chickpea');
  chickpea.attack = 1000;
  chickpea.availableAttack = 6;
  expect(chickpea.availableAttack).toBe(0);
});

test('with attack 1000, distance =4 and stoned = false', () => {
  const nut = new Daemon('nut');
  nut.attack = 100;
  nut.availableAttack = 4;
  expect(nut.availableAttack).toBe(70);
});

// это я списала :(
test('checking true', () => {
  const chic = new Daemon('chic');
  chic.stoned = true;
  expect(chic.stoned).toBeTruthy();
});
