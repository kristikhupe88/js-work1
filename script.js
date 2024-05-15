//example1
let number = 100;

if (number < 50) {
    console.log ('"less than fifty"');
} else if (number > 20) {
    console.log ('"more than twenty"')
}
else {
    console.log ('error')
}

//example2

let firstname = 'მარიამ';
let result  = (firstname = 'მარიამ') ? true : false ;
console.log (result);

//example3

let newname = 'mariam' ;

switch (newname) {
    case 'mariam' :
        console.log ('true');

        break;

        default :
        console.log ('false');
        break;
}
