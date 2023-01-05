## Personal Portfolio
![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

## Current Environment
1. Nodejs 16.19.2
2. NextJS 12
3. React Version 17.0.2

## Change Log
### Changes from NextJS 11 to NextJS 12
1. Nodejs 16.19.2
2. NextJS 11 -> 12
3. React Version 17.0.2
#### Breaking Changes: `.babelrc` to `next.config.mjs`
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

### Changes from NextJS 10 to NextJS 11
1. Nodejs 16.19.2
2. NextJS 10 -> 11
3. React Version 17.0.2



