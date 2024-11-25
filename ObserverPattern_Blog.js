/**
 * Implement a simple Observer pattern in JavaScript
 */

class Blog {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((item) => item !== subscriber)
  }

  publish(title) {
    this.subscribers.forEach((subscriber) => subscriber.notify(title));
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  notify(title) {
    console.log(`${this.name} received notification: New post published - ${title}`)
  }
}

const newBlog = new Blog();
const alex = new Subscriber('Alex');
const danilo = new Subscriber('Danilo');

newBlog.subscribe(alex);
newBlog.subscribe(danilo);
newBlog.publish('How to make ukrainian food');
newBlog.unsubscribe(danilo);
newBlog.publish('How to make italian food');
