import pdf from 'pdf-parse';

export async function parseResume(input: Buffer | string): Promise<string> {
  try {
    let buffer: Buffer;
    
    if (typeof input === 'string') {
      const fs = await import('fs/promises');
      buffer = await fs.readFile(input);
    } else {
      buffer = input;
    }

    const data = await pdf(buffer);
    
    const text = data.text;
    
    if (!text || text.trim().length === 0) {
      throw new Error('No text content found in PDF');
    }

    const cleanText = text
      .replace(/\s+/g, ' ') 
      .replace(/\n\s*\n/g, '\n')
      .trim();

    return cleanText;
    
  } catch (error) {
    console.error('Error parsing resume:', error);
    throw new Error(`Failed to parse resume: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}