import Ship from "../src/Ship";

test('Ship length 1 is sunk after being hit', () => {
    const testShip = new Ship(1);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});

test("Ship isn't sunk if it hasn't been hit enough times", () => {
    const testShip = new Ship(2);
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
})