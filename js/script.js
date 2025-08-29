//click heart
function increaseHeart() {
  const heartCount = document.getElementById('navbar-heart-number')
  let currentHeart = parseInt(heartCount.innerText)
  currentHeart += 1
  heartCount.innerText = currentHeart
  console.log('Current heart:', currentHeart)
}

// Coins element, call button, History,clear
const coinElement = document.getElementById("navbar-coin-number")
const callButtons = document.querySelectorAll(".call-btn")
const historyList = document.getElementById("history-list")
const clearBtn = document.getElementById("clear-history-btn")

// for Loop
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let currentCoins = parseInt(coinElement.innerText)

    if (currentCoins < 20) {
      alert("Conied Finished!")
      return;
    }

    coinElement.innerText = currentCoins - 20

    // Service name & number showing
    const card = callButtons[i].closest(".card");
    const serviceName = card.querySelector(".service-name").innerText
    const serviceNumber = card.querySelector(".service-number").innerText

    alert(serviceName + " (" + serviceNumber + ")")


    // div create
    const historyItem = document.createElement("div")
    historyItem.className = "p-2 border: 2px solid #D1D5D  bg-[#ffffff] shadow-md rounded-lg text-sm md:text-base"

    const now = new Date()
    const dateTime = now.toLocaleString()

    historyItem.innerText = serviceName + " - " + serviceNumber + " || " + dateTime


    //append 
    historyList.appendChild(historyItem)
  })
}

//clear history
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
  console.log("History cleared");
});


// copy btn
const copyCountElement = document.getElementById("navbar-copy-number")
const copyButtons = document.querySelectorAll(".copy-btn")

copyButtons.forEach(button => {
  button.addEventListener("click", function () {

    const card = button.closest(".card")
    const serviceNumber = card.querySelector(".service-number").textContent

    // clipboard copy
    navigator.clipboard.writeText(serviceNumber)
      .then(() => {
        alert(serviceNumber + " copied to clipboard !!")

        // navbar copy count
        let currentCount = parseInt(copyCountElement.textContent)
        copyCountElement.textContent = currentCount + 1

      })
      .catch(err => console.log("Copy failed:", err));
  });
});
