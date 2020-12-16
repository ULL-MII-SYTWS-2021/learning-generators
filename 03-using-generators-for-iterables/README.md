# About ES6 Modules in Node.JS

I am using (2020) a node.js version:

```
➜  03-using-generators-for-iterables git:(master) ✗ node --version
v14.4.0
```

Node.js treats JavaScript code as **CommonJS** modules by default. 

Authors can tell Node.js to treat JavaScript code as **ECMAScript** modules via 

1. the `.mjs` file extension, 
2. the nearest `package.json` `"type"` field with a value of `"module"`, (as in this example) or 
3. the `--input-type=module` flag. 

Package authors should include the `"type"` field, even in packages where all sources are `CommonJS`. 

Being explicit about the type of the package will future-proof the package in case the default type of Node.js ever changes, and it will also make things easier for build tools and loaders to determine how the files in the package should be interpreted.

See the Node.js doc [Modules: Packages](https://nodejs.org/api/packages.html#packages_determining_module_system) for more details.
