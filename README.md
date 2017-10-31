# Repro StackOverflow 45123536

> Test cases for [StackOverflow question 45123536](https://stackoverflow.com/questions/45123536)

The goal is to construct a [Joi](https://github.com/hapijs/joi) schema that validates an object with a set of fields that are strings (social URLs, for the sake of example). We want to require a value for at least one of these fields, regardless of which field it is.

We also want fields that lack a value to have only one possible falsey state, because the object will ultimately be stored in a database. As currently designed, the falsey state is `null` rather than empty string, but this could be changed.

## Install

```sh
git clone git@github.com:sholladay/repro-so-45123536.git &&
cd repro-so-45123536 &&
npm install
```

## Testing

Run the tests:

```sh
npm test
```

One failure will appear, which is expected. The schema in `index.js` needs to be fixed to make the tests pass. It is okay to modify the tests if the schema can be made simpler by changing the falsey state of missing fields from `null` to an empty string.

## Contributing

See our [contributing guidelines](https://github.com/sholladay/repro-so-45123536/blob/master/CONTRIBUTING.md "Guidelines for participating in this project") for more details.

1. [Fork it](https://github.com/sholladay/repro-so-45123536/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/repro-so-45123536/compare "Submit code to this project for review").

## License

[MPL-2.0](https://github.com/sholladay/repro-so-45123536/blob/master/LICENSE "License for repro-so-45123536") © [Seth Holladay](https://seth-holladay.com "Author of repro-so-45123536")

Go make something, dang it.
