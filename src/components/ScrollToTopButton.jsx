import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: use any icon

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200); // Show after scrolling down 200px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00d4ff] hover:bg-[#00c3e6] text-black shadow-lg transition-transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    )
  );
}
