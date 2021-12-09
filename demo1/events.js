const Emitter = require('events');


const emitter = new Emitter();

emitter.on('massage', (data, second, third) => {
    console.log('You get message' + data)
    console.log('Second argum' + second)
   
})

const MESSAGE = process.env.message || '';

if(MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'no message')
}