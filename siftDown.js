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
