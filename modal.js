// let imageContainer = document.querySelectorAll(".image-container img")
// let popupImage = document.querySelector(".popup-image")
// let popupImageImg = document.querySelector(".popup-image img")
// let popupImageSpan = document.querySelector(".popup-image span")

// imageContainer.forEach(image =>{
//     image.onclick = () =>{
//         popupImage.style.display = "block"
//         popupImageImg.src = image.getAttribute("src")
//     }
// })
// document.querySelector(".popup-image span").onclick = () => {
//     document.querySelector(".popup-image").style.display = "none"
// }



(document.querySelectorAll(".image-container img")).forEach(image =>{
    image.addEventListener("click", () => {
        // console.log(document.querySelector(".popup-image"))
        document.querySelector(".popup-image").style.display = 'block'
        document.querySelector(".popup-image img").src = image.getAttribute('src')
    })
})

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none'
}

