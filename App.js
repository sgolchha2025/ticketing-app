
import React, { useState } from "react";

const translations = {
  en: {
    login: "Login",
    email: "Email",
    password: "Password",
    language: "Language",
    dashboard: "Ticket Dashboard",
    logout: "Logout"
  },
  np: {
    login: "लग-इन",
    email: "इमेल",
    password: "पासवर्ड",
    language: "भाषा",
    dashboard: "टिकट ड्यासबोर्ड",
    logout: "बाहिर निस्कनुहोस्"
  }
};

function App() {
  const [language, setLanguage] = useState("en");
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const t = (key) => translations[language][key];

  if (!loggedIn) {
    return (
      <div style={{ padding: 40 }}>
        <h2>{t("login")}</h2>
        <input
          placeholder={t("email")}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br /><br />
        <input
          placeholder={t("password")}
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        /><br /><br />
        <button onClick={() => setLoggedIn(true)}>{t("login")}</button>
        <br /><br />
        <label>{t("language")}:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="np">नेपाली</option>
        </select>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>{t("dashboard")}</h2>
      <button onClick={() => setLoggedIn(false)}>{t("logout")}</button>
    </div>
  );
}

export default App;
