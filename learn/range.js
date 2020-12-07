const range = (start, stop, step = 1) => Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
console.log(range(1, 101));
