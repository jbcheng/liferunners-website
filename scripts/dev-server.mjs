import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { watch } from 'fs/promises';
import { buildSite } from './build.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const watchTargets = [path.join(rootDir, 'src'), path.join(rootDir, 'public'), path.join(rootDir, 'scripts')];

let serverProcess;
let building = false;
let rebuildQueued = false;

async function runBuild() {
  if (building) {
    rebuildQueued = true;
    return;
  }
  building = true;
  try {
    console.log('[dev] Building site...');
    await buildSite();
    console.log('[dev] Build complete.');
  } catch (error) {
    console.error('[dev] Build failed:', error);
  } finally {
    building = false;
    if (rebuildQueued) {
      rebuildQueued = false;
      runBuild();
    }
  }
}

function startServer() {
  if (serverProcess) {
    return;
  }
  serverProcess = spawn(process.execPath, [path.join(__dirname, 'serve.mjs')], {
    stdio: 'inherit'
  });
  serverProcess.on('exit', (code) => {
    if (code !== 0) {
      console.warn(`[dev] Server exited with code ${code}`);
    }
    serverProcess = undefined;
  });
}

async function watchAndRebuild() {
  const watchers = watchTargets
    .filter(Boolean)
    .map(async (dir) => {
      try {
        const watcher = watch(dir, { recursive: true });
        for await (const event of watcher) {
          if (!event || event.filename?.includes('~')) continue;
          await runBuild();
        }
      } catch (error) {
        if (error.code === 'ERR_FEATURE_UNAVAILABLE_ON_PLATFORM') {
          console.warn(`[dev] Recursive watch not available for ${dir}. Consider rerunning build manually.`);
        } else if (error.code !== 'ENOENT') {
          console.error(`[dev] Watcher error on ${dir}:`, error);
        }
      }
    });
  await Promise.all(watchers);
}

async function main() {
  await runBuild();
  startServer();
  await watchAndRebuild();
}

process.on('SIGINT', () => {
  if (serverProcess) {
    serverProcess.kill('SIGINT');
  }
  process.exit(0);
});

main();
