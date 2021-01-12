export default function swap(left, right, array) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}