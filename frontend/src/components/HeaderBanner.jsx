// HeaderBanner.jsx
import { useAppNavigate} from '../utils/utils.js';

export default function HeaderBanner() {
  const navigateTo = useAppNavigate();

  function handleClick() {
    navigateTo(); //goes to "/"
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      className="
        w-full text-2xl sm:text-3xl font-bold text-white text-center
        bg-gradient-to-r from-green-700 via-green-600 to-green-500
        py-4 select-none
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:brightness-110 hover:shadow-lg active:scale-[0.99]
        opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]
      "
    >
      <div className="py-0">Residential Duplex Deep Energy Retrofit</div>
      <div className="text-2xl pt-2">358 High Street Belfast, Maine 04915</div>

    </button>
  );
}
