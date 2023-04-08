import { Observable, Subscriber } from 'rxjs';

const observable1$ = new Observable<any>((Subscriber) => {
  Subscriber.next('Alice');
  setTimeout(() => Subscriber.next('Ben'), 2000);
  setTimeout(() => Subscriber.next('Charlie'), 4000);
  setTimeout(() => Subscriber.next('Derren'), 6000);
  setTimeout(() => Subscriber.next('Dsouza'), 8000);
});

// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   setTimeout(() => subscriber.next('Ben'), 2000);
//   setTimeout(() => subscriber.next('Charlie'), 4000);
// });

// console.log('Subscription 1 starts');
// observable$.subscribe((value) => console.log('Subscription 1:', value));

// setTimeout(() => {
//   console.log('Subscription 2 starts');
//   observable$.subscribe((value) => console.log('Subscription 2:', value));
// }, 1000);

//const reference = observable1$.subscribe((value) => console.log(value));

// setTimeout(() => {
//   reference.unsubscribe();
// }, 5000);
