import type { ImageProps } from 'next/image';
import Image from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  className?: string;
};

/**
 * 优化的图片组件，自动压缩和响应式加载
 * 使用 next/image 实现：
 * - 自动 WebP/AVIF 转换
 * - 响应式图片尺寸
 * - 懒加载
 * - 占位符模糊效果
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  fill,
  width,
  height,
  sizes,
  priority,
  ...props
}: OptimizedImageProps) => {
  // 默认 sizes 配置：响应式断点
  const defaultSizes =
    sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={defaultSizes}
      priority={priority}
      quality={80}
      {...props}
    />
  );
};

export { OptimizedImage };
