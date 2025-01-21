var cardNum = 0

var events = [];
var descriptions = [];

var itemTitles = []
var itemDates = []
var itemContents = []
var itemLinks = []

//localStorage.setItem("itemTitles", itemTitles)
//localStorage.setItem("itemDates", itemDates)
//localStorage.setItem("itemContents", itemContents)
//localStorage.setItem("itemLinks", itemLinks)

var itemnum = 0

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var user;

var profileClickCount = 0;
var quoteClickCount = 0;
var emojiClickCount = 0;

let retString = localStorage.getItem("quotes")
let retUser = localStorage.getItem("user")


if (retString != null) {
    events = JSON.parse(retString)
}

retString = localStorage.getItem("dates")

if (retString != null) {
    descriptions = JSON.parse(retString)
}

retString = localStorage.getItem("itemTitles")

if (retString != null) {
    itemTitles = JSON.parse(retString)
}

retString = localStorage.getItem("itemContents")

if (retString != null) {
    itemContents = JSON.parse(retString)
}

retString = localStorage.getItem("itemDates")

if (retString != null) {
    itemDates = JSON.parse(retString)
}

retString = localStorage.getItem("itemLinks")

if (retString != null) {
    itemLinks = JSON.parse(retString)
}

if (retUser != null) {
    user = JSON.parse(retUser)
} else {
    user = "you"
}

for (let i = 0; i < itemTitles.length; i++) {
  itemnum++;
  const thecard = document.createElement("div");
  thecard.classList.add("card")
  thecard.id = "card" + itemnum.toString()
  document.getElementById("items").appendChild(thecard);
  const thetitle = document.createElement("h2");
  thetitle.innerHTML = itemTitles[i]
  document.getElementById("card" + itemnum.toString()).appendChild(thetitle)
  const thecontent = document.createElement("p")
  thecontent.innerHTML = itemContents[i]
  document.getElementById("card" + itemnum.toString()).appendChild(thecontent)
  const thedate = document.createElement("p")
  thedate.innerHTML = itemDates[i]
  document.getElementById("card"+ itemnum.toString()).appendChild(thedate)
  const thelink = document.createElement("a")
  thelink.href = itemLinks[i]
  thelink.innerHTML = "view"
  document.getElementById("card"+itemnum.toString()).appendChild(thelink)
} 

var card = document.getElementById('card')

document.getElementById("greeting").innerHTML = "Good morning, " + user + "!"

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function nextCard() {
  cardNum = cardNum + 1
  if (events[cardNum%(events.length)]==undefined) {
    document.getElementById("events-title").innerHTML = "You have no quotes yet :(("
    document.getElementById("events-content").innerHTML = "Add one!!"
  } else {
  document.getElementById("events-title").innerHTML = events[cardNum%(events.length)]
  document.getElementById("events-content").innerHTML = descriptions[cardNum%(events.length)]
  }
}

function prevCard() {
  if (cardNum == 0) {
    cardNum = events.length
  } else {
    cardNum = cardNum - 1
  }
  if (events[cardNum%(events.length)]==undefined) {
    document.getElementById("events-title").innerHTML = "You have no quotes yet :(("
    document.getElementById("events-content").innerHTML = "Add one!!"
  } else {
  document.getElementById("events-title").innerHTML = events[cardNum%(events.length)]
  document.getElementById("events-content").innerHTML = descriptions[cardNum%(events.length)]
  }
}

function addUser() {
    x = document.getElementById("userText");
    y = document.getElementById("userButton")
    user = x.value
    console.log(user)
    document.getElementById("greeting").innerHTML = "Good morning, " + user + "!"
    x.style.display = "none"
    y.style.display = "none"
    x.value = ""
    let string = JSON.stringify(user)
    localStorage.setItem("user", string)
}

function showAdd() {
    quoteClickCount++;
    x = document.getElementById("quoteText");
    y = document.getElementById("addButton");
    if ((quoteClickCount%2)==0) {
      x.style.display = "none"
      y.style.display = "none"
    } else {
      x.style.display = "inline-block"
      y.style.display = "inline-block"
    }
}

function showUser() {
    profileClickCount++;
    x = document.getElementById("userText");
    y = document.getElementById("userButton");
    if ((profileClickCount%2)==0) {
      x.style.display = "none"
      y.style.display = "none"
    } else {
      x.style.display = "inline-block"
      y.style.display = "inline-block"
    }
}

function showEmojis() {
  x = document.getElementById("emojiText")
  emojiClickCount++;
  if ((emojiClickCount%2)==0) {
    x.style.display = "none"
  } else {
    x.style.display = "inline-block"
  }
}

function add() {
    x = document.getElementById("quoteText");
    y = document.getElementById("addButton")
    events.push(x.value)
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    date = months[month] + " " + day + ", " + year
    console.log(date)
    descriptions.push(date)
    x.style.display = "none"
    y.style.display = "none"
    x.value = ""
    let string = JSON.stringify(events)
    localStorage.setItem("quotes", string)
    string = JSON.stringify(descriptions)
    localStorage.setItem("dates", string)
    console.log(descriptions)
}

function deleteQuote() {
    if (cardNum > events.length) {
        events.splice(cardNum%(events.length), 1)
    } else {
        events.splice(cardNum, 1)
    }
    cardNum = 0;
    document.getElementById("events-title").innerHTML = "Your Quote Has Been Deleted"
    document.getElementById("events-content").innerHTML = "Add another !!"
    let string = JSON.stringify(events)
    localStorage.setItem("quotes", string)
    string = JSON.stringify(descriptions)
    localStorage.setItem("dates", string)
    console.log(events)
}

function addItem() {
  itemnum++;
  let x = document.getElementById("itemTitle")
  let y = document.getElementById("itemContent")
  let z = document.getElementById("itemDue")
  let q = document.getElementById("itemLink")
  itemTitles.push(x.value)
  itemContents.push(y.value)
  itemDates.push(z.value)
  itemLinks.push(q.value)
  const thecard = document.createElement("div");
  thecard.classList.add("card")
  thecard.id = "card" + itemnum.toString()
  document.getElementById("items").appendChild(thecard);
  const thetitle = document.createElement("h2");
  thetitle.innerHTML = x.value;
  document.getElementById("card" + itemnum.toString()).appendChild(thetitle)
  const thecontent = document.createElement("p")
  thecontent.innerHTML = y.value;
  document.getElementById("card" + itemnum.toString()).appendChild(thecontent)
  const thedate = document.createElement("p")
  thedate.innerHTML = z.value;
  document.getElementById("card"+ itemnum.toString()).appendChild(thedate)
  const thelink = document.createElement("a")
  thelink.href = q.value
  thelink.innerHTML = "view"
  document.getElementById("card" + itemnum.toString()).appendChild(thelink)
  let a = JSON.stringify(itemTitles)
  localStorage.setItem("itemTitles", a)
  let b = JSON.stringify(itemContents)
  localStorage.setItem("itemContents", b)
  let c = JSON.stringify(itemDates)
  localStorage.setItem("itemDates", c)
  let d = JSON.stringify(itemLinks)
  localStorage.setItem("itemLinks", d)
  x.value = ""
  y.value = ""
  q.value = ""
}
