import { useState } from 'react';
import { CustomImageProps } from './CustomImage.type';
import { Skeleton } from '@mui/material';

export default function CustomImage({
  src,
  alt,
  className,
  height,
  width,
  onError,
  withSkeleton,
  imgCompressed,
  imgPlaceholder,
}: CustomImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgSrc = src ? src : imgPlaceholder;
  return (
    <>
      <img
        style={{ display: withSkeleton && !loaded ? 'none' : undefined }}
        src={loaded ? imgSrc : imgCompressed ? imgCompressed : imgSrc}
        onLoad={() => setLoaded(true)}
        alt={alt || 'image'}
        height={height ? height : 'auto'}
        width={width ? width : 'auto'}
        className={className}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
      />
      {withSkeleton && !loaded && (
        <Skeleton
          component={'img'}
          variant="rectangular"
          height={height}
          width={width}
          className={className}
        />
      )}
    </>
  );
}
