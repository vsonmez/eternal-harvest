import React from "react";
import useGlobalStore from "../../store/hooks/use-global-store.hook";

const HeaderLanguageSelect = () => {
  const [language, setLanguageToState] = React.useState<"en" | "tr">(localStorage.getItem("language") as "en" | "tr");
  const { setLanguage } = useGlobalStore();

  const onSelectLanguage = (language: "en" | "tr") => {
    localStorage.setItem("language", language);
    setLanguageToState(language);
    setLanguage(language);
  };

  React.useEffect(() => {
    localStorage.getItem("language") ? setLanguage(localStorage.getItem("language") as "en" | "tr") : setLanguage("en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <select value={language} onChange={(e) => onSelectLanguage(e.target.value as "en" | "tr")} className="bg-slate-950 ">
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
    </select>
  );
};

export default React.memo(HeaderLanguageSelect);
