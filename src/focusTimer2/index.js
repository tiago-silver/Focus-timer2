import * as events from './events.js';
import * as timer from './timer.js';

export function start() {

    timer.upadateDisplay()

    events.registerControls()
    events.registerSounds()
}


