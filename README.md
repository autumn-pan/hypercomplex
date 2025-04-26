## Hypercomplex
A NodeJS package that implements complex and hypercomplex numbers.
## Installation
Install using npm:
```
npm install hypercomplex
```
## Complex Numbers
### Polar Conversion
```js
let radius = 1;
let angle = Math.PI/4;
console.log(Complex.fromPolar(radius, angle));
// Complex: {real: 7.071, imag: 7.071}
```
### Binary Operations
```js
let complex1 = new Complex(1,2)
let complex2 = new Complex(3,4)

console.log(complex1.add(complex2));
// Complex: {real: 4, imag: 6}

console.log(complex1.subract(complex2));
// Complex: {real: -2, imag: -2}

console.log(complex1.multiply(complex2));
// Complex: {real: -5, imag: 10}

console.log(complex1.divide(complex2));
// Complex: {real: 0.44, imag: 0.08}
```
### Unary Operations
```js
let complex1 = new Complex(1,2)

console.log(complex1.conjugate();
// Complex: {real: 1, imag: -2}

console.log(complex1.mag();
// Complex: {real: 1, imag: -2}

console.log(complex1.phase();
// 1.047
```

## Quaternions
### Instantiation
```js
let Quaternion = new Quaternion(0,1,2,3)
//The first argument represents the scalar component, while the last three represent the vector components <q1,q2,q3>
```
### Binary Operations
```js
let quat1 = new Quaternion(1,2,3,4);
let quat2 = new Quaternion(4,3,2,1)

console.log(quat1.product(quat2));
// Quaternion {q0: -12, q1: 6, q2: 24, q3: 12}

console.log(quat1.add(quat2));
// Quaternion {q0: 5, q1: 5, q2: 5, q3: 5}

console.log(quat1.subtract(quat2)
// Quaternion {q0: -3, q1: -1, q2: 1, q3: 3}

```
### Unary Operations
```js
let quat1 = new Quaternion(q0: 1,q1: 2,q2: 3,q3: 4);

console.log(quat1.length());
// 5.477

console.log(quat1.inverse());
// Quaternion {q0: 0.033, q1: -0.066, q2: -0.1, q3: -0.133}
```
### Conversion from Axis-Angle
```js
let angle = Math.PI/2
let axisVector = [0, 0, 1]

console.log(Quaternion.fromAxisAngle(angle, axisVector]
// Quarternion {q0: 0.707, q1: 0, q2: 0, q3: 0.707}
```
## Vector3 Class
The Vector3 class is a class that represents 3-dimensional vectors. Their primary purpose is to be rotated by quaternions. There are no class methods other than quaternion rotation, and are instead intended to be used alongside linear algebra packages,.
### Initialization
```js
let vector = new Vector3(1,1,1)
```
### Binary Operations
```js
let vec1 = new Vector(1,2,3)
let vec2 = new Vector(4,5,6)

console.log(vec1.add(vec2))
// Vector: {x: 5, y: 7, z: 9}

console.log(vec1.subtract(vec2))
// Vector: {x: -3, y: -3, z: -3}

console.log(vec1.dot(vec2))
// 32
```
### Quaternion Rotation
```js
let rotationQuaternion = Quarternion.fromAxisAngle(Math.PI/2, [0,0,1])
let vector = new Vector3(1,0,0)

console.log(vector.rotate(rotationQuaternion))
// Vector3 {x: 0, y: -1; z: 0}
```

