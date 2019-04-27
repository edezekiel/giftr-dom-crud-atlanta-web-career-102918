document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)
  showGifts()
})

function showGifts() {
  giftNode = document.querySelector('.gift-list')
  for (let i = 0; i < gifts.length; i++) {
    console.log(gifts[i])
  }
}
