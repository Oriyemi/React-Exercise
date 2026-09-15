// / 27. Image gallery with lazy loading
import React, { useEffect, useRef, useState } from "react";

function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1511497584788-876760111969",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  ];

  const [loadedImages, setLoadedImages] = useState({});

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;

            setLoadedImages((prev) => ({
              ...prev,
              [index]: true,
            }));

            observerRef.current.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    const imageElements = document.querySelectorAll(".lazy-image");

    imageElements.forEach((image) => {
      observerRef.current.observe(image);
    });

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>

      <div>
        {images.map((image, index) => (
          <div key={index}>
            {loadedImages[index] ? (
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                width="300"
                height="200"
              />
            ) : (
              <div
                className="lazy-image"
                data-index={index}
                style={{
                  width: "300px",
                  height: "200px",
                  background: "#ddd",
                }}
              >
                Loading...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;