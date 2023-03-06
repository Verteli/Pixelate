// Your code here

// creating rows
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
//makes rows
makeRow();
makeRow();

// making rows
const button = document.getElementById("add-row");
button.addEventListener("click", makeRow);

// event delegation
table.addEventListener("click", colorize);

function colorize(event) {
  console.log("clicked!");
}

// event target, change event, colorType
let colorType = "red";

select.addEventListener("change", function (event) {
  colorType = event.target.value;
});

function colorize(event) {
  const target = event.target;
  if (target.className === colorType) {
    target.className = "";
  } else {
    target.className = colorType;
  }
}
