let randomNumber = Math.floor(Math.random() * 100) + 1
      const guesses = document.querySelector('.guesses')
      const lastResult = document.querySelector('.lastResult')
      const lowOrHigh = document.querySelector('.lowOrHigh')

      const guessSubmit = document.querySelector('.guessSubmit')
      const guessField = document.querySelector('.guessField')

      let guessCount = 1
      let resetButton

      function checkGuess() {
         let userGuess = Number(guessField.value)
         if (guessCount === 1) {
            guesses.textContent = 'Предыдущие докадки: '
         }
         guesses.textContent += userGuess + ' '

         if (userGuess === randomNumber) {
            lastResult.textContent = 'Поздравляю! Вы правы!'
            lastResult.style.backgroundColor = 'green'
            lowOrHigh.textContent = ''
            setGameOver()
         } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!!'
            setGameOver()
         } else {
            lastResult.textContent = 'Неправильно!'
            lastResult.style.backgroundColor = 'red'
            if (userGuess < randomNumber) {
               lowOrHigh.textContent = 'Число слишком низкое!'
            } else if (userGuess > randomNumber) {
               lowOrHigh.textContent = 'Число слишком высокое!'
            }
         }
         
         guessCount++
         guessField.value = ''
         guessField.focus()
      }
      
      guessSubmit.addEventListener('click', checkGuess)

      function setGameOver() {
         guessField.disabled = true
         guessSubmit.disabled = true
         resetButton = document.createElement('button')
         resetButton.textContent = 'Начни новую игру'
         document.body.appendChild(resetButton)
         resetButton.addEventListener('click', resetGame)
      }

      function resetGame() {
         guessCount = 1

         const resetParas = document.querySelectorAll('.resultParas p')
         for (let i = 0 ; i < resetParas.length ; i++) {
            resetParas[i].textContent = ''
         }
         resetButton.parentNode.removeChild(resetButton)

         guessField.disabled = false
         guessSubmit.disabled = false
         guessField.value = ''
         guessField.focus()

         lastResult.style.backgroungColor = 'white'

         randomNumber = Math.floor(Math.random() * 100) + 1
      }