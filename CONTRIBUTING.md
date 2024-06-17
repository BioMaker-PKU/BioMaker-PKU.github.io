# How to contribute

## Getting started

1. Make sure that you have [Bun](https://bun.sh/) installed. (This is an all-in-one package manager and runtime)
2. For code editor we recommend using [Visual Studio Code](https://code.visualstudio.com/).

## Clone your own fork

1. Fork the repository on GitHub.
2. Clone the forked repository to your local machine.
3. Open the cloned repository in your code editor.

## Install dependencies

1. Open a terminal in the cloned repository.
2. Run the following command to install dependencies:

```bash
bun install
```

3. Install [pre-commit](https://pre-commit.com/), and install pre-commit hooks:

```bash
pre-commit install
```

## Start the development server

1. Run the following command to start the development server:

```bash
bun docs:dev
```

2. Make your changes and preview the result in the browser.

## Commit your changes

1. Before you commit any changes, make sure that your have gone through the [checklist](#checklist).
2. After commit, push your changes to your forked repository.
3. Create a pull request to the main repository.
4. Wait for the pull request to be reviewed and merged. Thank you for your contribution!

## Checklist

- [ ] I have read the [contributing guideline](CONTRIBUTING.md).
- [ ] I have previewed the site using `bun docs:dev` to make sure that there are no rendering errors.
- [ ] I have built the site using `bun docs:build` to make sure that there are no build errors.
- [ ] I have installed [pre-commit hooks](#install-dependencies).
- [ ] I am using [Conventional Commits](https://www.conventionalcommits.org/).
- [ ] I have clearly described the changes I made in the commit message.
