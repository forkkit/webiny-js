# webiny-api-site-builder
[![](https://img.shields.io/npm/dw/webiny-api-site-builder.svg)](https://www.npmjs.com/package/webiny-api-site-builder) 
[![](https://img.shields.io/npm/v/webiny-api-site-builder.svg)](https://www.npmjs.com/package/webiny-api-site-builder)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

The API for the Webiny Site Builder ([webiny-app-site-builder](../webiny-app-site-builder)) app.
    
## Install
```
npm install --save webiny-api-site-builder
```

Or if you prefer yarn: 
```
yarn add webiny-api-site-builder
```

## Setup
To setup, you must register a set of plugins. For more information on 
plugins, please visit [Webiny documentation](https://docs.webiny.com/docs/developer-tutorials/plugins-crash-course).

```
import siteBuilderPlugins from "webiny-api-site-builder"
import { registerPlugins } from "webiny-plugins";

registerPlugins(...siteBuilderPlugins);
```

Exposes necessary GraphQL fields that handle app settings, pages and more.