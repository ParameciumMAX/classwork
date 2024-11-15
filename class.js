function brackerMatch(intputString)
{
    var opening=[];
    var isMatched = true;
    var symbol = intputString.charAt(i=0);
    while(isMatched && symbol != " " ){
        if(symbol == '{' || symbol == '(' || symbol == '[')
            opening.push(symbol);
        if(symbol == '}' || symbol == ')' || symbol == ']'){
            if(opening.length == 0 ){
                isMatched = false;
            }else{
                match = opening.pop();
                isMatched = (symbol == '}' && match == '{')||(symbol == ')' && match == '(')||(symbol == ']' && match == '[')
        }
    }
    symbol = intputString.charAt(++i);
}
    if(opening.length > 0 || !isMatched)
        return 'unmatched';
    else
        return 'matched';
}

var test ="{a = (1 + v(b[3 + c[4]]))";
var test2 ="{ a = (b[0) + 1]; }";
var test3 ="{{{[[0]]}}}";
console.log(brackerMatch(test));
console.log(brackerMatch(test2));
console.log(brackerMatch(test3));

