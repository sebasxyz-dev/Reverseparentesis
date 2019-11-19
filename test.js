const llamado = require('./subfunciones')

let chai = require ("chai");
var expect = chai.expect;

function StringParethesisReverse(cadena) {
        let apilar = [[]];
        for(let i=0; i<cadena.length; i++){
            if(cadena[i] === "("){
                apilar = llamado.apilar1(apilar);//.push([]);
                console.log(apilar)
            } else if (cadena[i] !== ")"){
                apilar[apilar.length-1].push(cadena[i]);
                console.log(apilar)
            } else {
                apilar[apilar.length-1].reverse();
                console.log(apilar)
                if(apilar[apilar.length-2]) apilar[apilar.length-2] = apilar[apilar.length-2].concat(apilar.pop());
                console.log(apilar)
            }
        }
        console.log(apilar[0].join(""));
        return apilar[0].join("");
        
}




describe ('StringParethesisReverse', function(){
    
    it ('Should return abcba when value is ab(abc)', function(){
        var result = StringParethesisReverse("ab(abc)");
        expect(result).to.equal('abcba')
    });

    it ('Should return 12345 when value is 12(543)', function(){
        var result = StringParethesisReverse("12(543)");
        expect(result).to.equal('12345')
    }); 

    
    it ('Should return casoldra when value is cas(ar(old))', function(){
        var result = StringParethesisReverse("cas(ar(old))");
        expect(result).to.equal('casoldra')
    }); 

})
