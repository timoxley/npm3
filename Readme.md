# npm-next

Simply wraps the latest, possible unstable version of npm under a new
command-line name for easier testing.

Will update weekly with prerelease version of npm. Will always bump
major.

## Installation

```
npm install -g npm-next
```

## Usage

`npm-next` behaves exactly like npm. This allows your existing npm
installation to continue working alongside the latest testing version.

```
> npm-next -v
2.0.0-beta.0
> npm-next install # etc
```

# License

MIT
