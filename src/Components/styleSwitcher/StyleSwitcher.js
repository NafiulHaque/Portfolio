import React, { useEffect, useState } from 'react';
import "./StyleSwitcher.css";
import { colorPalettes } from '../../colorPalettes';

const StyleSwitcher = () => {
    // --------------toggle-button----------------
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const handleScroll = () => {
        setIsToggled(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // --------------toggle-button----------------
    // --------------color-theme-handler----------------
    const [selectedPalette, setPalette] = useState('palette1');

    const handlePaletteChange = (paletteName) => {
        setPalette(paletteName);
    };
    const currentPalette = colorPalettes[selectedPalette];

    document.documentElement.style.setProperty('--bg-color-2', currentPalette.bg_color_2);
    document.documentElement.style.setProperty('--text-color-2', currentPalette.text_color_2);


    // --------------color-theme-handler----------------
    // --------------dark-mode-handler----------------
    const [light, setLight] = useState(false);
    const handleDarkMode = () => {
        setLight(!light);
    };

    if (light) {
        document.documentElement.style.setProperty('--bg-color-1', '#d9d9d9');
        document.documentElement.style.setProperty('--text-color-1', '#484b6a');
    } else {
        document.documentElement.style.removeProperty('--bg-color-1', '#d9d9d9');
        document.documentElement.style.removeProperty('--text-color-1', '#484b6a');
    }



    // --------------dark-mode-handler----------------


    return (
        <div className={`style-switcher ${isToggled ? 'open' : ''}`} >
            <div className='style-switcher-toggler s-icon' onClick={handleToggle}>
                <i class="fa fa-cog spin"></i>
            </div>
            <div className='day-night s-icon' onClick={handleDarkMode}>
                <i className='fa fa-moon'></i>
            </div>
            <h4>Theme Colors</h4>
            <div className='colors'>
                <span className='color-1' onClick={() => handlePaletteChange('palette1')}></span>
                <span className='color-2' onClick={() => handlePaletteChange('palette2')}></span>
                <span className='color-3' onClick={() => handlePaletteChange('palette3')}></span>
                <span className='color-4' onClick={() => handlePaletteChange('palette4')}></span>
                <span className='color-5' onClick={() => handlePaletteChange('palette5')}></span>

            </div>
        </div >
    )
}

export default StyleSwitcher