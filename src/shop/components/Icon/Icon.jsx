const paths = {
  home: 'M3 10 12 3l9 7M5 9v12h5v-7h4v7h5V9',
  shop: 'M5 7h14l2 14H3L5 7Zm3 1V6a4 4 0 0 1 8 0v2',
  camera: 'M4 6h4l2-3h4l2 3h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm13 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',
  looks: 'M4 4h16v16H4V4Zm0 12 5-5 4 4 3-3 4 4M9 8h.01',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  search: 'M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-2 6 5 6',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM9 21h6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  down: 'm6 9 6 6 6-6',
  close: 'm6 6 12 12M6 18 18 6',
  check: 'm4 12 5 5L20 6',
  glasses: 'M2 9h8l-1 7H4L2 9Zm12 0h8l-2 7h-5l-1-7Zm-4 1h4',
  earrings: 'M8 2a2 2 0 1 1-4 0m12 0a2 2 0 1 1-4 0M6 6c-7 6-5 15 0 15s7-9 0-15Zm12 0c-7 6-5 15 0 15s7-9 0-15Z',
  necklace: 'M3 2c0 8 5 12 9 15 4-3 9-7 9-15M12 17l3 3-3 3-3-3 3-3Z',
  lipstick: 'M9 10h6v12H9V10Zm1 0V3l4-2v9M8 15h8',
  layers: 'm12 2 10 6-10 6L2 8l10-6Zm-9 11 9 5 9-5M3 18l9 5 9-5',
  filter: 'M4 6h16M7 12h10M10 18h4M8 3v6m8 0v6m-4 0v6',
  sparkles: 'm12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z',
};

export default function Icon({ name, className = '' }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] || paths.sparkles} />
    </svg>
  );
}
