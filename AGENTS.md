# Rules for AI assistants in the coffee-menu project

## Scope
- Work only on the branch the user created. Never commit or push to main.
- Change only the files and parts named in the task. Do not reformat whole files. Do not rename existing functions or variables.
- Do not change menu names, prices, or any user-visible text unless the task says so.

## Security
- Never put API keys, passwords, or tokens in code. Read them from the .env file, which is listed in .gitignore.
- Never edit .gitignore to stop ignoring .env.

## When you finish
- List every file you changed and why.
- Explain how to test the change, referring to the "How to test" section of README.md.
