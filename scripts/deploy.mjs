/* eslint-disable no-console */
const pm2Path = path.join(process.cwd(), 'bin', 'pm2')
const pm2DevPath = path.join(process.cwd(), 'bin', 'pm2-dev')
await $`echo "alias pm2='${pm2Path}'" >> ~/.zshrc`
await $`echo "alias pm2-dev='${pm2DevPath}'" >> ~/.zshrc`