var cardNum = 0

var events = [];
var descriptions = [];

var itemTitles = []
var itemDates = []
var itemContents = []


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

if (retUser != null) {
    user = JSON.parse(retUser)
} else {
    user = "you"
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
  x = document.getElementById("itemTitle")
  y = document.getElementById("itemContent")
  z = document.getElementById("itemDue")
  itemTitles.push(x.value)
  itemContents.push(y.value)
  itemDates.push(z.value)
  const para = document.createElement("div");
  para.classList.add("card")
  document.getElementById("items").appendChild(para);
  let a = JSON.stringify(itemTitles)
  localStorage.setItem("itemTitles", a)
  let b = JSON.stringify(itemContents)
  localStorage.setItem("itemContents", b)
  let c = JSON.stringify(itemDates)
  localStorage.setItem("itemDates", c)
  x.value = ""
  y.value = ""
}
