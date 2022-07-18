export function capitalize (string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export function prefaceZero (number) {
    if (number < 10) {
        return '00' + number;
    } else if (number < 100) {
        return '0' + number;
    } else {
        return number;
    }
}