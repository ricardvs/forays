function foo() {
    return [1, 2, 3];
}

function destructuringExample() {
    let tmp = foo(),
        x = tmp[0], y = tmp[1], z = tmp[2];

    console.log(x, y, z);

    return {x:x, y:y, z:z};
}
