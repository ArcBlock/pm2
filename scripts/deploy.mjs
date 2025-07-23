/* eslint-disable no-console */
const pm2Path = path.join(process.cwd(), 'bin', 'pm2')
const pm2DevPath = path.join(process.cwd(), 'bin', 'pm2-dev')
await $`echo "alias p='${pm2Path}'" >> ~/.zshrc`
await $`echo "alias p-dev='${pm2DevPath}'" >> ~/.zshrc`