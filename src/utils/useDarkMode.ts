import React, { useState, useEffect } from 'react'


export const useDarkMode = () => {
    const [ theme, setTheme ] = useState<string>('light');

    const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
        if( theme === 'light' ) {
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }

    function hello(): number {
        return 1
    }

    useEffect((): void => {
        const localTheme = window.localStorage.getItem('theme');
        // if user prefer theme is set then use it
        localTheme && setTheme(localTheme);
    }, [])

    return [ theme, toggleTheme ] as const;
}



