//
// Custom css plugin here
//

import { CSSLoader, Plugins } from 'jspm-loader-css'
import cssvariables from 'postcss-css-variables';

const {fetch} = new CSSLoader([
  cssvariables({
    variables: {

    }
  }),
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName);

export {fetch};
