import { artwork } from '../../data/products.js';

// Preserve the exact photograph crops used in the original ÉCLAT project.
export default function Artwork({ name, label, className = '' }) {
  const [sheet, width, height, x, y, cropWidth, cropHeight] = artwork[name] || artwork.rose;

  return (
    <span
      className={`photo-art ${className}`}
      role="img"
      aria-label={label || name}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/reference/${sheet}.png)`,
        backgroundSize: `${(width / cropWidth) * 100}% ${(height / cropHeight) * 100}%`,
        backgroundPosition: `${(x / (width - cropWidth)) * 100}% ${(y / (height - cropHeight)) * 100}%`,
        aspectRatio: cropWidth / cropHeight,
      }}
    />
  );
}
