export function getTransportImage(product) {
    console.log(product);
    const n = Number(product);

    switch(n) {
        case 1:
            return "buss";
        case 2:
            return "trikk";
        case 3:
            return "sub";
        case 4:
            return "greenbus";
        default:
            return "buss";
    }
}