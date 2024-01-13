
const textElement = document.querySelector("#self");
const name = ['PRASHANT KUSHWAHA', ' A DEVELOPER'];


function animationText(index) {
    textElement.innerHTML = "I AM "+ name[index];
    setTimeout ( () => {
        animationText((index + 1) % name.length);
    }, 3000);

  
}
animationText(0);