# webiny-app-site-builder
[![](https://img.shields.io/npm/dw/webiny-app-site-builder.svg)](https://www.npmjs.com/package/webiny-app-site-builder) 
[![](https://img.shields.io/npm/v/webiny-app-site-builder.svg)](https://www.npmjs.com/package/webiny-app-site-builder)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Enables Webiny Site Builder in your Admin area. 

Use together with [webiny-api-site-builder](../webiny-api-site-builder) package.

For more information, please visit the Webiny documentation:
1. [Webiny Theme Tutorial Overview](https://docs.webiny.com/docs/developer-tutorials/new-theme-overview)
2. [SB Page Element - Overview](https://docs.webiny.com/docs/developer-tutorials/sb-page-element-overview) 
  
## Install
```
npm install --save webiny-app-site-builder
```

Or if you prefer yarn: 
```
yarn add webiny-app-site-builder
```

Note: the [webiny-api-site-builder](../webiny-api-site-builder) is also required.

## Setup
To setup, you must register a set of plugins. For more information on 
plugins, please visit [Webiny documentation](https://docs.webiny.com/docs/developer-tutorials/plugins-crash-course).

#### Admin
```
import siteBuilderPlugins from "webiny-app-site-builder/admin"
import { registerPlugins } from "webiny-plugins";

registerPlugins(siteBuilderPlugins);
```
    
#### Site
```
import siteBuilderPlugins from "webiny-app-site-builder/render"
import { registerPlugins } from "webiny-plugins";

registerPlugins(siteBuilderPlugins);
```