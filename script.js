// for gallery on home page
// when user clicks on prev/next icons, cycle through images

//created index variable and set it at 0
let index = 0;
// created an array of images
const images = ["./assets/gallery-image-3.jpg", "./assets/gallery-image-1.jpg", "./assets/gallery-image-2.jpg"];
// created a variable to hold first-image id
const imageContainer = document.getElementById("image-one")

//created a function with if/else statement. if index is less than the length of the arry -1 (because the length is = 3 but the array is 0, 1, 2) else set the index back to 0. then added the image by setting the src attribute. repeated for the previous button but decreased the number so that it went in reverse!
const getNextImage = function () {
  if (index < images.length - 1) {
    index++;
    console.log(images.length)
  } else {
    index = 0;
  }
  console.log(index)
  imageContainer.setAttribute("src", images[index])
  
}

const getPreviousImage = function () {
  if (index > 0) {
    index--;
    console.log(index)
  }  else {
    index = 2;
  }
  
  imageContainer.setAttribute("src", images[index])
}

// added click event listeners onto the element and filled the empty function with the next and prev button fucntions
document.getElementById("next-button").addEventListener("click", getNextImage)
document.getElementById("previous-button").addEventListener("click", getPreviousImage)

