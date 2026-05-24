/**
 * DarkFoxUtilityJS - WebAI Engine Module
 * Powered by DarkFox Co.
 * * v1.4.2 - Upgraded to Gemini 2.5 Flash Engine
 * Fixed 404 Model Not Found error by routing traffic to the updated model pool.
 */

export class DFWebAI {
  /**
   * Initializes the adaptive AI engine.
   * @param {string} apiKey - The Google Gemini API Key.
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    
    // FIX: Modell auf gemini-2.5-flash aktualisiert, um den 404-Fehler zu beheben
    this.apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`;
    this.history = [];
    
    // Core prompt behavior: Ensures mirror mimicry of the client's tone
    this.instruct = "You are an adaptive AI powered by DarkFox Co. Mirror the user's language, tone, and style perfectly.";
  }

  /**
   * Sends a message payload to the Gemini compiler and updates the conversation state.
   * @param {string} msg - The raw string input from the user interface.
   * @returns {Promise<string>} The filtered response string from the model or a detailed error vector.
   */
  async sendMessage(msg) {
    // Inject the new user entry into the local session matrix
    this.history.push({ role: "user", parts: [{ text: msg }] });
    
    try {
      const resp = await fetch(this.apiUrl, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          contents: this.history, 
          systemInstruction: { parts: [{ text: this.instruct }] }
        })
      });
      
      const data = await resp.json();
      
      // Validation Check for valid candidates structure
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        const reply = data.candidates[0].content.parts[0].text;
        
        // Sync the model's reply back to history to maintain long-term session context
        this.history.push({ role: "model", parts: [{ text: reply }] });
        return reply;
      } 
      
      // Fallback 1: Capture structural API errors transmitted by Google
      if (data.error) {
        return `[DarkFox AI Error]: ${data.error.message} (Status: ${data.error.status}, Code: ${data.error.code})`;
      } 
      
      // Fallback 2: Safety blocker or unexpected API formats
      return "[DarkFox AI Error]: Message blocked by safety filters or received an unmappable payload response.";
      
    } catch (e) { 
      // Fallback 3: Network breakdown
      return `[DarkFox Connection Error]: ${e.message}`; 
    }
  }

  /**
   * Purges the active session history array.
   */
  clearHistory() {
    this.history = [];
  }
}
