let operadores = {
    "==": (a,b) => a == b,
    "!=": (a,b) => a != b,
    ">": (a,b) => a > b,
    "<": (a,b) => a < b,
    ">=": (a,b) => a >= b,
    "<=": (a,b) => a <= b,
    "includes":(a,b) => Array.isArray(a) && a.includes(b)
}

let makeFiltro = (attribute, operator, value)=>{
    if(!operadores[operator]) throw new Error("operador no soportado")
    return (p) => operadores[operator](p[attribute],value)
}

module.exports = { makeFiltro }