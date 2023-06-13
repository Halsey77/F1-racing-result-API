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

export function createCompareSortOptionForTime(query: string) {
    const [comparator, value] = query.split(']');

    switch (comparator.slice(1).toLowerCase()) {
        case 'eq':
            return {
                $eq: value
            }
        case 'gt':
            return {
                $gt: value
            }
        case 'gte':
            return {
                $gte: value
            }
        case 'lt':
            return {
                $lt: value
            }
        case 'lte':
            return {
                $lte: value
            }
        default:
            return {
                $eq: comparator
            }
    }
}

export function createCompareSortOptionForNumber(query: string) {
    const [comparator, value] = query.split(']');

    switch (comparator.slice(1).toLowerCase()) {
        case 'eq':
            return {
                $eq: parseFloat(value)
            }
        case 'gt':
            return {
                $gt: parseFloat(value)
            }
        case 'gte':
            return {
                $gte: parseFloat(value)
            }
        case 'lt':
            return {
                $lt: parseFloat(value)
            }
        case 'lte':
            return {
                $lte: parseFloat(value)
            }
        default:
            return {
                $eq: parseFloat(comparator)
            }
    }
}