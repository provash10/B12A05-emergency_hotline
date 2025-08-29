# B12A05-emergency_hotline

6. 
1. getElementById         ---> use only unique element 
getElementsByClassName --->>> use to same element 
querySelector / querySelectorAll --->>> use matching element

2. Create ---> document.createElement()
   insert ----> parent.appendChild()
const newDiv = document.createElement("div")
document.body.appendChild(newDiv)

.body--->parent

3.  Event Bubbling --> after clicking it is going from child to parent

4. Event Delegation --> setup Event Delegation to control child element and useful for dynamic.

5. preventDefault() → stops default browser action.
   stopPropagation() → stops event from bubbling up the DOM.