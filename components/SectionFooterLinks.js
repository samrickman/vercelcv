export default function SectionFooterLinks({ links }) {
  return (
    <div className="flex flex-wrap gap-4 mt-2 linkdiv">
      {links.map((link, index) => (
        <a key={index} href={link.href} target="blank_">
          {link.label}
        </a>
      ))}
    </div>
  );
}
