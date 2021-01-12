import swap from './Swap';
export default function bubbleSort(array) {
    let frames = [];
    let newArray = array.slice();
    let sorted = false;
    let count = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < newArray.length - 1 - count; i++) {
            // frames.push([i, i + 1]);
            if (newArray[i] > newArray[i + 1]) {
                sorted = false;
                swap(i, i + 1, newArray);
                frames.push([i, i + 1]);
            }
        }
        count++;
    }
    return { frames, newArray };
}