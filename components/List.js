export default function List({ items, nested = false }) {
    // not dangerous inner html as static site so I know the contents
    return (
      <ul className={`list-disc list-inside mt-2 ${nested ? "ml-6 mb-2" : ""}`}>
        {items.map((item, idx) => (
          <li key={idx}>
            {typeof item === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: item }} />
            ) : (
              <>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
                {item.subitems && <List items={item.subitems} nested />}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
  