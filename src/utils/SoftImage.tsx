import { useEffect, useState, type ImgHTMLAttributes } from 'react';

type SoftImageProps = {
    src?: string;
    alt: string;
    /** Classes for the fixed-size wrapper (reserves layout space). */
    wrapperClassName?: string;
    /** Classes for the <img> itself. */
    className?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className' | 'onLoad' | 'onError'>;

type LoadStatus = 'loading' | 'loaded' | 'error';

/** Image with reserved space and a pulse skeleton while loading. */
export function SoftImage({ src, alt, wrapperClassName = '', className = '', ...imgProps }: SoftImageProps) {
    const [status, setStatus] = useState<LoadStatus>('loading');

    useEffect(() => {
        setStatus('loading');
    }, [src]);

    if (!src) {
        return <span className={`relative inline-block shrink-0 bg-gray-200 ${wrapperClassName}`} aria-hidden />;
    }

    return (
        <span className={`relative inline-block shrink-0 ${wrapperClassName}`}>
            <img
                {...imgProps}
                src={src}
                alt={alt}
                decoding='async'
                onLoad={() => setStatus('loaded')}
                onError={() => setStatus('error')}
                className={`block ${className}`}
            />
            {status !== 'loaded' && (
                <span className='pointer-events-none absolute inset-0 animate-pulse bg-gray-200' aria-hidden />
            )}
        </span>
    );
}
