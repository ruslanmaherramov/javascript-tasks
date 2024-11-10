// 1
// Write a function, showNumberTrivia, that makes a request to the Numbers API (http://numbersapi.com)
// to get trivia about your favorite number. (Make sure you get back JSON — you may need to look at the documentation
// of the API to see how to do this: Details.) Log the piece of trivia to the console.

// 2
// Have a “race”: make a new function, showNumberRace, that asks for trivia about four different numbers
// (using four separate requests), but, as soon as one request returns, log the piece of trivia for the winning
// number to the console.

// 3
// Get all: make a new function, showNumberAll. that asks for trivia about different numbers.
// Make all the requests at the same time, but handle them once all requests are completed.
// However, at least one of the “numbers” you use should be an invalid thing, like the string “WRONG”.
// Log to the console the array of trivia for responses with a successful status code, and the array of error messages
// for the responses with a failed status code.

// 4
// Write a function, main, which calls all three of those functions, in order, moving onto the next function only
// after the current function fully completes.

const BASE_URL = "http://numbersapi.com";

// 1
async function showNumberTrivia(num) {
  const response = await fetch(`${BASE_URL}/${num}?json`);
  const triviaData = await response.json();
  console.log('showNumberTrivia: ', triviaData.text);
}

// 2
async function showNumberRace(nums) {
  const respPromises = nums.map(num => fetch(`${BASE_URL}/${num}?json`));
  const winResponse = await Promise.race(respPromises);
  const winData = await winResponse.json();

  console.log('showNumberRace:', winData.text);
}

// 3
async function showNumberAll(nums) {
  const responsePromises = nums.map(num => fetch(`${BASE_URL}/${num}?json`));
  const settledFetchResponses = await Promise.allSettled(responsePromises);

  // handle ok responses
  const okResponses = settledFetchResponses.filter(res => res.status === 'fulfilled' && res.value.ok === true);
  const okJsonPromises = okResponses.map(res => res.value.json());
  const okNumberData = await Promise.all(okJsonPromises);
  const okFacts = okNumberData.map(item => item.text);
  console.log('showNumberAll fulfilled: ', okFacts);

  // handle not ok responses
  const errorResponses = settledFetchResponses
    .filter(res => res.status === 'fulfilled' && res.value.ok === false)
    .map(item => `${item.value.status}: ${item.value.statusText}`);
  console.log('showNumberAll rejected: ', errorResponses);
}

// 4
async function main() {
  await showNumberTrivia(2);
  await showNumberRace([2,5,8]);
  await showNumberAll([1,3,6,'WRONG']);
}

main();
