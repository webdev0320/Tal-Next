import { execSync } from 'child_process';

try {
  console.log('--- GIT BRANCH ---');
  console.log(execSync('git branch -a').toString());
  
  console.log('--- GIT STATUS ---');
  console.log(execSync('git status').toString());

  console.log('--- GIT RECENT COMMITS ---');
  console.log(execSync('git log -n 5 --oneline').toString());

  console.log('--- GIT STASH LIST ---');
  console.log(execSync('git stash list').toString());
} catch (e) {
  console.error('Error running git commands:', e.message);
}
