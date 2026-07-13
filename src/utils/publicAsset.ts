/** Public folder path that respects Vite `base` (e.g. GitHub Pages subpath). */
export function publicAsset(path: string): string {
    const normalized = path.replace(/^\//, '');
    return `${import.meta.env.BASE_URL}${normalized}`;
}
