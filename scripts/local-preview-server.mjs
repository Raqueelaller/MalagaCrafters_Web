import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';

const rootDirectory = join(process.cwd(), 'dist', 'malagaCrafters', 'browser');
const rootPrefix = `${rootDirectory}${sep}`;
const port = Number(process.env.PORT ?? 4200);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

const serveFile = async (filePath, response) => {
  const content = await readFile(filePath);
  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });
  response.end(content);
};

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
  const requestedPath = normalize(join(rootDirectory, pathname === '/' ? 'index.html' : pathname));
  const isWithinBuild = requestedPath === rootDirectory || requestedPath.startsWith(rootPrefix);

  if (!isWithinBuild) {
    response.writeHead(403);
    response.end();
    return;
  }

  try {
    const details = await stat(requestedPath);

    if (details.isFile()) {
      await serveFile(requestedPath, response);
      return;
    }
  } catch {
    // Angular routes intentionally fall through to the application shell.
  }

  await serveFile(join(rootDirectory, 'index.html'), response);
}).listen(port, '127.0.0.1');
