// Write a function named flipObject that receives an Object describing people and their jobs and returns
// a new object with the jobs as keys, and names as values.

const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
  const result = {};

  Object.entries(people).forEach(([name, job]) => {
    if (result[job] === undefined) {
      result[job] = [];
    }

    result[job].push(name);
  });

  return result;
}

console.log(flipObject(people));
