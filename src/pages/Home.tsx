
import Hero from "../sections/Hero";
import About from "../sections/About";


export default function Home() {
  const sections = [
    { section: "home", Component: Hero },
    { section: "about", Component: About },
    
  ];

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto">
      {sections.map(({ section, Component }) => (
        <div key={section} id={section}>
          <Component />
        </div>
      ))}
    </div>
  );
}

