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

//<a href="#" id="acceptCookies">Accept Cookies</a>
const linkToAcceptCookies = document.createElement("a")
linkToAcceptCookies.href = "#"
linkToAcceptCookies.id ="acceptCookies"
linkToAcceptCookies.textContent = "Accept Cookies"

footer.appendChild(cookiesNote);
footer.appendChild(linkToAcceptCookies);

//note for myself: add event listener on click (on the accept cookies link)...should show "Cookies were accepted. Would you like to revoke?"

document.addEventListener("click", function(event){
if (event.target && event.target.id === "acceptCookies"){

  footer.innerHTML = ""
//note for myself: removes what is already there changing it to my cokies acccepted message

 const myCookiesText = document.createElement("p");
  myCookiesText.textContent = "Cookies has been accepted! Would you like to change your preferences?";

//note: now adding my link to revoke
  const revokeLink = document.createElement("a");
    revokeLink.href = "#";
    revokeLink.id = "revokeCookies";
    revokeLink.textContent = "Change Cookie Preferences";

    footer.appendChild(myCookiesText);
    footer.appendChild(revokeLink);

  }

//note: adding same pattern from rovoke to accept cookies text by removing default event

if (event.target && event.target.id === "revokeCookies"){
  event.preventDefault();

  footer.innerHTML = ""

  const revokeCookiesText = document.createElement("p")
  revokeCookiesText.textContent = "This site uses cookies to improve your experience."

  const acceptLink = document.createElement("a");
    acceptLink.href = "#";
    acceptLink.id = "acceptCookies";
    acceptLink.textContent = "Accept Cookies";

    footer.appendChild(revokeCookiesText);
    footer.appendChild(acceptLink);

  }

})

const readingBtn = document.createElement("button");
readingBtn.textContent = "Toggle High-Contrast Mode for better reading experience";
readingBtn.id = "readingAssistBtn";

const section = document.querySelector(".readingSect");
section.appendChild(readingBtn);












