const EventEmitter = require('events');

class MyClass extends EventEmitter {
    show(message){
        this.emit('show', `${message} ${Date.now()}`);
    }
}

const myClass = new MyClass();

myClass.on('show', data=>{
    console.log(data)
});

myClass.show('hello');
