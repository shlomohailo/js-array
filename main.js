var myArry = ['sara', 'likaunt', 'shlomo', 'hailo', 'shimon'];
console.log(myArry);
console.log(myArry[2]);
for (var index = 0; index < myArry.length; index++) {
    console.log(myArry[index]);

}

var numberArry = [348, 444, 165, 888, 236, 751, 123];;
console.log(numberArry);
console.log(numberArry[3]);
for (let index = 0; index < numberArry.length; index++) {
    console.log(numberArry[index]);

}


var numberannyarry = [10, 33, 50, 40, 22, 4, 1, 12, 30, 49];
var temparry = [];
var tempIndex = 0;
console.log(numberannyarry);
for (let index = 0; index < numberannyarry.length; index++) {
    if (numberannyarry[index] % 2 == 0) {
        temparry[tempIndex++] = numberannyarry[index]
        console.log(numberannyarry[2]);

        // console.log(numberannyarry[7])
    }

}

var namearry = ["hello", 2, "world", "jacob", 6, 7, "bey", 98]

console.log(namearry)
for (let i = 0; i < namearry.length; i++) {
    if (namearry[i] * 1 != namearry[i]) {
        console.log(namearry[i])
    }

}


var sameArry = [];
sameArry.push(9);
console.log(sameArry)
for (i = 0; i < 10; i++) {

    sameArry.push(i);
    console.log(sameArry[i]);
}

var numbersArry = [5, 3, 7, 8, 11]
var sum = 0;
console.log(numbersArry)
for (var i = 0; i < numbersArry.length; i++) {
    sum += numbersArry[i]

}
console.log(sum)
console.log((sum) / i)

var namesArry = ["sara", "likaunt", "shlomo", "hailo", "shimon"]
console.log(namesArry)
for (var i = 0; i < namesArry.length; i++) {
    console.log(namesArry[i])

}



var numArry = [1, 3, 5, 8, 9]
// console.log(numArry)
// var number1 = 0;
function numbersArgomints(x) {
    for (var i = 0; i < numArry.length; i++) {
        if (numArry[i] == x) {
            console.log(true)
        }
    // else   {

    //     console.log(false)
    // }
    }
}
numbersArgomints(9);



function doublenum() {
var numberDouble = [2, 5, 6, 7, 8, 9, 12, 15]
console.log(numberDouble)
    for (var i = 0; i < numberDouble.length; i++) {
        if (numberDouble[i] % 2 == 0)
            console.log(numberDouble[i])
    }
}
doublenum()



function sameShit() {
var numarry1 = [1, 3, 5];
var numarry2 = [2, 3, 4];
    if (numarry1.length == numarry2.length) {
        numarry1.push(...numarry2);
        console.log(numarry1, true);
    }
    else {
        console.log(false);
    }
}
sameShit();

function maximomNumber() {
    var maxAarry = [3, 4, 5, 8, 9, 1, 55, 77];

    console.log(Math.max(...maxAarry));
}
maximomNumber()




function minnumber() {
    var minArry = [2, 7, 8, 1, 9, 33];
    // console.log(minArry);
    console.log(Math.min(...minArry));
}
minnumber();



function sumNumber(array) {
    // var sumArry = [1, 5, 9, 13, 22, 4];
    var sumAll = 0;
    for (var i = 0; i < array.length; i++) {
        sumAll += array[i];
    }
    return(sumAll);

}
console.log(sumNumber([1, 5, 9, 13, 22, 4]))

function maxNumberMin(array) {

    console.log(Math.max(...array) * Math.min(...array))
}


maxNumberMin([7, 2, 3, 5])


var enenArray = [2, 7, 9, 1, 3];
var num = enenArray[0];
for (var i = 0; i < enenArray.length; i++) {
    if (num < enenArray){

    }

}


function saraArry ()
var sara = [1, 10, 3, 5, 9, 4, 8, 36, 88, 102];
var max = sara[0];
for (var i = 0; i < sara.length; i++) {
    if (sara[i] % 2 == 0) {
        console.log(sara[i])
        if (sara[i] > max) {
            max = sara[i]
        }
    }
}
console.log(max, i)



var i = 0;
var sum = 0;
var num = 0;
while (i < 5) {
    num = + prompt("s")
    sum += num;

    i++
console.log(sum)


}

var x = "*"
for (var i=0;i<16;i++)
{
    document.write(x+=x +"<br>")
}


function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]

    }
    console.log(sum)
}
sum([1, 2, 3])




function sumNumberandMin(array) {
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];

        }
        if (array[i] < min) {
            min = array[i];
        }

    }

    return min * max;
}

sumNumberandMin([2, 3, 6, 1])






function getMaxIndex(array) {
    var max = Number.MIN_SAFE_INTEGER;
    var sum ;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && max < array[i]) {

            sum =array[i]
        }
        console.log(sum,[i])
    }


}

getMaxIndex([2, 5, 6, 8])


function getMaxIndex2(array) {
    let max = Number.MIN_SAFE_INTEGER;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && max < array[i]) {
            max = array[i]
            index = i;
        }
    }

    return max;
}

 getMaxIndex2([2, 8, 6, 4])





function GetOddNumbers(array) {
    var addnumbers;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            sum += array[i]


        }
    } console.log(sum)

}
GetOddNumbers([2, 1, 5, 8, 7, 9]);



function getNames(names, name) {
    names.push(name);
    return names;
}
getNames(["jlacbj", "gfgdgd", "gdgfdd"], "shlomo")



function getEmail(emails, email) {
    emails.unshift(email);

    return emails;
}
getEmail(["email1", "email2", "email3"], "email4")


function getNumberToStart(arraynumbers, number) {
    if (number % 2 == 0) {
        arraynumbers.unshift(number);
        console.log(arraynumbers);
    }
    else {
        arraynumbers.push(number);
        console.log(arraynumbers);
    }

}
getNumberToStart([2, 4, 8, 9, 3], 119)



function getSpliceNum(arraynumbers, number) {
    for (var i = 0; i < arraynumbers.length; i++) {
        if (arraynumbers[i] == number) {

            arraynumbers.splice(i, 1);
        }
        if (arraynumbers[i] != number) {
            arraynumbers.push(number);
        }
    }
    console.log(arraynumbers);
}


getSpliceNum([2, 4, 6, 8], 1)
