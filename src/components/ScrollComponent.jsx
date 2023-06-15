import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollComponent = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      {showArrow && (
        <div
          className="scroll-arrow"
          onClick={scrollToTop}
          style={{
            backgroundColor: "#f85a40",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          <FaArrowUp style={{ color: "#fff", fontSize: "14px" }} />
        </div>
      )}
    </div>
  );
};

export default ScrollComponent;
