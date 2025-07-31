// vite.config.js or mock file
export async function GET(req) {
  const url = new URL(req.url);
  const title = url.searchParams.get("title")?.toLowerCase();

  const keywordMap = {
    'frontend developer': ['React', 'JavaScript', 'CSS', 'HTML', 'Redux'],
    'backend developer': ['Node.js', 'Express', 'MongoDB', 'SQL', 'API'],
    'data analyst': ['Excel', 'Python', 'Pandas', 'SQL', 'Power BI'],
  };

  const keywords = keywordMap[title] || [];

  return new Response(JSON.stringify({ keywords }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
