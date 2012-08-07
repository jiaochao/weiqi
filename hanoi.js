#!/home/jchao/pkgs/node/bin/node
var hanoiEnv = [[],[],[]];
var num = 0;
function hanoi_init(hanoiEnv, n){
    for( var i=0;i<n;++i){
        hanoiEnv[0][n-1-i] = i;
    }
}
function util_another(a,b){
    var tag = [0,0,0];
    tag[a] = 1;
    tag[b] = 1;
    var ret = '';
    for( x in tag )
    {
        if( tag[x] == 0 ){
            ret = x;
            break;
        }
    }
    //console.log('another p' + a + " p"+ b + " is p" + ret);
    return ret;
}
function hanoi_print(hanoiEnv){
    var s;
    for ( var i in hanoiEnv ){
        s = '';
        for( var j in hanoiEnv[i] ){
            s = s + " " + hanoiEnv[i][j];
        }
        console.log("p"+i+": " + s);
    }
}
function hanoi_move(hanoiEnv, a, b, n){

    if( n == 1){
        //console.log("move from p" + a + " to p" + b);
        hanoiEnv[b].push(hanoiEnv[a].pop());
        ++num;
        hanoi_print(hanoiEnv);
        return;
    }
    var c = util_another(a,b);
    hanoi_move(hanoiEnv, a, c, n-1);
    hanoi_move(hanoiEnv, a, b, 1);
    hanoi_move(hanoiEnv, c, b, n-1);
}
var n = 3;
hanoi_init(hanoiEnv, n);
hanoi_print(hanoiEnv);
hanoi_move(hanoiEnv, 0,2,n);
console.log(num);