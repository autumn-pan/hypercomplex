
class Quarternion
{
    constructor(q0,q1,q2,q3)
    {
        this.q0 = q0;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
    }

    product(quat2)
    {
        let q0 = this.q0*quat2.q0 - this.q1*quat2.q1 - this.q2*quat2.q2 - this.q3*quat2.q3
        let q1 = this.q0*quat2.q1 + this.q1*quat2.q0 + this.q2*quat2.q3 - this.q3*quat2.q2
        let q2 = this.q0*quat2.q2 - this.q1*quat2.q3 + this.q2*quat2.q0 + this.q3*quat2.q1
        let q3 = this.q0*quat2.q3 + this.q1*quat2.q2 - this.q2*quat2.q1 + this.q3*quat2.q0

        return new Quarternion(q0,q1,q2,q3)
    }

    length()
    {
        return (this.q0**2 + this.q1**2 + this.q2**2 + this.q3**2)**0.5;
    }

    inverse()
    {
        let q0 = this.q0/this.length()**2;
        let q1 = -this.q1/this.length()**2;
        let q2 = -this.q2/this.length()**2;
        let q3 = -this.q3/this.length()**2;
    
        return new Quarternion(q0,q1,q2,q3)
    }

    toString()
    {
        return this.q0 + " + " + this.q1 + "i + " + this.q2 + "j + " + this.q3 + "k";
    }

    static fromAngleAxis(angle, axis)
    {
        let q0 = Math.cos(angle/2)
        let q1 = axis[0]*Math.sin(angle/2)
        let q2 = axis[1]*Math.sin(angle/2)
        let q3 = axis[2]*Math.sin(angle/2)

        return new Quarternion(q0,q1,q2,q3)
    }

}


class Vector3 {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    rotate(rQuat)
    {
        let pQuat = new Quarternion(0,this.x,this.y,this.z);

        let a = (rQuat.inverse()).product(pQuat).product(rQuat);
        return new Vector3(a.q1,a.q2,a.q3)
    }
    toString()
    {
        return "<" + this.x + ", " + this.y + ", " + this.z + ">"
    }
}



module.exports = {
    Quarternion,
    Vector3
}