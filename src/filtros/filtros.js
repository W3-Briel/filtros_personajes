let operadores = {
    "==": (attribute,value) => attribute == value,
    "!=": (attribute,value) => attribute != value,
    ">": (attribute,value) => attribute > value,
    "<": (attribute,value) => attribute < value,
    ">=": (attribute,value) => attribute >= value,
    "<=": (attribute,value) => attribute <= value,
    "includes":(attribute,value) => attribute.includes(value)
}

let makeFiltro = (attribute, operator, value)=>{
    return (p) => operadores[operator](p[attribute],value)
}

module.exports = { makeFiltro }