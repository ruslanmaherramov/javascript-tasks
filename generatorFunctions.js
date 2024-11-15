// Write generator function getBatchOfImages, that takes two args: an array of image URLs and batchSize (optional);
// The function should:
// - yield sub arrays (batches) of the images array, each containing up to batchSize elements
// - continue yielding batches until all elements from the images array are processed

const allImages = Array.from(
  { length: 55 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
);

function* getBatchOfImages(images, batchSize = 10) {
  let currIndex = 0;
  while (currIndex < images.length) {
    yield images.slice(currIndex, currIndex + batchSize);
    currIndex += batchSize;
  }
}

const imageGen = getBatchOfImages(allImages);



// Implement a generator function rangeGenerator that takes two arguments start and end and yields numbers
// in the range[start, end]. If start is greater than end, the generator should yield numbers in a reverse order.

function* rangeGenerator(start, end) {
  if (start < end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  } else {
    for (let i = start; i >= end; i--) {
      yield i;
    }
  }
}

const genRange1 = rangeGenerator(1, 5);
const genRange2 = rangeGenerator(5, 1);
