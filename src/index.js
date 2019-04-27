document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)
  showGifts()
})

function showGifts() {
  giftNode = document.querySelector('.gift-list')
  for (let i = 0; i < gifts.length; i++) {
    console.log(gifts[i])
    let gift = document.createElement('li')
    gift.innerText = gifts[i].name
    giftNode.appendChild(gift)
    let image = document.createElement('img')
    image.src = gifts[i].image
    gift.appendChild(image)
  }
}
