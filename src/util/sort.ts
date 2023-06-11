export function sortNumber(direction: 'asc' | 'desc', a, b): number {
    if (direction === 'asc') {
        return parseFloat(a) - parseFloat(b)
    }
    return parseFloat(b) - parseFloat(a);
}

export function sortDate(direction: 'asc' | 'desc', a, b): number {
    if (direction === 'asc') {
        return new Date(a).getTime() - new Date(b).getTime();
    }
    return new Date(b).getTime() - new Date(a).getTime();
}

export function sortString(direction: 'asc' | 'desc', a, b): number {
    if (direction === 'asc') {
        return a.localeCompare(b);
    }
    return b.localeCompare(a);
}