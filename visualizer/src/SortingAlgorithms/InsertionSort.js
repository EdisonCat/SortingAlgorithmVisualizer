import swap from './Swap';
export default function insertionSort(array) {
    let frames = [];
    let newArray = array.slice();
    for (let i = 1; i < newArray.length; i++) {
        for (let j = i; j > 0; j--) {
            if (newArray[j] < newArray[j - 1]) {
                swap(j, j - 1, newArray);
                frames.push([j - 1, j]);
            }
        }
    }
    return { frames, newArray };
}