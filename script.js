// work 4

// document.getElementById("submit").addEventListener("click", () => {
//     const mark = parseInt(document.getElementById("input").value);

//     if (mark > 100 || mark < 0) {
//         document.getElementById('result').innerHTML = 'Invalid Mark. Enter your mark between 0 to 100';
//     } else if (mark < 50) {
//         document.getElementById('result').innerHTML = 'You have Failed';
//     } else {
//         document.getElementById('result').innerHTML = 'Congratulations! You have Passed';
//     }
// });

// work 5

// document.getElementById("submit").addEventListener("click", () => {
//     const mark = parseInt(document.getElementById("input").value);
//     let gradeElement = document.getElementById('grade');
//     let grade = '';

//     if (mark > 100 || mark < 0) {
//         grade = 'Invalid Mark. Enter your mark between 0 to 100';
//     } else if (mark >= 90) {
//         grade = 'You have "A" grade';
//     } else if (mark >= 80) {
//         grade = 'You have "B" grade';
//     } else if (mark >= 70) {
//         grade = 'You have "C" grade';
//     } else if (mark >= 60) {
//         grade = 'You have "D" grade';
//     } else if (mark >= 50) {
//         grade = 'You have "E" grade';
//     } else {
//         grade = 'Yor are faild';
//     }
//     gradeElement.innerHTML = grade;
// });

// <!-- work 6-->

// document.getElementById("submit").addEventListener("click", () => {
//     const dayNumber = parseInt(document.getElementById("input").value);
//     let day;

//     switch (dayNumber) {
//         case 1:
//             day = "Sunday";
//             break;
//         case 2:
//             day = "Monday";
//             break;
//         case 3:
//             day = "Tuesday";
//             break;
//         case 4:
//             day = "Wednesday";
//             break;
//         case 5:
//             day = "Thursday";
//             break;
//         case 6:
//             day = "Friday";
//             break;
//         case 7:
//             day = "Saturday";
//             break;
//         default:
//             day = "Invalid Input. Please enter a number between 1 and 7.";
//     }

//     document.getElementById("day").innerHTML = day;
// });


// <!-- work 7-->

// document.getElementById("generateBtn").addEventListener("click", () => {
//     const number = parseInt(document.getElementById("numberInput").value);
//     const tableContainer = document.getElementById("tableContainer");

//     if (!isNaN(number)) {
//         let tableHTML = "<h2>Multiplication Table = " + number + "</h2><table>";
//         for (let i = 1; i <= 10; i++) {
//             tableHTML += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
//         }
//         tableHTML += "</table>";
//         tableContainer.innerHTML = tableHTML;
//     } else {
//         tableContainer.innerHTML = "<p>Please enter a valid number.</p>";
//     }
// });


/* <!-- work 8 sum of all numbers--> */

// document.getElementById("addBtn").addEventListener("click", () => {
//     const numberInput = document.getElementById("numberInput");
//     const numbersList = document.getElementById("numbersList");
//     const totalSpan = document.getElementById("total");

//     const number = parseFloat(numberInput.value);

//     if (!isNaN(number)) {
//         const numberItem = document.createElement("span");
//         numberItem.textContent = number + ", ";
//         numbersList.appendChild(numberItem);

//         const total = parseFloat(totalSpan.textContent) + number;
//         totalSpan.textContent = total;

//         numberInput.value = "";
//     } else {
//         alert("Please enter a valid number.");
//     }
// });

/* <!-- work 9 order number loop--> */

// document.getElementById("button").addEventListener("click", () => {
//     let output = "";
//     for (let i = 1; i <= 5; i++) {
//         let line = "";
//         for (let j = 1; j <= i; j++) {
//             line += j;
//         }
//         output += line + "<br>"; // Add line break after each inner loop
//     }
//     document.getElementById("output").innerHTML = output;
// });

/* <!-- work 10 arry--> */

// function swapArrays() {
//     var array1 = document.getElementById('array1').value.split(',');
//     var array2 = document.getElementById('array2').value.split(',');

//     var temp = array1;
//     array1 = array2;
//     array2 = temp;

//     document.getElementById('result').innerHTML = "Array 1 after swapping: " + array1.join(', ') + "<br>Array 2 after swapping: " + array2.join(', ');
// }

/* <!-- work 11 arry--> */

// function countEven() {
//     var inputArray = document.getElementById('arrayInput').value.split(',');
//     var evenCount = 0;
//     var hasNonNumeric = false;

//     for (var i = 0; i < inputArray.length; i++) {
//         var num = parseInt(inputArray[i]);
//         if (isNaN(num)) {
//             hasNonNumeric = true;
//             break;
//         }
//         if (num % 2 === 0) {
//             evenCount++;
//         }
//     }

//     if (hasNonNumeric) {
//         document.getElementById('result').innerHTML = "Please enter only numbers";
//     } else {
//         document.getElementById('result').innerHTML = "Count of even numbers: " + evenCount;
//     }
// }

// <!-- /* work 12 arry sort*/ -->

// function sortNumbers() {
//     var inputNumbers = document.getElementById('numbers').value;
//     var numbersArray = inputNumbers.split(',').map(Number); // Split the input string into an array of numbers
//     numbersArray.sort(function (a, b) { return a - b }); // Sort the array in ascending order
//     var sortedNumbersDiv = document.getElementById('sortedNumbers');
//     sortedNumbersDiv.innerHTML = 'Sorted Numbers: ' + numbersArray.join(', '); // Display the sorted numbers
// }


// <!-- /* work 13  is palindrome*/ -->

// function checkPalindrome() {
//     var inputString = document.getElementById('inputString').value;
//     var reversedString = inputString.split('').reverse().join('');
//     var resultDiv = document.getElementById('result');

//     if (inputString === reversedString) {
//         resultDiv.innerHTML = '"' + inputString + '" is a palindrome.';
//     } else {
//         resultDiv.innerHTML = '"' + inputString + '" is not a palindrome.';
//     }
// }

// <!-- /* work 14  is sum of two array*/ -->

// function calculateSum() {
//     var array1Input = document.getElementById('array1').value;
//     var array2Input = document.getElementById('array2').value;

//     var array1Lines = array1Input.split('\n');
//     var array2Lines = array2Input.split('\n');

//     var sumArray = [];

//     if (array1Lines.length !== array2Lines.length) {
//         document.getElementById('result').innerHTML = "Arrays must have the same number of elements.";
//         return;
//     }

//     for (var i = 0; i < array1Lines.length; i++) {
//         var array1Elements = array1Lines[i].trim().split(' ').map(Number);
//         var array2Elements = array2Lines[i].trim().split(' ').map(Number);

//         if (array1Elements.length !== array2Elements.length) {
//             document.getElementById('result').innerHTML = "Each line must have the same number of elements.";
//             return;
//         }

//         var sumLine = [];
//         for (var j = 0; j < array1Elements.length; j++) {
//             sumLine.push(array1Elements[j] + array2Elements[j]);
//         }
//         sumArray.push(sumLine);
//     }

//     document.getElementById('result').innerHTML = "Sum: <br>" + sumArray.map(line => line.join(' ')).join('<br>');
// }
