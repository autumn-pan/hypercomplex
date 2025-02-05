const Quaternion = require("./Quaternion")

module.exports = function product(quat1, quat2)
{
    let q0 = quat1.q0*quat2.q0 - quat1.q1*quat2.q1 - quat1.q2*quat2.q2 - quat1.q3*quat2.q3
    let q1 = quat1.q0*quat2.q1 + quat1.q1*quat2.q0 + quat1.q2*quat2.q3 - quat1.q3*quat2.q2
    let q2 = quat1.q0*quat2.q2 - quat1.q1*quat2.q3 + quat1.q2*quat2.q0 + quat1.q3*quat2.q1
    let q3 = quat1.q0*quat2.q3 + quat1.q1*quat2.q2 - quat1.q2*quat2.q1 + quat1.q3*quat2.q0

    return new Quaternion(q0,q1,q2,q3)
}