let romaiak = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function romai(n){
    const tomb=[];
    if (n>0) {
        for (let index = 1; index <= n; index++) {
            tomb.push(romaiSzamok(index));
        }
        return tomb.join(", ");
    }
    return "";
}

function romaiSzamok(n) {
    var ertek = [];
    if (n<=10) {
        return romaiak[n-1];
    }else {
        let text = n.toString();
        for (var i = 0, len = text.length; i < len; i += 1) {
            ertek.push(+text.charAt(i));
        }
        
        for (let index = 0; index < ertek.length; index++) {
            szam = ertek[index];
            if (szam < 5) {
                szam = romaiak[9];
                tizes = szam;
                
            }
            console.log(szam);
        }
        
        return tizes + romaiak[szam-1];
        
        //console.log(ertek);
    }

    /*
    var number = 12354987,
    output = [],
    sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    console.log(output);
    */

    /*if (n===1) {
        return romaiak[n-1];
    }else if (n===2) {
        return romaiak[n-1];
    }else if (n===3) {
        return romaiak[n-1];
    }else if (n===9) {
        return romaiak[n-1];
    }*/
    
}
