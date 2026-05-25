
export function getItemFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (err) {
        console.error("Failed to parse localStorage item:", key, err);
        return null;
    }
}

export function setItemToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error("Failed to save to localStorage:", key, err);
    }
}
export function removeItemFromLocalStorage(key) {
    localStorage.removeItem(key);
}
