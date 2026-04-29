import React, { useState } from "react";
import { X } from "lucide-react";
import { Section } from "./Section";

const IMAGES = [
  { src: "images/gallery1.jpg", title: "Sports Day" },
  { src: "images/gallery2.jpg", title: "Art Exhibition" },
  { src: "images/gallery3.jpg", title: "Music Class" },
  { src: "images/about.png", title: "Classroom Learning" },
  { src: "images/lab.png", title: "Science Lab" },
  { src: "images/sports.png", title: "Playground" },
];

function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-md text-left focus:outline-none focus:ring-4 focus:ring-accent/60"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-secondary/90 backdrop-blur-sm p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-secondary flex items-center justify-center shadow-xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery preview"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-[92vw] max-h-[86vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export function Gallery() {
  return (
    <Section
      id="life"
      title="Moments of Joy"
      subtitle="Gallery"
      description="Glimpses of daily life, learning, and celebration at CMM English School."
      className="bg-secondary"
      light
    >
      <GalleryGrid />
    </Section>
  );
}
