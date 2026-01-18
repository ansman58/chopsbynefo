"use client";

import type { NavbarProps } from "sanity";

export default function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          backgroundColor: "#1a4d3e",
          color: "white",
          fontSize: "14px",
        }}
      >
        <span>📝 Content Management Studio</span>
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            backgroundColor: "#d4842a",
            borderRadius: "20px",
            fontWeight: "500",
          }}
        >
          ← Back to Website
        </a>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
