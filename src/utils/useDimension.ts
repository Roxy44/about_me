import { useSyncExternalStore } from 'react';

export const BREAKPOINTS = {
    mobileMin: 360,
    tabletMin: 960,
    desktopMin: 1280,
} as const;

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export type ViewportDimensions = {
    width: number;
    height: number;
    breakpoint: Breakpoint;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};

const DEFAULT_DIMENSIONS: ViewportDimensions = {
    width: 0,
    height: 0,
    breakpoint: 'desktop',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
};

function getCssZoom(): number {
    if (typeof window === 'undefined') return 1;

    const zoom = Number.parseFloat(getComputedStyle(document.documentElement).zoom || '1');

    return Number.isFinite(zoom) && zoom > 0 ? zoom : 1;
}

/** Raw viewport size with optional CSS `zoom` on `<html>` compensation */
export function getViewportSize(): { width: number; height: number } {
    if (typeof window === 'undefined') {
        return { width: 0, height: 0 };
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    const cssZoom = getCssZoom();

    if (cssZoom !== 1) {
        width = Math.round(width / cssZoom);
        height = Math.round(height / cssZoom);
    }

    return { width, height };
}

export function resolveBreakpoint(width: number): Breakpoint {
    if (width < BREAKPOINTS.tabletMin) return 'mobile';
    if (width < BREAKPOINTS.desktopMin) return 'tablet';
    return 'desktop';
}

export function getViewportDimensions(): ViewportDimensions {
    const { width, height } = getViewportSize();
    const breakpoint = resolveBreakpoint(width);

    return {
        width,
        height,
        breakpoint,
        isMobile: width >= BREAKPOINTS.mobileMin && width < BREAKPOINTS.tabletMin,
        isTablet: width >= BREAKPOINTS.tabletMin && width < BREAKPOINTS.desktopMin,
        isDesktop: width >= BREAKPOINTS.desktopMin,
    };
}

function subscribe(onChange: () => void): () => void {
    window.addEventListener('resize', onChange);
    return () => window.removeEventListener('resize', onChange);
}

let cachedSnapshot: ViewportDimensions = DEFAULT_DIMENSIONS;

/** Must return the same object reference until width/height actually change */
function getSnapshot(): ViewportDimensions {
    const next = getViewportDimensions();

    if (cachedSnapshot.width === next.width && cachedSnapshot.height === next.height) {
        return cachedSnapshot;
    }

    cachedSnapshot = next;
    return cachedSnapshot;
}

function getServerSnapshot(): ViewportDimensions {
    return DEFAULT_DIMENSIONS;
}

/** Full viewport state — one resize listener for the whole app */
export function useDimensions(): ViewportDimensions {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useIsMobile(): boolean {
    return useDimensions().isMobile;
}

export function useIsTablet(): boolean {
    return useDimensions().isTablet;
}

export function useIsDesktop(): boolean {
    return useDimensions().isDesktop;
}
