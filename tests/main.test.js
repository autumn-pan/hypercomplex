const Quaternion = require('../lib/index.js').Quaternion;
const Vector3 = require('../lib/index.js').Vector3;
const Complex = require('../lib/index.js').Complex;

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
    expect(v1.dot(v2)).toEqual(32);
}
);

test('Complex', () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    
    expect(c1.add(c2)).toEqual(new Complex(4, 6));
    expect(c1.subtract(c2)).toEqual(new Complex(-2, -2));
    expect(c1.multiply(c2)).toEqual(new Complex(-5, 10));
    expect(c1.divide(c2)).toEqual(new Complex(0.44, 0.08));
    expect(c1.magnitude()).toBeCloseTo(2.24, 2);
    expect(c1.phase()).toBeCloseTo(1.11, 2);
    expect(c1.conjugate()).toEqual(new Complex(1, -2));

    const c = Complex.fromPolar(2, Math.PI / 4);

    expect(c.real).toBeCloseTo(Math.sqrt(2), 5); 
    expect(c.imag).toBeCloseTo(Math.sqrt(2), 5); 
}
);

test("Rotation", () => {
    const q = Quaternion.fromAxisAngle(Math.PI / 2, [0, 0, 1]);
    const v = new Vector3(1, 0, 0);
    const rotatedV = v.rotate(q);
    expect(rotatedV.x).toBeCloseTo(0, 5);
    expect(rotatedV.y).toBeCloseTo(1, 5);
    expect(rotatedV.z).toBeCloseTo(0, 5);
}
);

test("From Axis Angle", () => {
    const angle = Math.PI / 2;
    const axis = [0, 0, 1];
    const q = Quaternion.fromAxisAngle(angle, axis);
    expect(q.q0).toBeCloseTo(Math.cos(angle / 2), 5);
    expect(q.q1).toBeCloseTo(0, 5);
    expect(q.q2).toBeCloseTo(0, 5);
    expect(q.q3).toBeCloseTo(Math.sin(angle / 2), 5);
}
);
