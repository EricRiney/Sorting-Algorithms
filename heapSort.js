// To whom it may concern, 
// I am so so sorry.

function heapSort(array) {
    var len = array.length,
        end = len - 1;

    heapify(array, len);

    while (end > 0) {
        swap(array, end--, 0);
        siftDown(array, 0, end);
    }
    return array;
}

function heapify(array, len) {
    // break the array into root + two sides, to create tree (heap)
    var mid = Math.floor((len - 2) / 2);
    while (mid >= 0) {
        siftDown(array, mid--, len - 1);
    }
}

function siftDown(array, start, end) {
    var root = start,
        child = root * 2 + 1,
        toSwap = root;
    while (child <= end) {
        if (array[toSwap] < array[child]) {
            swap(array, toSwap, child);
        }
        if (child + 1 <= end && array[toSwap] < array[child + 1]) {
            swap(array, toSwap, child + 1)
        }
        if (toSwap != root) {
            swap(array, root, toSwap);
            root = toSwap;
        }
        else {
            return;
        }
        toSwap = root;
        child = root * 2 + 1
    }
}


function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}