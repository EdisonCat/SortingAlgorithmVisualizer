import swap from './Swap';
export default function heapSort(array) {
    let newArray = array.slice();
    let frames = [];
    buildMaxHeap(newArray, frames);
    for (let i = newArray.length - 1; i > 0; i--) {
        swap(0, i, newArray);
        frames.push([0, i]);
        siftDown(0, i - 1, newArray, frames);
    }
    return { frames, newArray };
}

const buildMaxHeap = (newArray, frames) => {
    let parent = Math.round((newArray.length - 2) / 2);
    for (let i = parent; i >= 0; i--) siftDown(i, newArray.length - 1, newArray, frames);
}

const siftDown = (start, end, newArray, frames) => {
    let child1 = start * 2 + 1;
    while (child1 <= end) {
        let child2 = start * 2 + 2 > end ? -1 : start * 2 + 2;
        let index = child1;
        if (child2 !== -1 && newArray[child2] > newArray[child1]) index = child2;
        if (newArray[start] < newArray[index]) {
            swap(start, index, newArray);
            frames.push([start, index]);
            start = index;
            child1 = 2 * start + 1;
        }
        else return;
    }
}