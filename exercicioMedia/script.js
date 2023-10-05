function media(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById ('txtn2')
    var tn3 = window.document.getElementById ('txtn3')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var media =  (n1 * 2 + n2 * 3 + n3 * 5) / (2 + 3 + 5)
    res.innerHTML = `A média dos valores é igual a ${media.toFixed(1)}!`  
    }