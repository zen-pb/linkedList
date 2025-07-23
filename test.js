import LinkedList from './LinkedList.js';
import assert from 'assert';

function test(name, fn) {
    try {
        fn();
        console.log(`✅ ${name}`);
    } catch (err) {
        console.error(`❌ ${name}`);
        console.error(err);
    }
}

test("initial list is empty", () => {
    const list = new LinkedList();
    assert.strictEqual(list.size(), 0);
    assert.strictEqual(list.toString(), "null");
});

test("prepend adds to front", () => {
    const list = new LinkedList();
    list.prepend(10);
    list.prepend(20);
    assert.strictEqual(list.size(), 2);
    assert.strictEqual(list.toString(), "( 20 ) -> ( 10 ) -> null");
});

test("append adds to end", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    assert.strictEqual(list.size(), 3);
    assert.strictEqual(list.toString(), "( 1 ) -> ( 2 ) -> ( 3 ) -> null");
});

test("at returns correct node by index", () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    assert.strictEqual(list.at(0).value, 'a');
    assert.strictEqual(list.at(2).value, 'c');
    assert.strictEqual(list.at(-1).value, 'c');
    assert.strictEqual(list.at(-2).value, 'b');
    assert.strictEqual(list.at(5), null);
});

test("pop removes and returns last value", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    assert.strictEqual(list.pop(), 3);
    assert.strictEqual(list.size(), 2);
    assert.strictEqual(list.toString(), "( 1 ) -> ( 2 ) -> null");
});

test("pop on empty returns null", () => {
    const list = new LinkedList();
    assert.strictEqual(list.pop(), null);
});

test("contains returns true for existing value", () => {
    const list = new LinkedList();
    list.append(5);
    list.append(10);
    list.append(15);

    assert.strictEqual(list.contains(10), true);
    assert.strictEqual(list.contains(99), false);
});

test("find returns index of value", () => {
    const list = new LinkedList();
    list.append('x');
    list.append('y');
    list.append('z');
    assert.strictEqual(list.find('y'), 1);
    assert.strictEqual(list.find('a'), null);
});

test("tail returns last node", () => {
    const list = new LinkedList();
    list.append('first');
    list.append('last');
    assert.strictEqual(list.tail().value, 'last');
});

test("insertAt inserts correctly", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.insertAt(2, 1);
    assert.strictEqual(list.toString(), "( 1 ) -> ( 2 ) -> ( 3 ) -> null");
});

test("insertAt at start", () => {
    const list = new LinkedList();
    list.insertAt(100, 0);
    assert.strictEqual(list.head.value, 100);
});

test("removeAt removes correct node", () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.removeAt(1);
    assert.strictEqual(list.toString(), "( a ) -> ( c ) -> null");
});

test("removeAt at head", () => {
    const list = new LinkedList();
    list.append('x');
    list.append('y');
    list.removeAt(0);
    assert.strictEqual(list.head.value, 'y');
});

test("removeAt throws on invalid index", () => {
    const list = new LinkedList();
    list.append(1);
    assert.throws(() => list.removeAt(10), /cannot delete/i);
});

test("removeAt throws on empty list", () => {
    const list = new LinkedList();
    assert.throws(() => list.removeAt(0), /empty list/i);
});
