import Gallery from './Gallery'

export default function ContentRenderer( {keyId}) {

    const contentMap = {
    "construction-existing-foundation":<Gallery modeKey={keyId} />,
    "construction-additions":<Gallery modeKey={keyId} />,
    "construction-der-envelope":<Gallery modeKey={keyId} />,
    "pre-existing-photos": <Gallery modeKey={keyId}/>,
    "construction-party-walls": <Gallery modeKey={keyId} />,

    // "occupied-features": <Narrative content={featuresText} />,
    // "restricted-air-quality": <LiveTable data={aqData} />
    // and more
  };

  return contentMap[keyId] || <p className="text-center text-xl font-semibold"> Select a sub-section to view content.</p>;


}