import fs from 'fs';
import path from 'path';

const questionsDir = path.join(process.cwd(), 'src', 'app', 'questions');

function fixQuotes(content: string): string {
  // Only fix quotes within JSX tags, not in code blocks
  return content.replace(
    /(<[^>]*>)(.*?)(<\/[^>]*>)/gs,
    (match, openTag, content, closeTag) => {
      const fixedContent = content
        .replace(/(?<!\\)'/g, '&apos;')
        .replace(/(?<!\\)"/g, '&quot;');
      return `${openTag}${fixedContent}${closeTag}`;
    }
  );
}

function processFile(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixQuotes(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed quotes in ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      processFile(filePath);
    }
  });
}

// Start processing
console.log('🔍 Scanning for unescaped quotes...');
processDirectory(questionsDir);
console.log('✨ Done!'); 