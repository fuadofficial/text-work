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

document.getElementById("submit").addEventListener("click", () => {
    const mark = parseInt(document.getElementById("input").value);
    let gradeElement = document.getElementById('grade');
    let grade = '';

    if (mark > 100 || mark < 0) {
        grade = 'Invalid Mark. Enter your mark between 0 to 100';
    } else if (mark >= 90) {
        grade = 'You have "A" grade';
    } else if (mark >= 80) {
        grade = 'You have "B" grade';
    } else if (mark >= 70) {
        grade = 'You have "C" grade';
    } else if (mark >= 60) {
        grade = 'You have "D" grade';
    } else if (mark >= 50) {
        grade = 'You have "E" grade';
    } else {
        grade = 'Yor are faild';
    }
    gradeElement.innerHTML = grade;
});