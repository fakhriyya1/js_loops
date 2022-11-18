// /---Task1---/
// var sum = 0;
// let multiply = 1;
// for (let a = 1; a < 10; a++){
//     sum += a;
//     multiply *= a;
// }
// console.log(`${sum}-cemi`);
// console.log(`${multiply}-hasili`);


// /---Task2---/
// let sum_even = 0;
// let mult_even = 1;
// for (let i = 1; i < 100; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//         sum_even += i;
//         mult_even *= i;
//     }
// }
// console.log(`${sum_even} - cut ededlerin cemi`);
// console.log(`${mult_even} - cut ededlerin hasili`);

// /---Task3---/
// var sum = 0;
// for (let i = 100; i < 1000; i++){
//     sum += i;
// }
// let ededi_orta = sum / (1000 - 100);
// console.log(`Ededi orta - ${ededi_orta}`);

// /---Task4---/
// console.log('Hem 7, hem 8-e bolunen 3 reqemli ededler:');
// for (let i = 100; i < 1000; i++){
//     if (i % 7 == 0) {
//         if (i % 8 == 0) {
//             console.log(i);
//         }
//     }
// }

// /---Task5---/
// var sum = 0;
// console.log('Hem 7, hem 8-e bolunen 3 reqemli ededlerin cemi:');
// for (let i = 100; i < 1000; i++){
//     if (i % 7 == 0) {
//         if (i % 8 == 0) {
//             sum += i;
//         }
//     }
// }
// console.log(sum);

// /---Task6---/
// console.log('Hem 7, hem 8-e bolunen ilk 3 reqemli eded:');
// for (let i = 100; i < 1000; i++){
//     if (i % 7 == 0) {
//         if (i % 8 == 0) {
//             console.log(i);
//             break;
//         }
//     }
// }

// /---Task7---/
// for (let i = 1; i < 100; i++){
//     let n = 0;

//     for (let j = 1; j <= i / 2; j++){
//         if (i % j == 0) {
//             n++;
//        }
//     }

//     if (i == 1) {
//         console.log('1 ne sade, ne de murekkeb ededdir.');
//     }

//     else if (n == 1 && i != 1) {
//         console.log(`${i}-sade ededdir.`);
//     }
        
//     else if (n > 1) {
//         console.log(`${i}-murekkeb ededdir.`);
//     }
// }

// /---Task8---/
// let n = 0;
// let num1 = +prompt('Eded daxil edin:');
// if (num1 == 1) {
//     console.log(`${num1} ne sade, ne de murekkeb ededdir.`);
// }
// else {
//     for (let i = 2; i < num1; i++){
//         if (num1 % i == 0) {
//             n++;
//         }
//     }
//     if (n > 0) {
//         console.log(`${num1} murekkeb ededdir`);
//     }
//     else {
//         console.log(`${num1} sade ededdir`);
//     }
// }

// /---Task9---/
// let isPrimary = true;
// let num = +prompt('Eded daxil edin:');
// for (let i = 2; i < num; i++){
//     if (num % i == 0) {
//         isPrimary = false;
//     }
// }

// if (isPrimary) {
//     console.log(`${num} sade ededdir`);
// }
// else {
//     console.log(`${num} murekkeb ededdir`);
// }

