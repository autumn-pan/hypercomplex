const Quaternion = require('../lib/index.js').Quaternion;
const Vector3 = require('../lib/index.js').Vector3;
const Complex = require('../lib/index.js');

test('Quaternion', () => {
    const q1 = new Quaternion(1, 2, 3, 4);
    const q2 = new Quaternion(5, 6, 7, 8);
    const q3 = new Quaternion(9, 10, 11, 12);
    
    expect(q1.add(q2)).toEqual(new Quaternion(6, 8, 10, 12));
    expect(q1.subtract(q2)).toEqual(new Quaternion(-4, -4, -4, -4));
    expect(q1.multiply(q2)).toEqual(new Quaternion(-60, 12, 30, 24));
    });

test('Vector3', () => {
    const v1 = new Vector3(1, 2, 3);
    const v2 = new Vector3(4, 5, 6);
    
    expect(v1.add(v2)).toEqual(new Vector3(5, 7, 9));
    expect(v1.subtract(v2)).toEqual(new Vector3(-3, -3, -3));
    expect(v1.multiply(v2)).toEqual(new Vector3(4, 10, 18));
}
);

test('Complex', () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    
    expect(c1.add(c2)).toEqual(new Complex(4, 6));
    expect(c1.subtract(c2)).toEqual(new Complex(-2, -2));
    expect(c1.multiply(c2)).toEqual(new Complex(-5, 10));
}
);
