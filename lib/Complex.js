module.exports = class Complex
{
    constructor(real, imag)
    {
        this.real = real;
        this.imag = imag;
    }
    static fromPolar(r,theta)
    {
        let real = r*Math.cos(theta)
        let imag = r*Math.sin(theta)
        return new Complex(real,imag)
    }
    add(c2)
    {
        let real = c2.real;
        let imag = c2.imag;
        return new Complex(real,imag)

    }
    sub(c2)
    {
        let real = c2.real;
        let imag = c2.imag
        return new Complex(real,imag)

    }
    mult(c2)
    {
        let real = this.real*c2.real - this.imag * c2.imag;
        let imag = this.real * c2.imag + this.imag * c2.real;
        return new Complex(real,imag)

    }
    div(c2)
    {
        let real = this.mult(c2.conjugate()).real/c2.mult(c2.conjugate()).real;
        let imag = this.mult(c2.conjugate()).imag/c2.mult(c2.conjugate()).real;
        return new Complex(real, imag);
    }
    mag()
    {
        return (this.real**2+this.imag**2)**0.5;
    }
    phase()
    {
        return Math.atan(this.imag/this.real)
    }
    conjugate()
    {
        return new Complex(this.real, -this.imag)
    }
}