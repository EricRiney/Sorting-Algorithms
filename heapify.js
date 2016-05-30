function heapify(array, len) {
    // break the array into root + two sides, to create tree (heap)
    var mid = Math.floor((len - 2) / 2);
    while (mid >= 0) {
        siftDown(array, mid--, len - 1);
    }
}
