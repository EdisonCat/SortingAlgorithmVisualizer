import React from 'react';
import './ControlComponent.css';
import bubbleSort from '../SortingAlgorithms/BubbleSort';
import insertionSort from '../SortingAlgorithms/InsertionSort';
import selectionSort from '../SortingAlgorithms/SelectionSort';
import quickSort from '../SortingAlgorithms/QuickSort';
import heapSort from '../SortingAlgorithms/HeapSort';
import mergeSort from '../SortingAlgorithms/MergeSort';
import mergeSortHelper from '../HelperFunctions/MergeSortHelper';
import sortHelper from '../HelperFunctions/SortHelper';
export default function ControlComponent(props) {
    const SELECTION_SORT_TIME = 10;
    const QUICK_SORT_TIME = 5;
    const TYPICAL_SORT_TIME = 1;
    const HEAP_SORT_TIME = 5;
    const MERGE_SORT_TIME = 5;
    return (
        <div className="control-component">
            <input type="range" max={200} min={3} onChange={(e) => { props.setLength(e.target.value); props.generateArray(props.length) }} />
            <button onClick={() => props.generateArray(props.length)}>Generate Random Array</button>
            <button onClick={() => mergeSortHelper(mergeSort, props.array, MERGE_SORT_TIME)}>Merge Sort</button>
            <button onClick={() => sortHelper(insertionSort, props.array, TYPICAL_SORT_TIME)}>Insertion Sort</button>
            <button onClick={() => sortHelper(bubbleSort, props.array, TYPICAL_SORT_TIME)}>Bubble Sort</button>
            <button onClick={() => sortHelper(selectionSort, props.array, SELECTION_SORT_TIME)}>Selection Sort</button>
            <button onClick={() => sortHelper(quickSort, props.array, QUICK_SORT_TIME)}>Quick Sort</button>
            <button onClick={() => sortHelper(heapSort, props.array, HEAP_SORT_TIME)}>Heap Sort</button>
        </div>
    );
}