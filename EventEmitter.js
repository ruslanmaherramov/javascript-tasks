class EventEmitter {
  constructor() {
    this.events = {}
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const subscription = { callback };
    this.events[eventName].push(subscription);

    return {
      release: () => {
        const subs = this.events[eventName];
        const index = subs.indexOf(subscription);

        if (index !== -1) {
          subs.splice(index, 1);
        }
      }
    }
  }

  emit(eventName, ...args) {
    const subs = this.events[eventName];
    if (subs) {
      subs.forEach((sub) => sub.callback(...args));
    }
  }
}

// Usage
const emitter = new EventEmitter();

function log(...args) {
  console.log('LOG:', ...args);
}

const sub1 = emitter.subscribe('event1', log);
const sub2 = emitter.subscribe('event1', log);

emitter.emit('event1', 'hello', 42);
// LOG: hello 42
// LOG: hello 42

sub1.release();

emitter.emit('event1', 'bye'); // LOG: bye
