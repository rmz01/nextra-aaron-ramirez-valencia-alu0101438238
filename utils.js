export const replaceQuotes = s => s.replace(/(\\")|(")/g, function(m, p1, p2) { return p1? '"' : "`" })
export const arrayToMarkdownList = res => res.map(n => `- ${n}`).join("\n") 
