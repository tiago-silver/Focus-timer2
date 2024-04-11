import * as sounds from "./elements.js";
import * as actions from "./actions.js";

export function registerControls(){
    sounds.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        
        if(typeof actions[action] != "function"){
            return
        }
        actions[action]()
    })
}

export function registerSounds(){
    sounds.timerSounds.addEventListener("click", (event) =>{
        const action = event.target.dataset.action

        if( typeof actions[action] != 'function'){
            return;
        }
        actions[action](event)
        

    })
}