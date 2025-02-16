function fsmall(arr) {
    let n;
    n = arr[0];
    arr.forEach((v, i, a) => {
        if (v < n) n = v
    });
    return n;
}

function merge(a1, a2) {
    let au = [];
    const as = [];
    au = au.concat(a1, a2);

    while (au.length > 0) {
        as.push(fsmall(au));
        au.splice(au.indexOf(fsmall(au)), 1);
    }
    return as;
}

function msort(arr) {
    const al = arr.slice(0, parseInt(arr.length/2));
    const ar = arr.slice(parseInt(arr.length/2), parseInt(arr.length));
    if (al.length === 1 && ar.length > 1) {
        return merge(al, msort(ar));
    } else if(ar.length === 1 && al.length > 1) {
        return merge(msort(al), ar);
    } else if(ar.length === 1 && al.length === 1) {
        return merge(al, ar);
    }
    return merge(msort(al), msort(ar));
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [3, 2, 1, 13, 8, 5];
const arr3 = [105, 79, 100, 110];

console.log(msort(arr));
