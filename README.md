## Personal Portfolio

## Environment to run this project:
1. Nodejs 16.19.2
2. NextJS 11 -> 12
3. React Version 17.0.2
3. Breaking Changes: `.babelrc` to `next.config.mjs`

### How to migrate from `.babelrc` to `next.config.mjs`
#### From `.babelrc`
```javascript
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```
#### To `next.config.mjs`
```javascript
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compiler:{
    styledComponents:{
      ssr:true
    }
  },
  swcMinify: true
  /* config options here */
}

export default nextConfig;
```

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)