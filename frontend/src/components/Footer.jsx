// Footer.jsx           // w-full
        // bg-gray-100
        // border-t border-gray-300
        // text-gray-600
        // text-sm
        // py-4
        // px-6
export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 text-white">

      <div className="flex flex-col sm:flex-row py-3 justify-center text-base">
         © {new Date().getFullYear()} Robert Morrison · All Rights Reserved
      </div>
    </footer>
  );
}
