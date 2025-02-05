const inverse = require("./inverse");
const product = require("./product");
const Quaternion = require("./Quaternion")

module.exports = function rotate(point, rQuat)
{
    let pQuat = new Quaternion(0,point.x,point.y,point.z);

   return product(product(inverse(rQuat), pQuat), rQuat);
}