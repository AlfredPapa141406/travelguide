// Script to convert markdown files to JSON for easier consumption
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

async function generateDestinations() {
  const destinationsDir = join(process.cwd(), 'data/destinations');
  const files = await readdir(destinationsDir);
  const destinations = {};

  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = join(destinationsDir, file);
      const content = await readFile(filePath, 'utf-8');
      const { data, content: body } = matter(content);
      
      if (data.published && data.id) {
        destinations[data.id] = {
          title: data.title,
          image: data.image,
          description: data.description,
          details: body,
          region: data.region,
          regionDisplay: data.regionDisplay
        };
      }
    }
  }

  return destinations;
}

// For Node.js usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateDestinations };
}

