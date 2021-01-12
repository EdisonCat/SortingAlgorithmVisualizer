import swap from './Swap';
export default function quickSort(array) {
    let frames = [];
    let newArray = array.slice();
    quickSortHelper(newArray, 0, newArray.length - 1, frames);
    return { frames, newArray };
}
const quickSortHelper = (newArray, start, end, frames) => {
    if (end <= start) return;
    let pivot = start, left = start + 1, right = end;
    while (left <= right) {
        if (newArray[pivot] < newArray[left] && newArray[right] < newArray[pivot]) {
            swap(left, right, newArray);
            frames.push([left, right]);
        }
        if (newArray[left] <= newArray[pivot]) left++;
        if (newArray[right] >= newArray[pivot]) right--;
    }
    swap(pivot, right, newArray);
    frames.push([pivot, right]);
    if (end - right - 1 < right - 1 - start) {
        quickSortHelper(newArray, right + 1, end, frames);
        quickSortHelper(newArray, start, right - 1, frames);
    }
    else {
        quickSortHelper(newArray, start, right - 1, frames);
        quickSortHelper(newArray, right + 1, end, frames);
    }
}