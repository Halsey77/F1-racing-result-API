export default function removeUndefinedKeysFromFilter(filter) {
    const newFilter = {};
    Object.keys(filter).forEach(key => {
        if (filter[key] !== undefined) {
            newFilter[key] = filter[key];
        }
    });
    return newFilter;
}