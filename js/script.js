//click heart
function increaseHeart() {
    const heartCount = document.getElementById('navbar-heart-number')
    let currentHeart = parseInt(heartCount.innerText)
    currentHeart += 1
    heartCount.innerText = currentHeart
    console.log('Current heart:', currentHeart)
}

// Coins element, call button, History,clear
const coinElement = document.getElementById("navbar-coin-number");
const callButtons = document.querySelectorAll(".call-btn");
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history-btn");

// for Loop
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let currentCoins = parseInt(coinElement.innerText);

    if (currentCoins <= 20) {
      alert("Conied Finished!");
      return;
    }

    coinElement.innerText = currentCoins - 20;

    // Service name & number showing
    const card = callButtons[i].closest(".card"); 
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    alert(serviceName + " (" + serviceNumber + ")");


    // div create
    const historyItem = document.createElement("div");
    historyItem.className = "p-2 border rounded-md bg-gray-100 text-sm md:text-base";

    const now = new Date();
    const dateTime = now.toLocaleString();

    historyItem.innerText = serviceName + " - " + serviceNumber + " || " + dateTime;


    //append 
    historyList.appendChild(historyItem);
  });
}

//clear history
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = ""; 
  console.log("History cleared");
});
