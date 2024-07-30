const images = [
  { id: 1, src: "assets/image1.png", alt: "Image 1" },
  { id: 2, src: "assets/image2.png", alt: "Image 2" },
  { id: 3, src: "assets/image3.png", alt: "Image 3" },
  { id: 4, src: "assets/image4.png", alt: "Image 4" },
];

const mainImage = document.getElementById("main-image");
const buttons = document.querySelectorAll(".other-images button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.currentTarget;
    const clickedId = parseInt(clickedButton.getAttribute("data-id"));
    const mainId = parseInt(mainImage.getAttribute("data-id"));

    const clickedImage = images.find((img) => img.id === clickedId);
    const mainImageData = images.find((img) => img.id === mainId);

    if (clickedImage && mainImageData) {
      mainImage.src = clickedImage.src;
      mainImage.alt = clickedImage.alt;
      mainImage.setAttribute("data-id", clickedImage.id);

      const clickedImgElement = clickedButton.querySelector("img");
      clickedImgElement.src = mainImageData.src;
      clickedImgElement.alt = mainImageData.alt;
      clickedButton.setAttribute("data-id", mainImageData.id);
    }
  });
});
