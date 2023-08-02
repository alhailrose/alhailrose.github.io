// Toggle and responsive nav
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  // Menambahkan event listener pada dokumen secara keseluruhan
  document.addEventListener("click", (event) => {
    const isClickedInsideNav = navLists.contains(event.target);
    const isClickedInsideBurger = burger.contains(event.target);

    // Jika klik terjadi di luar menu dan burger, maka remove toggle
    if (!isClickedInsideNav && !isClickedInsideBurger) {
      navLists.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
    }
  });
};

// Memanggil fungsi navSlide agar dapat berjalan
navSlide();

// Clear form before unload

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

//
// const colors = [
//   "#FF5733",
//   "#FFBD33",
//   "#33FF57",
//   "#33FFBD",
//   "#5733FF",
//   "#BD33FF",
//   "#FF3373",
//   "#FF3333",
//   "#FF5733",
//   "#FF8533",
//   "#FFE533",
//   "#B1FF33",
// ];

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// function changeTextAndColor() {
//   const spanElement = document.getElementById("changingText");
//   const textOptions = [
//     "PROGRAMMER",
//     "DEVELOPER",
//     "CODER",
//     "LAZIER",
//     "ENGINEER",
//   ];
//   const newText = textOptions[Math.floor(Math.random() * textOptions.length)];
//   const newColor = getRandomColor();

//   spanElement.style.opacity = 0; // Fade out
//   setTimeout(() => {
//     spanElement.textContent = newText;
//     spanElement.style.color = newColor;
//     spanElement.style.opacity = 1; // Fade in
//   }, 500); // Wait for the fade out to complete before changing text and color
// }

// // Change the text and color automatically every 2 seconds
// setInterval(changeTextAndColor, 2000);

var typing = new Typed(".typing", {
  strings: ["Programmer", "Developer", "Engineer", "Try To Move On Person"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
