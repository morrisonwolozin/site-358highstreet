export default function Sidebar({ mainMode, handleChangeMainMode, subMode, handleChangeSubMode, modeStructure }) {
  const mainModes = Object.keys(modeStructure);

  return (
    <aside className="p-4 bg-gray-100 space-y-4">
      <div>
        <h2 className="font-bold text-lg">Main Sections</h2>
        <ul>
          {mainModes.map((mode) => (
            <li key={mode}>
              <button
                className={`w-full text-left px-2 py-1 ${
                  mode === mainMode ? 'bg-green-200' : ''
                }`}
                onClick={() => handleChangeMainMode(mode)}
              >
                {mode}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {mainMode && modeStructure[mainMode] && (
        <div>
          <h2 className="font-bold text-lg">Sub-Sections</h2>
          <ul>
            {modeStructure[mainMode].map((sub) => (
              <li key={sub}>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subMode"
                    checked={subMode === sub}
                    onChange={() => handleChangeSubMode(sub)}
                  />
                  <span>{sub}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
