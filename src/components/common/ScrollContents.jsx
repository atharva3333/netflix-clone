import { useState } from "react";
import PropTypes from "prop-types";

const ScrollContents = ({ data, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerId = `movieContainer_${title.replace(/\s+/g, "_").toLowerCase()}`;

  const handleScroll = (scrollDirection) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 200;
      const newPosition =
        scrollDirection === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      container.scrollTo({
        top: 0,
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div>
      <div className="p-4 m-4">
        <h1 className="text-white my-4 font-bold">{title}</h1>

        <div className="relative">
          <div
            id={containerId}
            className="flex gap-4 overflow-hidden"
            style={{ width: "100%" }}
          >
            {data.map((value) => (
              <div key={value.id} style={{ flexShrink: 0, marginRight: "10px" }}>
                <img
                  className="rounded-lg w-[200px]"
                  src={value.url}
                  alt={`Movie ${value.id}`}
                />
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => handleScroll("left")}
              className="text-white absolute top-1/2 left-[-20px] text-xl mr-4 font-bold focus:outline-none"
            >
              &lt;
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="text-white absolute top-1/2 right-[-20px] text-xl font-bold focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ScrollContents.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScrollContents;
