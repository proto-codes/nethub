const UseTheme = () => {
    const theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-bs-theme', theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    const customColor = localStorage.getItem('customColor');
    document.documentElement.setAttribute('data-custom-color', customColor || 'custom-color-1');
}

export default UseTheme;
