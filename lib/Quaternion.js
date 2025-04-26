
class Quaternion
{
    constructor(q0,q1,q2,q3)
    {
        if (![q0, q1, q2, q3].every((n) => typeof n === "number")) {
            throw new Error("Quaternion components must be numbers");
        }

        this.q0 = q0;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
    }

    add(quat2)
    {
        return new Quaternion(this.q0 + quat2.q0, this.q1 + quat2.q1, this.q2 + quat2.q2, this.q3 + quat2.q3);
    }

    subtract(quat2)
    {
        return new Quaternion(this.q0 - quat2.q0, this.q1 - quat2.q1, this.q2 - quat2.q2, this.q3 - quat2.q3);
    }

    multiply(quat2)
    {
        let q0 = this.q0*quat2.q0 - this.q1*quat2.q1 - this.q2*quat2.q2 - this.q3*quat2.q3;
        let q1 = this.q0*quat2.q1 + this.q1*quat2.q0 + this.q2*quat2.q3 - this.q3*quat2.q2;
        let q2 = this.q0*quat2.q2 - this.q1*quat2.q3 + this.q2*quat2.q0 + this.q3*quat2.q1;
        let q3 = this.q0*quat2.q3 + this.q1*quat2.q2 - this.q2*quat2.q1 + this.q3*quat2.q0;

        return new Quaternion(q0,q1,q2,q3);
    }

    length()
    {
        return (this.q0**2 + this.q1**2 + this.q2**2 + this.q3**2)**0.5;
    }

    inverse()
    {
        const lenSquared = this.length() ** 2;
        if (lenSquared === 0) {
            throw new Error("Cannot invert a quaternion with zero length");
        }
        // Conjugate the quaternion
        let q0 = this.q0 / lenSquared;
        let q1 = -this.q1 / lenSquared;
        let q2 = -this.q2 / lenSquared;
        let q3 = -this.q3 / lenSquared;
    
    
        return new Quaternion(q0,q1,q2,q3);
    }

    static fromAxisAngle(angle, axis)
    {
        if (axis.length !== 3) {
            throw new Error("Axis must be a 3D vector");
        }
        if (!axis.every((n) => typeof n === "number")) {
            throw new Error("Axis components must be numbers");
        }
        if (axis[0] === 0 && axis[1] === 0 && axis[2] === 0) {
            throw new Error("Axis cannot be the zero vector");
        }
        let q0 = Math.cos(angle/2);
        let q1 = axis[0]*Math.sin(angle/2);
        let q2 = axis[1]*Math.sin(angle/2);
        let q3 = axis[2]*Math.sin(angle/2);

        return new Quaternion(q0,q1,q2,q3);
    }

    normalize() {
        const len = this.length();

        if (len == 0) {
            throw new Error("Cannot normalize a quaternion with length zero");
        }
        return new Quaternion(this.q0 / len, this.q1 / len, this.q2 / len, this.q3 / len);
    }

}


class Vector3 {
    constructor(x,y,z) {
        if (![x, y, z].every((n) => typeof n === "number")) {
            throw new Error("Vector3 components must be numbers");
        }
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v2)
    {
        return new Vector3(this.x + v2.x, this.y + v2.y, this.z + v2.z);
    }

    subtract(v2)
    {
        return new Vector3(this.x - v2.x, this.y - v2.y, this.z - v2.z);
    }

    dot(v2)
    {
        return this.x*v2.x + this.y*v2.y + this.z*v2.z;
    }

    rotate(rQuat)
    {
        if (!(rQuat instanceof Quaternion)) {
            throw new Error("rQuat must be an instance of Quaternion");
        }
        let pQuat = new Quaternion(0, this.x, this.y, this.z);
        let normalizedR = rQuat.normalize();
        let a = normalizedR.multiply(pQuat).multiply(normalizedR.inverse());
        return new Vector3(a.q1, a.q2, a.q3);
    }
}



module.exports = {
    Quaternion,
    Vector3
}