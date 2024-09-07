import React, { useEffect, useState, useCallback } from 'react';

const ThemeToggler = () => {
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
  const getStoredColor = () => localStorage.getItem('custom-color');
  const setStoredColor = (color) => localStorage.setItem('custom-color', color);

  const getPreferredTheme = useCallback(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  const applyTheme = (theme) => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);

    const handleSystemThemeChange = () => {
      const storedTheme = getStoredTheme();
      if (!storedTheme) {
        const preferredTheme = getPreferredTheme();
        setTheme(preferredTheme);
        applyTheme(preferredTheme);
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme, getPreferredTheme]);

  const handleThemeChange = useCallback((newTheme) => {
    setStoredTheme(newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
    showActiveTheme(newTheme);
  }, []);

  const getIconClass = () => {
    const icons = {
      light: 'bi-sun',
      dark: 'bi-moon',
      auto: 'bi-circle-half',
    };
    return `${icons[theme]} theme-icon-active fs-4`;
  };

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('#bd-theme');
    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    if (btnToActive) {
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');
    }

    if (activeThemeIcon) {
      switch (theme) {
        case 'light':
          activeThemeIcon.className = 'bi-sun theme-icon-active fs-4';
          break;
        case 'dark':
          activeThemeIcon.className = 'bi-moon theme-icon-active fs-4';
          break;
        case 'auto':
          activeThemeIcon.className = 'bi-circle-half theme-icon-active fs-4';
          break;
        default:
          activeThemeIcon.className = 'bi-sun theme-icon-active fs-4';
      }
    }

    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive ? btnToActive.dataset.bsThemeValue : theme})`;
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);
  };

  useEffect(() => {
    showActiveTheme(theme);

    const handleToggleClick = (event) => {
      const newTheme = event.currentTarget.getAttribute('data-bs-theme-value');
      handleThemeChange(newTheme);
    };

    const toggles = document.querySelectorAll('[data-bs-theme-value]');
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', handleToggleClick);
    });

    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener('click', handleToggleClick);
      });
    };
  }, [theme, handleThemeChange]);

  // Custom color functionality
  const handleColorChange = (colorClass) => {
    setStoredColor(colorClass);
    document.documentElement.setAttribute('data-custom-color', colorClass);
  };

  const customColor = getStoredColor() || 'custom-color-1';

  useEffect(() => {
    document.documentElement.setAttribute('data-custom-color', customColor);
  }, [customColor]);

  return (
    <div>
      <div className="dropdown" id="bd-theme" role="button" tabIndex="0">
        <button className="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="fs-5" id="bd-theme-text">Toggle theme </span>
          <i className={getIconClass()}></i>
        </button>
        <div className="dropdown-menu p-2">
          <div className="d-flex gap-1 mb-1">
            <button type="button" className='btn border' data-bs-theme-value="light">
              <i className="bi bi-sun"></i>
            </button>
            <button type="button" className='btn border' data-bs-theme-value="dark">
              <i className="bi bi-moon"></i>
            </button>
            <button type="button" className='btn border' data-bs-theme-value="auto">
              <i className="bi bi-circle-half"></i>
            </button>
          </div>
          <span className="fs-5 fw-bold text-custom-color">Custom Colors</span>
          <div className="d-flex gap-1">
            <button type='button' className='border-0 custom-color-1 rounded p-3' onClick={() => handleColorChange('custom-color-1')}></button>
            <button type='button' className='border-0 custom-color-2 rounded p-3' onClick={() => handleColorChange('custom-color-2')}></button>
            <button type='button' className='border-0 custom-color-3 rounded p-3' onClick={() => handleColorChange('custom-color-3')}></button>
            <button type='button' className='border-0 custom-color-4 rounded p-3' onClick={() => handleColorChange('custom-color-4')}></button>
            <button type='button' className='border-0 custom-color-5 rounded p-3' onClick={() => handleColorChange('custom-color-5')}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
