const listeners = {
    temperature: [],
    humidity: []
}

const subscribe = (listener, type) => {
    listeners[type].push(listener)
}

const unsubscribe = (removedListener, type) => {
    listeners[type] = listeners[type].filter(listener => 
        listener !== removedListener)
    }

const notify = (value, type) => {
    listeners[type].forEach(listener => {
        listener(value)
    })
}

module.exports = {
    subscribe, unsubscribe, notify
}
