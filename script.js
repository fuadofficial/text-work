
document.getElementById("submit").addEventListener("click", () => {
    const mark = parseInt(document.getElementById("input").value);

    if (mark > 100 || mark < 0) {
        document.getElementById('result').innerHTML = 'Invalid Mark. Enter your mark between 0 to 100';
    } else if (mark < 50) {
        document.getElementById('result').innerHTML = 'You have Failed';
    } else {
        document.getElementById('result').innerHTML = 'Congratulations! You have Passed';
    }
});
