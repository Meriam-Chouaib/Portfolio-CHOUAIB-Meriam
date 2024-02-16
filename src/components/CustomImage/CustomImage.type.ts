import { SyntheticEvent } from 'react'

export interface CustomImageProps {
  src: string
  alt?: string | null
  className?: string
  height?: string
  width?: string
  onError?: (event: SyntheticEvent<HTMLImageElement>) => void
  onLoad?: (event: SyntheticEvent<HTMLImageElement>) => void
  withSkeleton?: boolean
  imgCompressed?: string
  imgPlaceholder?: string
  margin?: string
  borderRadius?: string
}
