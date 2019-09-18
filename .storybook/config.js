import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js

function loadStories() {
  const req = require.context(
    require.context('../stories', true, /\.stories\.js$/)
  );

  req.keys().forEach(req);
}

configure(loadStories, module);

// configure(require.context('../stories', true, /\.stories\.js$/), module);
