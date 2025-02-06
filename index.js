const { inverse, Quarternion, Vector3, AxisAngleToQuat } = require("./lib")

module.exports = require("./lib")
let p = new Vector3(0,1,0)
console.log(p.rotate(Quarternion.fromAngleAxis(Math.PI/4, [0,0,1])))
