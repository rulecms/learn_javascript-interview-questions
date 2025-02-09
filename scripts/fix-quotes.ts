import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeQuotes(content: string): string {
  // First, identify and protect code blocks
  const codeBlocks: string[] = [];
  const contentWithoutCode = content.replace(
    /\{`([^`]*)`\}/g,
    (match) => {
      codeBlocks.push(match);
      return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
    }
  );

  // Replace quotes in JSX content but protect className and other attributes
  const processedContent = contentWithoutCode.replace(
    /(<[^>]*>[^]*?<\/[^>]*>)/g,
    (match) => {
      // Don't modify quotes in JSX attributes
      return match.replace(
        /(?<!=['"]\{?)(?<!className=["'])(?<!\{)['"](?!['"])/g,
        (quote) => quote === '"' ? '&quot;' : '&apos;'
      );
    }
  );

  // Restore code blocks
  return processedContent.replace(
    /__CODE_BLOCK_(\d+)__/g,
    (_, index) => codeBlocks[parseInt(index)]
  );
}

function processFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = escapeQuotes(content);
  
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated quotes in ${filePath}`);
  }
}

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

// Start processing from the questions directory
const questionsDir = path.join(process.cwd(), 'src', 'app', 'questions');
processDirectory(questionsDir); 