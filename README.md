# Coworker Module Template

This template creates a basic Typescript library project.
To create a project:

1) Install Python on your system if you don't have it already.
2) Install [Cookiecutter](https://www.cookiecutter.io/): `pip3 install cookiecutter`.
3) Create the project: `cookiecutter https://github.com/MichaelBreitung/typescript-boiler-plate.git`
4) When asked for a project name, provide one. Ideally, use a single word.
5) Next you'll be asked for the "project_slug". This will be used as folder name for the project and as name for the library.
6) You can also select if you want only a ESM, a CJS, or a IIFE module. Or you can select to create "all".

<<<<<<< HEAD
This project uses a Dev Container to provide the required tools for Web Development. You must have VS Code and the Dev Containers extension installed on your host machine as well as the Docker Engine. On Windows, you can use Docker Desktop, for example. To avoid problems with the mounting of ssh keys, it is recommended, though, to use WSL2 with a Ubuntu distribution and install Docker there.

Here are three video tutorials that will get you started with Docker and Dev Containers:

- [Where Dev Containers are helpful](https://youtu.be/9F-jbT-pHkg?si=yW4RThXZNC0SMIyl)
- [How to create a custom Dev Container](https://youtu.be/7P0pTECkiN8?si=51YPKbUzL7OlAs80)
- [How to configure VS Code Extenstions and Settings in a Dev Container](https://youtu.be/W84R1CxtF0c?si=YBhBRzKk1lgCKEyz)

To prepare the project:

1. Clone or download the repository.
2. Open the project folder in VSCode.
3. `CTRL+Shift+P` and enter "Dev Containers: Rebuild and Reopen in Container".
4. Inside the Dev Container run: `npm i`.

## Dependencies

### Typia

[Typia](https://github.com/samchon/typia) is used for runtime type parsing and validation. 
Use it at the interface level of the library you create to ensure that incoming types match the static types you define.

## Development

Source code is located under "src". 
Before you make changes, start the development server running `npm run dev`. 
You can then navigate to different test pages in the browser.

To see changes taking effect, you have to press `r + Enter` in the console window that is currently running the development server. 
It will restart the server and reload the page. 
Automatic reloading will only work, if your host system is Linux based. 
If your host system is Windows, file changes might not be properly propagated to the Dev Container and Vite will not recognize those automatically.

## Build

Run `npm run build` to create the ES6 library to be used in other projects as dependency, the CommonJS library to be used in Node.js projects, and the IIFE minimized JavaScript library for inclusion in HTML pages.

The three versions are located in three different folders:

- **lib** - This folder will contain the ES6 version to be used as dependency in other ES6+ or TypeScript projects. Using this version will enable Tree-Shaking.
- **lib-cjs** - This folder contains a CommonJS build of the library. It can be used in Node.js projects.
- **lib-iife** - This folder contains a build targeting browser use via the ``<script>`` tag. 

All code is minified per default. Console logs are stripped.
=======
A new folder with the project will be created under "project_slug".
Git will already be initialized.
>>>>>>> f718e8d (added cookiecutter module)
