const Quaternion = require("./Quaternion")

module.exports = function AxisAngleToQuat(angle, axis)
{
    let q0 = Math.cos(angle/2)
    let q1 = axis[0]*Math.sin(angle/2)
    let q2 = axis[1]*Math.sin(angle/2)
    let q3 = axis[2]*Math.sin(angle/2)

    return new Quaternion(q0,q1,q2,q3)
}