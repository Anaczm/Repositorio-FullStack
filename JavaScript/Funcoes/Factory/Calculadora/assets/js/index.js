// Calculadora utilizando factory function

const createCalculator = () => {

    // Atributos
    return{
        display: document.querySelector('.display'),

        start(){
            this.clickButtons()
            this.pressEnter()
        },

        // Métodos 
        clickButtons(){
        // this -> calculadora
            document.addEventListener('click', function (e) {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnStopDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteCaracter()
                }

                if (el.classList.contains('btn-eq')) {
                    this.performCount()
                }

            }.bind(this))
        },

        btnStopDisplay(value){
            this.display.value += value 
        },

        clearDisplay(){
            this.display.value = ''
        },

        deleteCaracter(){
            this.display.value = this.display.value.slice(0, -1)
        },

        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13)
                    this.performCount()
            })
        },

        performCount(){
            let count = this.display.value

            try {
                count = eval(count)

                if(!count){
                    alert('Conta inválida')
                    return
                }

                this.display.value = count  
            } catch (error) {
                alert('Conta inválida')
                return
            }
        },
    }
}


const calculator = createCalculator()
calculator.start()