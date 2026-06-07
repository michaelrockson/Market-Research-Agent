import React from "react";

export default function LoadingScreen(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-animate-fade-in">
      <div
        className="li-flex li-items-center"
        style={{
          gap: 16,
          marginBottom: 24,
          paddingBottom: 24,
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          className="li-skeleton"
          style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0 }}
        />
        <div style={{ flex: 1 }}>
          <div
            className="li-skeleton li-skeleton-heading"
            style={{ width: "35%", marginBottom: 8 }}
          />
          <div
            className="li-skeleton li-skeleton-text"
            style={{ width: "55%" }}
          />
        </div>
      </div>

      {/* Section header skeleton */}
      <div style={{ marginBottom: 20 }}>
        <div
          className="li-skeleton li-skeleton-text"
          style={{ width: "12%", marginBottom: 6 }}
        />
        <div
          className="li-skeleton li-skeleton-text"
          style={{ width: "28%" }}
        />
      </div>

      {/* Analytics cards skeleton — 4 col grid */}
      <div className="li-grid li-grid-4" style={{ marginBottom: 24 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="li-skeleton li-skeleton-card" />
        ))}
      </div>

      {/* Chart row skeleton */}
      <div className="li-grid li-grid-take-5" style={{ marginBottom: 24 }}>
        <div className="li-skeleton li-skeleton-card" style={{ height: 300 }} />
        <div className="li-skeleton li-skeleton-card" style={{ height: 300 }} />
      </div>

      {/* History table skeleton */}
      <div className="li-skeleton li-skeleton-card" style={{ height: 240 }} />
    </section>
  );
}
