// // email form validation on blog and contact page
// const userEmail = document.getElementById("email-addr");

// userEmail.addEventListener("input", function (event) {
//   if (userEmail.validity.typeMismatch) {
//     userEmail.setCustomValidity("Please enter a valid email address!");
//   } else {
//     userEmail.setCustomValidity("");
//   }
// });

// for gallery on home page
// when user clicks on prev/next icons, cycle through images

const nextPrevIcons = document.querySelectorAll("button.previous, button.next");
console.log(nextPrevIcons)

document.getElementById("next-button").addEventListener("click", function () {
  console.log('i am being clicked!')
  
});

document.getElementById("previous-button").addEventListener("click", function () {
  console.log('i am being clicked!')
  
});

const galleryImages = document.querySelectorAll(".gallery-image");
const imgArray = Array.from(galleryImages);
console.log(imgArray);


// function changeImage() {

//   if (document.getElementById("image-one").src == "./assets/gallery-image-3.jpg") {
//     document.getElementById("image-one").src = "./assets/gallery-image-3.jpg";
//   }
//   else {
//     document.getElementById("image-two").src = "./assets/gallery-image-1.jpg";
//   }
// }
//when button is clicked, add new image

const images = ["./assets/gallery-image-3.jpg", "./assets/gallery-image-1.jpg", "./assets/gallery-image-2.jpg"];

console.log(images);

