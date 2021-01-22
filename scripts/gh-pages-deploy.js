const execa = require('execa');
const emoji = require('node-emoji');
const chalk = require('chalk');
const fs = require('fs');

const e_arrows = emoji.get('fast_forward');
const e_rocket = emoji.get('rocket');

const master = 'master';
const deploy = 'build'; //gh-pages

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', deploy]);
    console.log(`${e_arrows} ${chalk.yellow('Building...')}`);
    await execa('npm', ['run', 'build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', deploy]);
    console.log(`${e_arrows} ${chalk.yellow('Pushing...')}`);
    await execa('git', ['push', 'origin', `HEAD:${deploy}`, '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', master]);
    await execa('git', ['branch', '-D', deploy]);
    console.log(`${e_rocket} ${chalk.green('Successfully deployed')} ${e_rocket}`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
