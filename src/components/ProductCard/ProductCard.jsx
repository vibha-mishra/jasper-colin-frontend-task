"use client";

import Image from "next/image";
import { useState } from "react";
import './ProductCard.css'

export default function ProductCard({ product, limit = 150 }) {
  const [visibleCount, setVisibleCount] = useState(limit);
  const { title, image, description } = product;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + limit);
  };

  const isAllTextVisible = visibleCount >= description.length;
  const displayedText = description.slice(0, visibleCount);
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="productDetails">
        <div className="productTitle">
          {title}
        </div>
        <div className="productDescription">{displayedText}</div>
        <button
          onClick={handleViewMore}
          className="viewMoreButton"
        >
          {isAllTextVisible ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
