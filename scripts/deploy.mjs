/* eslint-disable no-console */

// 如果 pm2 update 无法执行完成，那么可能是 node_modules 需要重装一下
const pm2Path = path.join(process.cwd(), 'bin', 'pm2')
const pm2DevPath = path.join(process.cwd(), 'bin', 'pm2-dev')
await $`echo "alias p='${pm2Path}'" >> ~/.zshrc`
await $`echo "alias p-dev='${pm2DevPath}'" >> ~/.zshrc`