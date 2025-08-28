document.getElementById ("heart-icon-click")
.addEventListener('click', function(e){
    e.preventDefault   

    const heart = document.getElementById('navbar-heart-number').innerText
    const heartNumber = parseInt(document.getElementById('navbar-heart-number').innerText)

    const newHeartNumber = heartNumber + 1

    const totalHeart = document.getElementById('navbar-heart-number').innerText = newHeartNumber

    console.log(totalHeart)

    
})
