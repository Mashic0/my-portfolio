import { useState } from "react";
import { ChevronDown, Languages } from "lucide-react";

type Language = "es" | "en";

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  {
    code: "es",
    label: "Español",
    flag: "🇪🇸",
  },
  {
    code: "en",
    label: "English",
    flag: "🇺🇸",
  },
];

export default function LanguageSelector() {
  const [language, setLanguage] = useState<Language>("es");
  const [open, setOpen] = useState<boolean>(false);

  const selectedLanguage = languages.find(
    (item) => item.code === language
  )!;

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          rounded-lg
          border border-surface-800
          bg-surface-900
          px-3 py-2
          text-sm text-text-100
          transition-colors
          hover:border-primary-400/50
          hover:bg-surface-800
        "
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Languages
          size={18}
          className="text-primary-400"
        />

        <span>{selectedLanguage.flag}</span>

        <span>{selectedLanguage.code.toUpperCase()}</span>

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Opciones */}
      {open && (
        <div
          className="
            absolute right-0 z-50 mt-2
            min-w-35
            overflow-hidden
            rounded-lg
            border border-surface-800
            bg-surface-900
            p-1
            shadow-xl
          "
          role="listbox"
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleLanguageChange(item.code)}
              className={`
                flex w-full items-center gap-2
                rounded-md
                px-3 py-2
                text-left text-sm
                transition-colors
                ${
                  language === item.code
                    ? "bg-primary-400/10 text-primary-400"
                    : "text-text-100 hover:bg-surface-800"
                }
              `}
              role="option"
              aria-selected={language === item.code}
            >
              <span>{item.flag}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
