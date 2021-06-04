export default function ContextMenu({ show = false, x = 0, y = 0 }) {
  return (
    show && (
      <div
        className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        style={{
          position: "absolute",
          left: x,
          top: y
        }}
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 text-md hover:bg-blue-600 hover:text-white"
            role="menuitem"
          >
            Copy with Citation
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 text-md hover:bg-blue-600 hover:text-white"
            role="menuitem"
          >
            Highlight
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 text-md hover:bg-blue-600 hover:text-white"
            role="menuitem"
          >
            Share
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 text-md hover:bg-blue-600 hover:text-white"
            role="menuitem"
          >
            Add to Brief
          </a>
        </div>
      </div>
    )
  );
}
