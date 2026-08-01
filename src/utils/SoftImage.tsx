import { useLayoutEffect, useRef, useState, type ImgHTMLAttributes } from 'react';

type SoftImageProps = {
    src?: string;
    alt: string;
    /** Classes for the fixed-size wrapper (reserves layout space). */
    wrapperClassName?: string;
    /** Classes for the <img> itself. */
    className?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className' | 'onLoad' | 'onError'>;

type LoadStatus = 'loading' | 'loaded' | 'error';

function isImageReady(img: HTMLImageElement): boolean {
    return img.complete && img.naturalWidth > 0;
}

/** Image with reserved space and a pulse skeleton while loading. */
export function SoftImage({ src, alt, wrapperClassName = '', className = '', ...imgProps }: SoftImageProps) {
    const [status, setStatus] = useState<LoadStatus>('loading');
    const imgRef = useRef<HTMLImageElement>(null);

    // Cached images often skip onLoad — sync status from the DOM bitmap.
    useLayoutEffect(() => {
        setStatus('loading');

        const img = imgRef.current;
        if (!img) return;

        if (isImageReady(img)) {
            setStatus('loaded');
            return;
        }

        if (img.complete && img.naturalWidth === 0) {
            setStatus('error');
        }
    }, [src]);

    if (!src) {
        return <span className={`relative inline-block shrink-0 bg-gray-200 ${wrapperClassName}`} aria-hidden />;
    }

    return (
        <span className={`relative inline-block shrink-0 ${wrapperClassName}`}>
            <img
                {...imgProps}
                ref={imgRef}
                src={src}
                alt={alt}
                decoding='async'
                onLoad={() => setStatus('loaded')}
                onError={() => setStatus('error')}
                className={`block ${className}`}
            />
            {status === 'loading' && (
                <span className='pointer-events-none absolute inset-0 animate-pulse bg-gray-200' aria-hidden />
            )}
            {status === 'error' && (
                <span className='pointer-events-none absolute inset-0 bg-gray-200' aria-hidden />
            )}
        </span>
    );
}
