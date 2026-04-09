// In JS, a Promise is an object representing
// the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

// There're 3 states when a promise runs.
// 1. Pending
// 2. Fulfilled / Resolved
// 3. Rejected

// Anonymous Arrow function ----- new Promise(() => {});
const myPromise = new Promise((resolve, reject) => {
    const status = true;

    if (status) {
        resolve('Operation ran successfully!');
    } else {
        reject('Operation fail!');
    }
}); //output  an object

// console.log(myPromise);

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Process finished.');
    });
