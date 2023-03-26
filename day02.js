var n = 4;

for(var i=1; i<=n; i++){
    var sum = 0;
    for(var j=0; j<=i; j++){
        if(j%2 === 0){
            sum += j;
        }
    }
    console.log(sum);
}