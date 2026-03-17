import HomePage from "./HomePage";
import ContentRenderer from "./ContentRenderer";

export default function MainContent({ mainMode, subMode }) {
  if (!mainMode || mainMode === 'Home') return <HomePage />;

  if (mainMode === 'Restricted' && !userIsAuthorized()) {
    return <LoginPrompt />;
  }

  const key = `${mainMode.toLowerCase()}-${subMode?.toLowerCase().replace(/\s+/g, '-')}`;
  console.log(`key: ${key}`)

  return (
    <section className="p-6">
      <ContentRenderer keyId={key} />
        
    </section>
  );
}
