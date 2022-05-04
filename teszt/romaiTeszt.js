QUnit.module('romai', function() {
    QUnit.test('a romai függvény létezik-e', function(assert) {
      assert.ok(romai, "létezik-e a romai");
    });
    QUnit.test('A romai függvény-e?', function(assert) {
        assert.ok(typeof romai === "function", "fv a romai");
    });
    QUnit.test('n=1', function(assert) {
      assert.equal(romaiSzamok(1), "I");
    });
    QUnit.test('n=2', function(assert) {
        assert.equal(romaiSzamok(2), "II");
    });
    QUnit.test('n=3', function(assert) {
        assert.equal(romaiSzamok(3), "III");
    });
    QUnit.test('n=9', function(assert) {
      assert.equal(romaiSzamok(9), "IX");
    });
    QUnit.test('n=18', function(assert) {
      assert.equal(romaiSzamok(18), "XVIII");
    });
    QUnit.test('n=38', function(assert) {
      assert.equal(romaiSzamok(38), "XXXVIII");
    });
  });