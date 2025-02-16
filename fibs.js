function fibsr(lim, a, b, c, i, arr) {
    if (i < lim) {
        b = c + a;
        let d = a;
        a = b;
        c = d;
        i++;
        arr.push(b);
        fibsr(lim, a, b, c, i, arr)
    }
    return arr;
}

function fibs(lim) {
    return fibsr(lim - 2, 1, 1, 0, 0, [0, 1]);
}

console.log(fibs(8));
