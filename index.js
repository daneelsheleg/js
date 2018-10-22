/*var userPassword = prompt('введите пароль');
const originPassword = '1111';

if (userPassword === originPassword) {
    alert('ok');
} else{
    alert('not')
}*/


/*var one = prompt('one');
var two = prompt('two');
alert(parseInt(one)+parseInt(two));

var one = +prompt('one');
var two = +prompt('two');
alert(one+two)*/

/*let arr = [1, 2, 3];
for(let i=0; i < arr.length; i+=1){
    console.log(arr[i]+1);
}*/





/*
var massOne = prompt('введите массив').split(' ');

for (let i = 0; i < massOne.length; i +=1) {

    if (massOne[i] !== ''){
        console.log(parseInt(massOne[i])+1);
    }
}
*/

var str=eval(document.forma.x.value);
var k=0;
for (i=0;i<str.length;i++)
{if (str.charAt(i)=' ') {k++;}};
alert(k);

