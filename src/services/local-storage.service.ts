export const get = (name: string) => {
    const data = localStorage.getItem(name);
    return (data && typeof data !== 'undefined') ? JSON.parse(data) : null;
}

export const set = (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const remove = (name: string) => {
    localStorage.removeItem(name);
}

