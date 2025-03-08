import React from 'react'

// Format date to display day and date
export function formatDate(timestamp) {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Format date to display day name
export function formatDay(date) {
    return date.toLocaleDateString('en-US', { weekday: 'short' })
}

// Get weather icon based on OpenWeatherMap icon code
export function getWeatherIcon(iconCode, className = "h-12 w-12") {
    // Map OpenWeatherMap icon codes to SVG icons
    const getIconSvg = (iconType) => {
        switch (iconType) {
            case 'sun':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f59e0b' }}>
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                )
            case 'cloud':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                )
            case 'cloud-rain':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
                        <line x1="16" y1="13" x2="16" y2="21"></line>
                        <line x1="8" y1="13" x2="8" y2="21"></line>
                        <line x1="12" y1="15" x2="12" y2="23"></line>
                        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                    </svg>
                )
            case 'cloud-drizzle':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#60a5fa' }}>
                        <line x1="8" y1="19" x2="8" y2="21"></line>
                        <line x1="8" y1="13" x2="8" y2="15"></line>
                        <line x1="16" y1="19" x2="16" y2="21"></line>
                        <line x1="16" y1="13" x2="16" y2="15"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="12" y1="15" x2="12" y2="17"></line>
                        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                    </svg>
                )
            case 'cloud-lightning':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8b5cf6' }}>
                        <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
                        <polyline points="13 11 9 17 15 17 11 23"></polyline>
                    </svg>
                )
            case 'cloud-snow':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#bfdbfe' }}>
                        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                        <line x1="8" y1="16" x2="8.01" y2="16"></line>
                        <line x1="8" y1="20" x2="8.01" y2="20"></line>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        <line x1="12" y1="22" x2="12.01" y2="22"></line>
                        <line x1="16" y1="16" x2="16.01" y2="16"></line>
                        <line x1="16" y1="20" x2="16.01" y2="20"></line>
                    </svg>
                )
            case 'cloud-fog':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
                        <path d="M16 13a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4"></path>
                        <line x1="2" y1="15" x2="22" y2="15"></line>
                        <line x1="4" y1="17" x2="20" y2="17"></line>
                        <line x1="6" y1="19" x2="18" y2="19"></line>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                    </svg>
                )
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                )
        }
    }

    // Map OpenWeatherMap icon codes to icon types
    const iconMap = {
        // Clear
        '01d': 'sun',
        '01n': 'sun',

        // Few clouds, scattered clouds
        '02d': 'cloud',
        '02n': 'cloud',
        '03d': 'cloud',
        '03n': 'cloud',

        // Broken clouds, overcast
        '04d': 'cloud',
        '04n': 'cloud',

        // Shower rain
        '09d': 'cloud-drizzle',
        '09n': 'cloud-drizzle',

        // Rain
        '10d': 'cloud-rain',
        '10n': 'cloud-rain',

        // Thunderstorm
        '11d': 'cloud-lightning',
        '11n': 'cloud-lightning',

        // Snow
        '13d': 'cloud-snow',
        '13n': 'cloud-snow',

        // Mist, fog, etc.
        '50d': 'cloud-fog',
        '50n': 'cloud-fog',
    }

    return getIconSvg(iconMap[iconCode] || 'cloud')
}
