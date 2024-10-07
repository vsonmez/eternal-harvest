import React from "react";

const HeaderLanguageSelect = () => {
  const [language, setLanguage] = React.useState<"en" | "tr">("en");

  const onSelectLanguage = (language: "en" | "tr") => {
    localStorage.setItem("language", language);
    setLanguage(language);
  };

  React.useEffect(() => {
    localStorage.getItem("language") ? setLanguage(localStorage.getItem("language") as "en" | "tr") : setLanguage("en");
  }, []);
  return (
    <select value={language} onChange={(e) => onSelectLanguage(e.target.value as "en" | "tr")} className="bg-slate-950 ">
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
    </select>
  );
};

export default React.memo(HeaderLanguageSelect);
