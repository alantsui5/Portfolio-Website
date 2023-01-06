## Personal Portfolio
![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

## Current Environment
1. Nodejs 16.19.0 -> 18.12.1 (LTS)
2. NextJS 12 -> 13
3. React 17.0.2 -> 18.2.0
4. eslint-config-next 13.1.1
5. SWR 2.0.0

## Changelog
### Changes from NextJS 12 to NextJS 13
1. Nodejs 16.19.0 -> 18.12.1 (LTS)
2. NextJS 12 -> 13
3. React 17.0.2 -> 18.2.0
4. eslint-config-next 13.1.1
5. SWR 2.0.0
### \<Link\> Component Breaking Change
The <Link> Component no longer requires manually adding an \<a\> tag as a child. <br />
This behavior was added as an experimental option in version 12.2 and is now the default. <br>
In Next.js 13, \<Link\> always renders \<a\> and allows you to forward props to the underlying tag.

> For example:
```javascript
import Link from 'next/link'

// Next.js 12: `<a>` has to be nested otherwise it's excluded
<Link href="/about">
  <a>About</a>
</Link>

// Next.js 13: `<Link>` always renders `<a>` under the hood
<Link href="/about">
  About
</Link>
```
To upgrade your links to Next.js 13, you can use the new-link codemod.
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

