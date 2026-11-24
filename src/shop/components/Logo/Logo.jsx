export default function Logo({ onClick }) {
  return (
    <button type="button" className="brand-logo flex shrink-0 items-center" onClick={onClick} aria-label="ÉCLAT shop collection">
      <svg className="brand-mark" viewBox="0 0 70 82" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 72C8 54 12 35 29 24 26 14 37 5 47 5l7-3 7 22-6 9 7 8-8 4 1 8-7 4-8-4M47 5C38 26 13 31 8 56M40 18C29 37 20 45 22 66l-7 14M29 42c7 14 7 22 2 33M41 57c-1 10 7 15 14 17M48 25l7 2m-7 1h5M53 43l6-1M35 10 19 17 9 32M41 57l-7-8" />
      </svg>
      <span className="text-left"><strong>ÉCLAT</strong><small>Virtual Try-On</small></span>
    </button>
  );
}
