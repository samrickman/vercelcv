export default function Text({ txt, className = "mt-2" }) {
  return (
    // dangerously if it comes from another source but this doesn't - it's fixed
    <p className={`${className}`} dangerouslySetInnerHTML={{ __html: txt }} />
  );
}
