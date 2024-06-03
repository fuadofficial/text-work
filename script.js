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

document.getElementById("addBtn").addEventListener("click", () => {
    const numberInput = document.getElementById("numberInput");
    const numbersList = document.getElementById("numbersList");
    const totalSpan = document.getElementById("total");

    const number = parseFloat(numberInput.value);

    if (!isNaN(number)) {
        const numberItem = document.createElement("span");
        numberItem.textContent = number + ", ";
        numbersList.appendChild(numberItem);

        const total = parseFloat(totalSpan.textContent) + number;
        totalSpan.textContent = total;

        numberInput.value = "";
    } else {
        alert("Please enter a valid number.");
    }
});
