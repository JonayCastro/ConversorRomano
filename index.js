
function cambio(e){
    var res = document.getElementById('resultado');
    res.innerHTML = toRomanNumber(e.value);
    console.log(toRomanNumber(e.value));
}

function toRomanNumber(num) {
    let dig = [];
    let claves = [1,2,3,4,5,6,7,8,9,
                10,20,30,40,50,60,70,80,90,
                100,200,300,400,500,600,700,800,900,
                1000,2000,3000];
    let romValue = ['I','II','III','IV','V','VI','VII','VIII','IX',
    'X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
    'C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
    'M','MM','MMM'];
    let romanNum = [];
    num.toString().split('').reverse().forEach((item, i)=>{
        let valor = item*Math.pow(10,i);
        if(i >= 0) dig.push(valor);
    });
    dig.forEach((item)=>{
        claves.find((value, i)=>{
            if(item == value) {
                romanNum.push(romValue[i]);
            }
          })
    });
    
   return romanNum.reverse().join('').toString();
}