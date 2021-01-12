export default function mergeSortHelper(func, array, time) {
    const obj = func(array);
    const frames = obj.frames;
    for (let i = 0; i < frames.length; i++) {
        const values = document.getElementsByClassName('values');
        setTimeout(() => {
            const [firstIndex, newValue] = frames[i];
            values[firstIndex].style.height = `${newValue}px`;
        }, i * time);
    }
}