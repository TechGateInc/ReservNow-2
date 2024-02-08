"use client";

import { useRef } from "react";

const EllipsisText: React.FC<{ maxLines: number }> = ({ maxLines }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ overflow: "hidden" }}>
      <div ref={contentRef}>
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: maxLines,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            margin: 0,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque
          eum itaque quisquam? At magni soluta porro! Porro amet, eius inventore
          dignissimos ad atque, rem quis voluptates non excepturi impedit nulla
          tempora deserunt, nobis enim. Commodi sapiente blanditiis molestias
          maxime, voluptatibus voluptas obcaecati consequatur corporis nam
          accusantium eius optio quam nobis cumque eos similique quidem ipsa
          veniam aliquid eaque libero recusandae. Dignissimos deserunt culpa
          fuga alias dolore ullam tenetur voluptatem quos cum quidem!
          Repellendus illum iure, non quaerat nobis perspiciatis soluta
          molestiae aspernatur delectus nulla aperiam similique quas maxime
          adipisci unde, ratione quibusdam molestias! Doloremque dicta ratione
          nemo consectetur ea.
        </p>
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          Show more
        </span>
      </button>
    </div>
  );
};

export default EllipsisText;
