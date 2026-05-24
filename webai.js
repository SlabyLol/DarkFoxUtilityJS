export class DFWebAI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
    this.history = [];
    this.instruct = "You are an adaptive AI powered by DarkFox Co. Mirror the user's language, tone, and style perfectly.";
  }

  async sendMessage(msg) {
    this.history.push({ role: "user", parts: [{ text: msg }] });
    try {
      const resp = await fetch(this.apiUrl, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: this.history, systemInstruction: { parts: [{ text: this.instruct }] }})
      });
      const data = await resp.json();
      const reply = data.candidates[0].content.parts[0].text;
      this.history.push({ role: "model", parts: [{ text: reply }] });
      return reply;
    } catch (e) { return `Error: ${e.message}`; }
  }
}
