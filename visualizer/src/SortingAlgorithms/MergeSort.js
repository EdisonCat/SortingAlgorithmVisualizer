export default function mergeSort(array) {
    let frames = [];
    let newArray = array.slice();
    mergeSortHelper(newArray, frames);
    return { frames, newArray };
}
const mergeSortHelper = (array, frames) => {
    let aux = array.slice();
    mergeHelper(array, aux, 0, array.length - 1, frames);
}
const mergeHelper = (array, aux, s, e, frames) => {
    if (e <= s) return;
    const mid = Math.floor((e + s) / 2);
    mergeHelper(aux, array, s, mid, frames);
    mergeHelper(aux, array, mid + 1, e, frames);
    merge(array, aux, s, mid, e, frames);
}
const merge = (array, aux, s, mid, e, frames) => {
    let i = s, j = mid + 1, k = s;
    while (i <= mid && j <= e) {
        if (aux[i] <= aux[j]) {
            frames.push([k, aux[i]]);
            array[k++] = aux[i++];
        }
        else {
            frames.push([k, aux[j]]);
            array[k++] = aux[j++];
        }
    }
    while (i <= mid) {
        frames.push([k, aux[i]]);
        array[k++] = aux[i++];
    }
    while (j <= e) {
        frames.push([k, aux[j]]);
        array[k++] = aux[j++];
    }
}