import state from './state.js'
import * as el from './elements.js'
import { stop } from './actions.js'
import { kichenTimer } from './sounds.js'

export function countdown(moreOrLessMinutes) {
    clearTimeout(state.countdownId)
    if(!state.isRunning){
        return
    }
    let minutes = moreOrLessMinutes ?? Number(el.minutes.textContent)
    let seconds =  Number(el.seconds.textContent)

    const endTimer = (minutes == 0) && (seconds == 0)
    if(endTimer){
        kichenTimer.play()
        setTimeout(() => stop(), 2500)
        return
    }
    seconds --
    if(seconds < 0){
        seconds = 59
        minutes --
    }
    if(minutes > 60){
        minutes = 60
    }
    if(minutes < 0){
        minutes = 0
    }
    

    
    upadateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}



export function upadateDisplay(minutes, secunds){
    minutes = minutes ?? state.minutes;
    secunds = secunds ?? state.secunds;

    el.minutes.textContent = String(minutes).padStart('2', "0");
    el.seconds.textContent = String(secunds).padStart('2', "0");

}
