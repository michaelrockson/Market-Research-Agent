import { ChevronDown } from "lucide-react";
import { useModelSettings } from "../hooks/useModelSettings";
import { useState } from "react";

const SCOUT_DEFAULT_INSTRUCTIONS = `You are the Scout agent. Your job is to scan incoming posts and flag genuine pain points worth investigating.

- Look for explicit frustration, unmet needs, or workarounds people describe.
- Ignore promotional posts, memes, and low-effort questions.
- Be conservative: when unsure, mark as "needs review" rather than discarding or auto-approving.
- Output a short reason alongside each flag so the Curator has context.`;

const CURATOR_DEFAULT_INSTRUCTIONS = `You are the Curator agent. Your job is to take Scout-flagged pain points and score, group, and rank them for the final report.

- Cluster similar pain points across subreddits into a single theme.
- Score each theme on frequency, intensity of language, and commercial potential.
- Discard themes that are too niche or already well-served by existing tools.
- Write a one-sentence summary per theme suitable for a non-technical reader.`;

function Divider() {
  return <div style={{ height: 1, background: "#1f1f23" }} />;
}

function Row({ title, description, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: 24,
        padding: "24px 0",
        alignItems: "start",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#fafafa",
            margin: 0,
            marginBottom: 6,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#71717a",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {children}
      </div>
    </div>
  );
}

function InstructionsEditor({ label, description, defaultValue }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const isEdited = value !== defaultValue;

  return (
    <div style={{ padding: "20px 0" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <h3
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fafafa",
                margin: 0,
              }}
            >
              {label}
            </h3>
            {isEdited && (
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#FF4500",
                  background: "#3a1408",
                  border: "1px solid #7c2d12",
                  borderRadius: 999,
                  padding: "2px 8px",
                }}
              >
                edited
              </span>
            )}
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#71717a",
              margin: 0,
              marginTop: 6,
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: "#71717a",
            flexShrink: 0,
            marginLeft: 16,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.15s ease",
          }}
        />
      </button>

      {open && (
        <div style={{ marginTop: 14 }}>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={8}
            style={{
              width: "100%",
              background: "#0e0e10",
              border: "1px solid #27272a",
              borderRadius: 8,
              padding: "14px 16px",
              color: "#e4e4e7",
              fontSize: 13,
              lineHeight: 1.6,
              fontFamily: "'JetBrains Mono', monospace",
              outline: "none",
              resize: "vertical",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FF4500")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#27272a")}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
              marginTop: 10,
            }}
          >
            <button
              onClick={() => setValue(defaultValue)}
              disabled={!isEdited}
              style={{
                background: "none",
                border: "1px solid #27272a",
                color: isEdited ? "#a1a1aa" : "#3f3f46",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 500,
                cursor: isEdited ? "pointer" : "default",
              }}
            >
              Reset to default
            </button>
            <button
              style={{
                background: "#3a1408",
                border: "1px solid #7c2d12",
                color: "#FF4500",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Save instructions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ModelSettings() {
  const { model, dropdownOpen, modelOptions, toggleDropdown, selectModel } =
    useModelSettings();

  return (
    <div
      style={{
        background: "#0a0a0c",
        minHeight: "100vh",
        padding: "48px 24px",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#e4e4e7",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div
          style={{
            background: "#131316",
            border: "1px solid #1f1f23",
            borderRadius: 12,
            padding: "28px 28px 8px",
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#fafafa",
              margin: 0,
              marginBottom: 6,
            }}
          >
            Model
          </h2>
          <p
            style={{
              fontSize: 13,
              color: "#71717a",
              margin: 0,
              marginBottom: 4,
            }}
          >
            Controls how the LangGraph agent classifies and scores pain points.
          </p>

          <Divider />

          <Row
            title="Model"
            description="Used for classification and scoring at every pipeline step."
          >
            <div style={{ position: "relative", width: 280 }}>
              <button
                onClick={toggleDropdown}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#0e0e10",
                  border: "1px solid #27272a",
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: "#e4e4e7",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                <span>{model}</span>
                <ChevronDown
                  size={16}
                  style={{
                    color: "#71717a",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.15s ease",
                  }}
                />
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    left: 0,
                    right: 0,
                    background: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: 8,
                    overflow: "hidden",
                    zIndex: 10,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {modelOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => selectModel(option)}
                      style={{
                        padding: "10px 14px",
                        fontSize: 14,
                        color: option === model ? "#FF4500" : "#e4e4e7",
                        cursor: "pointer",
                        background:
                          option === model ? "#3a140822" : "transparent",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#222226")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          option === model ? "#3a140822" : "transparent")
                      }
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Row>

          <Divider />

          <InstructionsEditor
            label="Scout instructions"
            description="Guides how the Scout agent flags candidate pain points during the first pass."
            defaultValue={SCOUT_DEFAULT_INSTRUCTIONS}
          />

          <Divider />

          <InstructionsEditor
            label="Curator instructions"
            description="Guides how the Curator agent scores, clusters, and ranks flagged pain points."
            defaultValue={CURATOR_DEFAULT_INSTRUCTIONS}
          />
        </div>
      </div>
    </div>
  );
}
