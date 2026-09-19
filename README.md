# OpenMouse Docs

Documentation site for the OpenMouse Project, built with [Docusaurus](https://docusaurus.io/). Deployed at [docs.openmouse.app](https://docs.openmouse.app).

Covers the app's architecture and, most importantly, how to add support for a new mouse — reverse-engineering conventions, writing a driver, and getting it registered and verified.

## Local development

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

Generates static content into `build/`. Run `npm run typecheck` for a TypeScript pass over the config and `src/` files.

## Related

- **[openmouse](https://github.com/OpenMouse-Project/openmouse)** — the Preact/Vite web control panel these docs are for.
- **[openmouse-landing-page](https://github.com/OpenMouse-Project/openmouse-landing-page)** — the marketing site at [openmouse.app](https://openmouse.app).
- **[mouse-protocol](https://github.com/OpenMouse-Project/mouse-protocol)** — the packet codecs and WebHID drivers these docs explain how to write.

## License

[GNU AGPL-3.0](https://github.com/OpenMouse-Project/openmouse-docs/blob/main/LICENSE), same as the rest of the project.