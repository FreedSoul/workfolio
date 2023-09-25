# personal portfolio

this is the develop of [this design](https://www.figma.com/proto/AOKSFKoqjC7DLshc7Uu3Oo/web-portfolio?page-id=0%3A1&node-id=2%3A3&viewport=241%2C48%2C0.79&scaling=scale-down)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## how to fix errors & other advices

[failed to load swc binary](https://stackoverflow.com/questions/69816589/next-failed-to-load-swc-binary)

- Cmd + 0 (zero) to set focus on the file tree
- when the 'Image' component from [next], take more than the parent width with layout='fill', wrap with a container and dont forget to use position: relative[link](https://stackoverflow.com/questions/68920647/how-to-add-border-radius-to-next-js-image)
- bug in chrome (my version 103.0.5060.134) with fr unit not being responsive using grid-templetate-columns(solved with % units)
- to delete the spaces in **li** with css, use padding: 0; in the respective **ul**
- remember delete "**;**" in inline style must be object an {key:"without semicolon"}  
- if images not load at build in nextjs check the name of the file is case sensitive [this link talk about it](https://stackoverflow.com/questions/70797559/next-image-not-loading-in-production/70916637)
- the page have been laggy because of animation of rule [box-shadow], i read [this article](https://tobiasahlin.com/blog/how-to-animate-box-shadow/) that explain how expensive is the animation of box-shadow and an alternative to achieve the same result
- error with Image component in next config [part of the solution](https://stackoverflow.com/questions/69735652/nextjs-image-component-complaining-that-the-host-is-not-added-to-config-but-it)
- **TYPESCRIPT**
- i've an error changing a js function to ts, the type of the function could be confused with the type of return, using an arrow func and normal func [this clarification help to resolve](https://stackoverflow.com/questions/67213681/typescript-returns-error-when-a-function-type-is-functionalcomponent-but-not-fo)

## guides applied

[for design tokens i use](https://www.smashingmagazine.com/2021/07/global-local-styling-nextjs/)

## todo
