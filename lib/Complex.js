module.exports = class Complex {
    constructor(real, imag) {
        if (typeof real !== "number" || typeof imag !== "number") {
            throw new Error("Real and imaginary parts must be numbers");
        }
        this.real = real;
        this.imag = imag;
    }
    static fromPolar(r, theta) {
        let real = r * Math.cos(theta);
        let imag = r * Math.sin(theta);
        return new Complex(real, imag);
    }
    add(c2) {

        return new Complex(this.real + c2.real, this.imag + c2.imag);
    }
    sub(c2) {

        return new Complex(this.real - c2.real, this.imag - c2.imag);
    }
    mult(c2) {
        let real = this.real * c2.real - this.imag * c2.imag;
        let imag = this.real * c2.imag + this.imag * c2.real;
        return new Complex(real, imag);
    }
    div(c2) {
        const denominator = c2.mult(c2.conjugate()).real;
        if (denominator === 0) {
            throw new Error("Cannot divide by zero");
        }
        const numerator = this.mult(c2.conjugate());
        return new Complex(numerator.real / denominator, numerator.imag / denominator);
    }
    mag() {
        return (this.real ** 2 + this.imag ** 2) ** 0.5;
    }
    phase() {
        if (this.real === 0 && this.imag === 0) {
            return undefined;
        }
        return Math.atan(this.imag / this.real);
    }
    conjugate() {
        return new Complex(this.real, -this.imag);
    }
};
