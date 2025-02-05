const length = require("./length");
const Quaternion = require("./Quaternion");

module.exports = function inverse(quat)
{
    let q0 = quat.q0/length(quat)**2;
    let q1 = -quat.q1/length(quat)**2;
    let q2 = -quat.q2/length(quat)**2;
    let q3 = -quat.q3/length(quat)**2;

    return new Quaternion(q0,q1,q2,q3)
}