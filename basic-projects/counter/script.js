// set inital value to zero
// create a variable to hold default value

let numValue = 0;

// select value and buttons
// const test  = document.getElementsByTagName("button");
// console.log(test)
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // console.log(styles)
    if (styles.contains("decrease")) {
      numValue--; //this decreases the value by one
    } else if (styles.contains("increase")) {
      numValue++; //increases value by one
    } else {
      numValue = 0; //assigns 0 to the value
    }

    if (numValue > 0) {
      value.style.color = "green";
    }
    if (numValue < 0) {
      value.style.color = "red";
    }
    if (numValue === 0) {
      value.style.color = "#222";
    }
    value.textContent = numValue;
  });
});
