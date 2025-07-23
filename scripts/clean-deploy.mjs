/* eslint-disable no-console */
import { homedir } from 'os';

const home = homedir();
const nodeVersion = process.version;

// 卸载 pm2
await $`npm uninstall -g @arcblock/pm2 || true`;
await $`pnpm uninstall -g @arcblock/pm2 || true`;
await $`bun uninstall -g @arcblock/pm2 || true`;