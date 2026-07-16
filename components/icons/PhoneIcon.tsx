export default function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.1 3.5c.5-.1 1 .1 1.3.6l1.4 2.4c.3.5.2 1.1-.2 1.5L8.3 9.4c-.3.3-.4.8-.2 1.2a11.6 11.6 0 0 0 5.3 5.3c.4.2.9.1 1.2-.2l1.4-1.3c.4-.4 1-.5 1.5-.2l2.4 1.4c.5.3.7.8.6 1.3l-.5 2c-.1.6-.7 1.1-1.4 1.1C11.3 20 4 12.7 4 3.6c0-.7.5-1.3 1.1-1.4l2-.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
