import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const resumePath = path.join(
    process.cwd(),
    "assets",
    "Muhammad_Fahad_Resume.pdf",
  );
  const resume = await readFile(resumePath);

  return new Response(resume, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Muhammad_Fahad_Resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
