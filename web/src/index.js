import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider, theme } from 'antd';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Farm from './components/Farm/Farm';
import Boost from './components/Boost/Boost';
import Friends from './components/Friends/Friends';
import Earn from './components/Earn/Earn';
import NavMenu from './components/NavMenu/NavMenu';

const getCSSVariableValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const hexToRgb = (hex) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

const isColorDark = (color) => {
  const { r, g, b } = hexToRgb(color);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 140;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const ThemeProvider = ({ children }) => {
  const [themeParams, setThemeParams] = useState({
    text_color: '',
    hint_color: '',
    link_color: '',
    button_color: '',
    button_text_color: '',
    bg_color: '',
    secondary_bg_color: '',
    algorithm: theme.defaultAlgorithm,
  });

  useEffect(() => {
    // Fetch CSS variables
    const textColor = getCSSVariableValue('--tg-theme-text-color');
    const hintColor = getCSSVariableValue('--tg-theme-hint-color');
    const linkColor = getCSSVariableValue('--tg-theme-link-color');
    const buttonColor = getCSSVariableValue('--tg-theme-button-color');
    const buttonTextColor = getCSSVariableValue('--tg-theme-button-text-color');
    const bgColor = getCSSVariableValue('--tg-theme-bg-color');
    const secondaryBgColor = getCSSVariableValue('--tg-theme-secondary-bg-color');

    const algorithm = isColorDark(bgColor) ? theme.darkAlgorithm : theme.defaultAlgorithm;

    // Set theme parameters
    setThemeParams({
      text_color: textColor,
      hint_color: hintColor,
      link_color: linkColor,
      button_color: buttonColor,
      button_text_color: buttonTextColor,
      bg_color: bgColor,
      secondary_bg_color: secondaryBgColor,
      algorithm: algorithm,
    });
  }, []);

  return (
    <ConfigProvider
      theme={
        themeParams.text_color
          ? {
              algorithm: themeParams.algorithm,
              token: {
                colorText: themeParams.text_color,
                colorTextSecondary: themeParams.hint_color,
                colorLink: themeParams.link_color,
                colorPrimary: themeParams.button_color,
                colorTextOnPrimary: themeParams.button_text_color,
                colorBgBase: themeParams.bg_color,
                colorBgContainer: themeParams.secondary_bg_color,
              },
            }
          : undefined
      }
    >
      {children}
    </ConfigProvider>
  );
};


root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <div className="contentWrapperMenu">
          <NavMenu />
        </div>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/farm' element={<Farm/>}/>
          <Route path='/boost' element={<Boost/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/earn' element={<Earn/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
