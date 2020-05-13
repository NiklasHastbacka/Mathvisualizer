let mpiValue = document.getElementById('mpivalue')
let mraValue = document.getElementById('mravalue')

mpiValue.textContent = Math.PI
mraValue.textContent = Math.random()

let mrInput = document.getElementById('mrinputelement')
let mrValue = document.getElementById('mrvalue')

mrInput.addEventListener('keyup', () => {
    mrValue.textContent = Math.round(mrInput.value)
})

let mcInput = document.getElementById('mcinputelement')
let mcValue = document.getElementById('mcvalue')

mcInput.addEventListener('keyup', () => {
    mcValue.textContent = Math.ceil(mcInput.value)
})

let mfInput = document.getElementById('mfinput')
let mfValue = document.getElementById('mfvalue')

mfInput.addEventListener('keyup', () => {
    mfValue.textContent = Math.floor(mfInput.value)
})

let ma = document.getElementById('ma1')
let maValue = document.getElementById('mabvalue')

ma.addEventListener('keyup', () => {
    maValue.textContent = Math.abs(ma.value)
})

let mmi1 = document.getElementById('mmi1')
let mmi2 = document.getElementById('mmi2')
let mminvalue = document.getElementById('mminvalue')

mmi1.addEventListener('keyup', () => {
    mmi2.addEventListener('keyup', () => {
        mminvalue.textContent = Math.min(mmi1.value, mmi2.value)
    })
})

let mma1 = document.getElementById('mma1')
let mma2 = document.getElementById('mma2')
let mmaxvalue = document.getElementById('mmaxvalue')

mma1.addEventListener('keyup', () => {
    mma2.addEventListener('keyup', () => {
        mmaxvalue.textContent = Math.max(mma1.value, mma2.value)
    })
})