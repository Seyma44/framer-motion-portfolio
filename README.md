# React + TypeScript + Vite + Portfolio

https://github.com/Seyma44/framer-motion-portfolio/assets/3766249/1147480c-b03a-46b2-9b60-1d3180f9542c

https://github.com/Seyma44/framer-motion-portfolio/assets/3766249/533202cf-5c5a-4be0-924d-c92e24467710

**Commands**

- Clone the repository: `git clone https://github.com/Seyma44/framer-motion-portfolio`
- Install dependencies with npm: `npm install`
- Install dependencies with Yarn: `yarn install`

**Usage**

- Run the development server with npm: `npm run dev`
- Run the development server with Yarn: `yarn dev`
- Build the project with npm: `npm run build`
- Build the project with Yarn: `yarn build`
- Preview the built project: `npm run preview` or `yarn preview`

## Features

- Utilizes React for building interactive user interfaces.
- Incorporates Emotion for styling components with CSS-in-JS approach.
- Integrates Material-UI for access to pre-designed UI components and icons.
- Employs animations and transitions using GSAP and Framer Motion libraries.
- Implements scroll animations using AOS (Animate On Scroll) library.
- Supports smooth transitions and effects with React-GSAP integration.
- Includes CountUp for animating numerical data on the fly.
- Utilizes React Router DOM for client-side routing and navigation.
- Enhances user experience with carousel functionality using React-Slick.
- Supports typing animations with Typewriter Effect library.
- Developed with TypeScript for enhanced type safety and developer experience.
- Utilizes Vite as a fast build tool and development server.



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
