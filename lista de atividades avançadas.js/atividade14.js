let soma = 0;
let qtdd =0;

for (let i = 0; i < 210; i++) {
    if (i% 6 == 0){
     qtdd++;
     soma = soma +i;
}
}
let media = soma/qtdd;
console.log("A media dos valores foi" ,media);
