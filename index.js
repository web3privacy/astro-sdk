// Do not write code directly here, instead use the `src` folder!

// What you should do here is re-exports all the things you want your user to access, ex:
// export { HelloWorld } from "./src/main.ts"
// export type { HelloWorldResult } from "./src/types.ts"

// @ts-expect-error/
//import Component from './src/Component.astro';

export const data = { foo: "barxx" };

export { default as TestComponent } from './src/Component.astro';