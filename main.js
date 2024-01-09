document.write("50. to capitalize the first letter of each word in a given string."+"<br>");
function test50(str){
    str=str.split("");
    for(let i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].substring(1);
    }
    return str.join("");
}
document.write("The string :hii hello, Ans :"+test50("hii hello")+"<br><br>");