import * as timer from './timer.js';
import state from "./state.js"
import * as el from './elements.js'
import * as sounds from './sounds.js'

//Funções de controle
export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    sounds.buttonPress.play()
    timer.countdown()
}
export function stop(){
    state.isRunning = false 
    document.documentElement.classList.remove('running')
    timer.upadateDisplay()
    sounds.buttonPress.play()

}

export function increase(){
    console.log('Acrescentado')
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)


    minutes += 5
    minutes = minutes > 60 ? 60 : minutes
    
    timer.countdown(minutes)
    timer.upadateDisplay(minutes, seconds)

    sounds.buttonPress.play()
   

}
export function decrease(){
    console.log('decrescentado')
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    minutes -= 5
    minutes = minutes < 0 ? 0 : minutes

    timer.countdown(minutes)
    timer.upadateDisplay(minutes, seconds)

    sounds.buttonPress.play()
}

//Funções  controle de som
function changeSoundTimer(event, id){
    state.isSoundPlay = true
    const isExistSelectedClass = el.timerSounds.querySelector(".cardButtonsSelected")
    const currentRole = event.target;

    if(isExistSelectedClass) {
        if(isExistSelectedClass.classList.contains(`${id}`)){
            currentRole.classList.toggle("cardButtonsSelected")
            state.isSoundPlay = false
        }else{
            isExistSelectedClass.classList.remove("cardButtonsSelected")
            currentRole.classList.add("cardButtonsSelected")
        }
    }else{
        currentRole.classList.add("cardButtonsSelected")
    }
}

export function toggleForestSound(event){
    const idClass = "ph-tree"
    
    changeSoundTimer(event, idClass)

    if(state.isSoundPlay){
        sounds.forestSound.play()
        sounds.rainSound.pause()
        sounds.shopSound.pause()
        sounds.fireSound.pause()
    }else{
        sounds.forestSound.pause()
    }
}

export function toggleRainSound(event){
    const idClass = "ph-cloud-rain"

    changeSoundTimer(event, idClass)

    if(state.isSoundPlay){
        sounds.rainSound.play()
        sounds.shopSound.pause()
        sounds.fireSound.pause()
        sounds.forestSound.pause()
    }else{
        sounds.rainSound.pause()
    }
}
export function toggleShopSound(event){
    const idClass = "ph-storefront"
    
    changeSoundTimer(event, idClass)

    if(state.isSoundPlay){
        sounds.shopSound.play()
        sounds.fireSound.pause()
        sounds.forestSound.pause()
        sounds.rainSound.pause()
    }else{
        sounds.shopSound.pause()
    }
}
export function toggleFireSound(event){
    const idClass = "ph-flame"

    changeSoundTimer(event, idClass)

    if(state.isSoundPlay){
        sounds.fireSound.play()
        sounds.forestSound.pause()
        sounds.rainSound.pause()
        sounds.shopSound.pause()
    }else{
        sounds.fireSound.pause()
    }
}
