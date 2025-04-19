# {{ cookiecutter.project_name }}

{{ cookiecutter.project_name }} is a TypeScript library. It uses [Vite](https://vitejs.dev/guide/) with a custom [Rollup](https://rollupjs.org/) config.

## Prerequisites

This project uses a Dev Container to provide the required tools for Web Development. 
You must have VS Code and the Dev Containers extension installed on your host machine as well as the Docker Engine. 

### Linux

Follow [this Guide](https://docs.docker.com/engine/install/ubuntu/) to install Docker.

### Windows

You can use Docker Desktop for a simple setup. 
But it is recommended, to use [WSL2 with a Ubuntu](https://learn.microsoft.com/en-us/windows/wsl/install) distribution and install Docker there. 
This way you avoid problems with the mounting of ssh keys.

### Tutorials

Here are three video tutorials that will get you started with Docker and Dev Containers:

- [Where Dev Containers are helpful](https://youtu.be/9F-jbT-pHkg?si=yW4RThXZNC0SMIyl)
- [How to create a custom Dev Container](https://youtu.be/7P0pTECkiN8?si=51YPKbUzL7OlAs80)
- [How to configure VS Code Extenstions and Settings in a Dev Container](https://youtu.be/W84R1CxtF0c?si=YBhBRzKk1lgCKEyz)

## Development

To prepare the project:

1. Open the project folder in VSCode.
2. `CTRL+Shift+P` and enter "Dev Containers: Rebuild and Reopen in Container".
3. Inside the Dev Container run: `npm i`.

Source code is located under "src". 
Before you make changes, start the development server running `npm run dev`. 
You can then navigate to the test page in the browser.

To see changes taking effect, you have to press `r + Enter` in the console window that is currently running the development server. 
It will restart the server and reload the page. 
Automatic reloading will only work, if your host system is Linux based. 
If your host system is Windows, file changes are not properly propagated to the Dev Container and Vite will not recognize those automatically.

## Build

Run `npm run build`. 
It will create {%- if cookiecutter.project_type == "all" -%}
a ESM, CJS, and IFFE library:

- **lib** - This folder will contain the ES6 version to be used as dependency in other ES6+ or TypeScript projects. Using this version will enable Tree-Shaking.
- **lib-cjs** - This folder contains a CommonJS build of the library. It can be used in Node.js projects.
- **lib-iife** - This folder contains a build targeting browser use via the ``<script>`` tag. 
{%- elif cookiecutter.project_type == "esm" -%}
a ESM library:

- **lib** - This folder will contain the ES6 version to be used as dependency in other ES6+ or TypeScript projects. Using this version will enable Tree-Shaking.
{%- elif cookiecutter.project_type == "cjs" -%}
CJS library:

- **lib-cjs** - This folder contains a CommonJS build of the library. It can be used in Node.js projects.
{%- elif cookiecutter.project_type == "iife" -%}
IFFE library:

- **lib-iife** - This folder contains a build targeting browser use via the ``<script>`` tag. 
{%- endif -%}

All code is minified per default. Console logs are stripped.
