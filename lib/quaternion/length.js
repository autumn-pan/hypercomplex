module.exports = function length(quat)
{
    return (quat.q0**2 + quat.q1**2 + quat.q2**2 + quat.q3**2)**0.5;
}