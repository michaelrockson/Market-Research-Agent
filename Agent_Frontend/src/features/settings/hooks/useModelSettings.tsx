import { useState, useCallback } from "react";

const MODEL_OPTIONS = [
  "Gemini 2.5 Flash (default)",
  "Gemini 2.5 Pro",
  "Gemini 3.5 Flash",
];

export function useModelSettings() {
  const [model, setModel] = useState<string>(MODEL_OPTIONS[0]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = useCallback(
    () => setDropdownOpen((current) => !current),
    [],
  );

  const selectModel = useCallback((option: string) => {
    setModel(option);
    setDropdownOpen(false);
  }, []);

  return {
    model,
    dropdownOpen,
    modelOptions: MODEL_OPTIONS,
    toggleDropdown,
    selectModel,
  };
}
