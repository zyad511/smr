import fetch from "node-fetch";

export async function translate(text, source = "auto", target = "en") {
  if (!text) return text;

  try {
    const res = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        q: text,
        source,
        target,
        format: "text"
      })
    });

    const data = await res.json();
    return data.translatedText || text;
  } catch {
    return text;
  }
}
