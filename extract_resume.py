import pypdf
import os

pdf_path = r"c:\Users\viv20\codingByVS\Portfolio Latest\Portfolio-Website\public\Resume.pdf"
output_path = r"C:\Users\viv20\.gemini\antigravity-ide\brain\c2e136ab-61c2-4eaa-8a1c-79ee34073b5f\scratch\extracted_resume.txt"

os.makedirs(os.path.dirname(output_path), exist_ok=True)

reader = pypdf.PdfReader(pdf_path)
text_content = ""
for page in reader.pages:
    text_content += page.extract_text() + "\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(text_content)

print(f"Extracted {len(reader.pages)} pages of text to {output_path}")
