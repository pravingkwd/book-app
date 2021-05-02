import { useState, useEffect } from 'react';

const useLocalStorage = (key, initValue) => {

    const [value, setValue] = useState(() => {
        try {
            const localValue = window.localStorage.getItem(key);
            return localValue ? JSON.parse(localValue) : initValue;
        }
        catch (error) {
            return initValue;
        }
    });

    useEffect(

        () => {
            window.localStorage.setItem(key, JSON.stringify(value));

        }, [key, value]);

    return [value, setValue];

}

export default useLocalStorage;