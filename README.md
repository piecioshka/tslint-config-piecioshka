# tslint-config-piecioshka

[![node version](https://img.shields.io/node/v/tslint-config-piecioshka.svg)](https://www.npmjs.com/package/tslint-config-piecioshka)
[![npm version](https://badge.fury.io/js/tslint-config-piecioshka.svg)](https://badge.fury.io/js/tslint-config-piecioshka)
[![downloads count](https://img.shields.io/npm/dt/tslint-config-piecioshka.svg)](https://www.npmjs.com/~piecioshka)
[![size](https://packagephobia.com/badge?p=tslint-config-piecioshka)](https://packagephobia.com/result?p=tslint-config-piecioshka)
[![license](https://img.shields.io/npm/l/tslint-config-piecioshka.svg)](https://piecioshka.mit-license.org)

🔨 TSLint configuration of my style.

> Give a ⭐️ if this project helped you!

## Usage

Installation:

```bash
npm install -D tslint-config-piecioshka
```

- `tslint.json`:

    ```json
    {
        "extends": "tslint-config-piecioshka"
    }
    ```

    or

    ```json
    {
        "extends": [
            "tslint:recommended",
            "tslint-config-piecioshka"
        ]
    }
    ```

- `package.json`

    ```json
    "scripts": {
        "lint": "tslint -p ."
    },
    ```

## Disclaimer

<mark>[2019-08-09]</mark>

Yes, I know, that TSLint is [deprecated](https://github.com/palantir/tslint/issues/4534). But for now it a long term plan.<br/>
If you would like to use own config you can **Fork** that repo to create
your configuration to share across TypeScript projects.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/piecioshka/tslint-config-piecioshka/issues/).

## Related

- [eslint-config-piecioshka](https://github.com/piecioshka/eslint-config-piecioshka)

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2019
