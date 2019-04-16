b.onclick = function () {
  this.querySelector('.circle')
    .classList.add('active')
}

b.querySelector('.circle').addEventListener('webkitTransitionEnd', function () {
  this.classList.remove('active')
})
