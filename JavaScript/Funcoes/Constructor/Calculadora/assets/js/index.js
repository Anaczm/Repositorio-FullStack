// Calculadora utilizando constructor function

function Calculator () {
    this.display = document.querySelector('.display')
    
    this.start = () => {
        this.getClicks()
        this.getEnter()
    }

    this.getClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if (el.classList.contains('btn-num')) this.addNumberInDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del(el)
            if (el.classList.contains('btn-eq')) this.performCount(el)
        })
    }

    this.getEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode !== 13) return
            this.performCount()
        })
    }

    this.addNumberInDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }    

    this.clear = () => this.display.value = ''

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.performCount = () => {
        try {
            const count = eval(this.display.value)
            
            if(!count){
                alert('conta inválida')
                return
            }
            
        this.display.value = count
        } catch (error) {
            alert('conta inválida')
            return
        }
    }
}


const calculator = new Calculator()
calculator.start()