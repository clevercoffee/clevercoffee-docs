# CleverCoffee documentation

This repository contains the English and German documentation for
[CleverCoffee](https://github.com/rancilio-pid/clevercoffee), an open-source
espresso-machine controller. The docs focus on the current firmware and on
people building and installing their own hardware.

## Preview the documentation locally

Install Python, then install the documentation dependencies and start MkDocs:

```sh
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Open the local URL printed by MkDocs. The default language is English; the
German version is available from the language selector.

## Publish with GitHub Pages

The GitHub Actions workflow builds the site on every push to `master` and
deploys it to GitHub Pages. To enable publishing, set the repository's Pages
source to **GitHub Actions** under **Settings → Pages**. The deployed site is
available at <https://clevercoffee.github.io/clevercoffee-docs/>.

## Documentation structure

Content lives in `docs/en/` and `docs/de/`. Both language trees use the same
page paths so the language selector can take readers to the translated version
of the page they are viewing.

The main sections are Getting Started, Hardware, Installation, Features,
Configuration, Development, FAQ, and Troubleshooting. The Web Flasher is the
recommended installation method. PlatformIO is covered only in Development.

## Safety

CleverCoffee hardware is installed inside espresso machines that contain
hazardous mains voltage. The documentation highlights electrical safety, but
is not a substitute for the machine manufacturer's instructions or qualified
electrical work.

## Upstream project

- Software and current feature information: [rancilio-pid/clevercoffee](https://github.com/rancilio-pid/clevercoffee)
- Web Flasher: [clevercoffee-flasher](https://rancilio-pid.github.io/clevercoffee-flasher/)
