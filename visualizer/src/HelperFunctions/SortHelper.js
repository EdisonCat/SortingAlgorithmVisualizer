import swap from '../SortingAlgorithms/Swap';
export default function sortHelper(func, array, time) {
    const obj = func(array);
    const frames = obj.frames;
    let newArray = array.slice();
    for (let i = 0; i < frames.length; i++) {
        const values = document.getElementsByClassName('values');
        const [firstIndex, secondIndex] = frames[i];
        setTimeout(() => {
            const firstValue = newArray[firstIndex];
            const secondValue = newArray[secondIndex];
            swap(firstIndex, secondIndex, newArray);
            values[firstIndex].style.height = `${secondValue}px`;
            values[secondIndex].style.height = `${firstValue}px`;
        }, i * time);
    }
}