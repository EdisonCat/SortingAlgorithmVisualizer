import swap from './Swap';
export default function selectionSort(array) {
    let frames = [];
    let newArray = array.slice();
    for (let i = 0; i < newArray.length; i++) {
        let k = i, j = i;
        for (; j < newArray.length; j++) {
            if (newArray[j] < newArray[k]) k = j;
        }
        swap(k, i, newArray);
        frames.push([i, k]);
    }
    return { frames, newArray };
}