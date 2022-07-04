
<center>

[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]

</center>

<br>

<center> <img src="https://i.imgur.com/wIOGyUQ.png"> </center>

<br> 

<p align="center">
    Collection of curated apps for HyperOS the no bullshit home-server dashboard.
    <br />
    <a href="https://github.com/gethyperos/apps/blob/master/index.json">View apps</a>
    ·
    <a href="https://github.com/gethyperos/apps/issues/new?assignees=nodgear&labels=App%2C+good+first+issue&template=app-request.md&title=%5BAPP%5D">Request new app</a>
    ·
    <a href="#Contributing">Submit new app</a>
</p>
<br>

## This repository contains all official apps for hyperos.

- Based on the [hypr-repository](https://github.com/getHyperOS/hypr-repository) template
- Doesn't contain any core functionality for HyperOS, allowing users to build their own custom repository.

## Contributing

Fork this repository, create a new app under the `Apps` directory.

### app.json

The `app.json` file is your entry for describing the functionality of this app.
 - It works by extending the popular `docker-compose` format.
 - Auto-completion and intelisense is provided by a json schema, almost field has a description if you ever need it.
 - Every file path specified is relative to itself (ex: `metadata/icons.png` = `Apps/\<myappname\>/icon.png`)
<hr />

### app.md

This file is displayed on your app page under HyperOS web interface, it should contains a more detailed description about your app and what it does

HyperOS parses some extra tags to better fit the appStore:

 - `<slide> <slide>` The slide tag accepts multiple images as content, drawing the horizontal image slide (usually shown as first element on appstore)

<hr />

### Issues

Feel free to open issues requesting new apps, bare in mind the official repository has few rules that every app must fit:

- Applications directly related to porn are not allowed.
- Crypto mining related applications are not allowed, you might wanna look at [Umbrel](https://github.com/getumbrel/).

### Pull requests

- Icons must have same look-and-feel.
- Non nullable environment variables must have a description.
- Nullable environmet variables may have an empty string as value.
- Unless required to function, apps should use the `/hypros` directory for volume bindings
- Make sure your app has the needed metadata.


Your app is validated before you commit by Husky.
Use the provided PR template whenever it's possible.
You can manually validate your app to check if everything is going well by running `npm run validate` or `yarn validate` (remember to install dependencies first)



<!-- Markdown references -->
[contributors-shield]: https://img.shields.io/github/contributors/gethyperos/apps.svg?style=for-the-badge
[contributors-url]: https://github.com/gethyperos/apps/graphs/contributors
[license-shield]: https://img.shields.io/github/license/gethyperos/apps.svg?style=for-the-badge
[license-url]: https://github.com/gethyperos/apps/blob/master/LICENSE.txt