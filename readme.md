# VoltaOS Repository template

This repository purpose is to serve as template for VoltaOS repositories, including the official one and contains:
- JSON Schemas to help creating new apps
- Validator with Husky to validate new apps on commit
- Example app

## Creating apps for Volta:

### Format
Apps are based on the [Docker Compose]() Format but extended to fit the customizability and "user friendliness" of Volta.
Each app should have it's own folder under the `./Apps` directory.
Inside that folder every app is required to have a manifest file called `app.json`
If you are using VSCode linting and auto-completion should be available on the file, press ctrl+space to start (or just duplicate any other app to start)

### The metadata folder

Inside every app folder there's another directory called `metadata`, this repository is responsible for holding images and the markdown file displayed under the app information on the dashboard.

## Custom repositories

Volta allows for custom repositories for advanced users.

### Enabling custom repositories:
- Use this repository as template or Fork it to your account.
- Copy the new repository URL `ex: https://github.com/username/volta_repo`
- Go to Volta Dashboard, and insert the URL you just copied into `Repository URL` field under your settings page.
- Now proceed to your Apps page & hit **refresh** to clear the cache.

