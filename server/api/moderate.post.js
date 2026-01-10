import { GoogleGenerativeAI } from '@google/generative-ai';

export default defineEventHandler(async (event) => {
  const { text, locale } = await readBody(event);
  const config = useRuntimeConfig();
  const genAI = new GoogleGenerativeAI(config.geminiApiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

  const prompt = `
你是一個社交平台的內容審查員。請分析以下文字（語言：${locale}）：
"${text}"

請判斷該文字是否包含：
1. 惡意攻擊或騷擾
2. 色情或露骨內容
3. 嚴重歧視

請僅以 JSON 格式回傳，格式如下：
{
  "isSafe": boolean,
  "reason": "原因簡述（若安全則留空）",
  "suggestion": "修改建議（若安全則留空）"
}
  `.trim();

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt }, // ✅ 關鍵：中文一定要放在 parts.text
          ],
        },
      ],
    });

    const response = result.response;
    const rawText = response.text();

    // 使用正規表達式抓取第一個 { 到最後一個 } 之間的內容
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      console.error('AI 回傳格式錯誤，找不到 JSON:', rawText);
      return { isSafe: true, reason: '審查格式錯誤', suggestion: '' };
    }

    const jsonString = jsonMatch[0];

    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Gemini 審查失敗:', error);
    return { isSafe: true, reason: '系統繁忙，暫時放行' };
  }
});
