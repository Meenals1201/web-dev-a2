console.log("let's do this")

const siteVisitorData = [
  { month: "April", visitors: 1000 },
  { month: "May", visitors: 1340 },
  { month: "June", visitors: 2306 },
  { month: "July", visitors: 2459 },
  { month: "August", visitors: 3468 },
  { month: "September", visitors: 5300 }
];

// console.log(siteVisitorData[1].month)
// console.log(siteVisitorData[2].visitors)

// const table = document.createElement("table");
// const mainRow = document.createElement("tr");

// const tableHeader = document.createElement("th");
// tableHeader.textContent = "Month";
// mainRow.appendChild(tableHeader);

// const tableHeader2 = document.createElement("th");
// tableHeader2.textContent = "Number of Visitors";
// mainRow.appendChild(tableHeader2);

// table.appendChild(mainRow);

////note for myslef:creating a loop to change any info in the main data in future

let table = "<table border='1'><tr><th>Month</th><th>Number of Visitors</th></tr>"

for (let i = 0; i < siteVisitorData.length; i++) {
  table += `<tr><td>${siteVisitorData[i].month}</td><td>${siteVisitorData[i].visitors}</td></tr>`;
}

table += "</table>";


const div = document.querySelector("div");
div.innerHTML = table;

//note for myself: div.innerHTML retreives data from the table if I do the other way round, it will take data from div which is empty, also innerHTML can ony be used if the element is inside the original html file, not created by js

const footer = document.querySelector(".cookiesFooter");

const cookiesNote = document.createElement("p")
cookiesNote.textContent = `This site uses cookies to improve your experience.`

footer.appendChild(cookiesNote);









