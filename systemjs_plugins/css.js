//
// Custom css plugin here
//

import { CSSLoader, Plugins } from 'jspm-loader-css'
import calc from 'postcss-calc';
import cssvariables from 'postcss-css-variables';

const {fetch} = new CSSLoader([
  cssvariables({
    variables: {
      gWindowGeaderHeight: '33px'
    }
  }),
  calc(),
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName);

export {fetch};
