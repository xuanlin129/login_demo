const inputBoxs = document.querySelectorAll('.input-box')
const radioBoxs = document.querySelectorAll('.radio-box')
const login = document.getElementById('login')
const register = document.getElementById('register')

radioBoxs.forEach((radio, i) => {
  radio.addEventListener("click", () => {
    if (window.innerWidth > 576) {
      for (input of inputBoxs) {
        if (i === 0) {
          input.style.left = '40%'
        } else {
          input.style.left = '60%'
        }
        input.style.opacity = '1'
        input.style.zIndex = '999'
      }
      setTimeout(() => {
        for (radioBox of radioBoxs) {
          radioBox.style.opacity = '1'
          console.log('radio')
        }
        radio.style.opacity = '0'
      }, 1000)
      inputBoxs[i].style.opacity = '0'
      inputBoxs[i].style.zIndex = '0'
    } else {
      for (input of inputBoxs) {
        input.style.opacity = '1'
        input.style.zIndex = '999'
      }
    
      for (radioBox of radioBoxs) {
        radioBox.style.opacity = '1'
        radioBox.style.transform = 'translateY(0%)'
        console.log('radio')
      }
      radio.style.opacity = '0'
      radio.style.transform = 'translateY(100%)'
    
      inputBoxs[i].style.opacity = '0'
      inputBoxs[i].style.zIndex = '0'
    }
  })
})