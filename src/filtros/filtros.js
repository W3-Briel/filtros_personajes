let operadores = {
    "==": (a,b) => a == b,
    "!=": (a,b) => a != b,
    ">": (a,b) => a > b,
    "<": (a,b) => a < b,
    ">=": (a,b) => a >= b,
    "<=": (a,b) => a <= b,
    "includes":(a,b) => a.includes(b)
}

let makeFiltro = (attribute, operator, value)=>{
    return (p) => operadores[operator](p[attribute],value)
}

module.exports = { makeFiltro }