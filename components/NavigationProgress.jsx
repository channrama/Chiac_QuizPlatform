'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationProgress() {
    const pathname = usePathname();
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    const timerRef = useRef(null);
    const prevPathname = useRef(pathname);

    useEffect(() => {
        if (prevPathname.current !== pathname) {
            // Route changed — complete the bar
            setProgress(100);
            setTimeout(() => {
                setVisible(false);
                setProgress(0);
            }, 400);
            prevPathname.current = pathname;
        }
    }, [pathname]);

    // Start progress whenever a navigation link is clicked
    useEffect(() => {
        const handleClick = (e) => {
            const anchor = e.target.closest('a[href]');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http')) return;

            // Start the fake progress
            setVisible(true);
            setProgress(10);
            clearInterval(timerRef.current);
            timerRef.current = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 85) {
                        clearInterval(timerRef.current);
                        return 85;
                    }
                    return prev + Math.random() * 12;
                });
            }, 200);
        };

        // Also intercept programmatic router.push via buttons
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
            clearInterval(timerRef.current);
        };
    }, []);

    if (!visible && progress === 0) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                height: '3px',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
                transition: progress === 100 ? 'width 0.2s ease, opacity 0.4s ease' : 'width 0.3s ease',
                opacity: visible ? 1 : 0,
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
                borderRadius: '0 4px 4px 0',
                pointerEvents: 'none',
            }}
        />
    );
}
