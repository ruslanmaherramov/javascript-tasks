class Observable {
  constructor(setup) {
    this.subscriberCallback = setup;
  }

  subscribe(subscriber) {
    let isUnsubscribed = false;

    let sub = {
      unsubscribe: () => {
        isUnsubscribed = true;
      },
      next: (value) => {
        if (isUnsubscribed) return;

        if (typeof subscriber === 'function') {
          subscriber(value);
        } else {
          subscriber?.next?.(value)
        }
      },
      error: (error) => {
        if (isUnsubscribed) return;

        isUnsubscribed = true;
        subscriber?.error?.(error);
      },
      complete: () => {
        if (isUnsubscribed) return;

        isUnsubscribed = true;
        subscriber?.complete?.();
      }
    }

    this.subscriberCallback(sub);
    return sub
  }
}
