function foo() {
    return [1, 2, 3];
}

function anotherFoo()
{
    return { 'name': 'Zazú', 'lastName': 'Araos', 'title': 'Chanchulina'};
}

function destructuringExample() {
    let tmp = foo(),
        x = tmp[0], y = tmp[1], z = tmp[2];

    console.log(x, y, z);

    var {'name': nombre, 'lastName': apellido, 'title': titulo} = anotherFoo();
    console.log(nombre, apellido, titulo);

    return {x:x, y:y, z:z};
}
