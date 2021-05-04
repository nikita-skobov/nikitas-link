# nikitas-link

> My personal website: https://nikitas.link

In 2021 I decided to rewrite my personal website/landing page.
It was written in react (still is), but it had an unnecessary amount of javascript, and I think a simple landing page of static content shouldn't need any javascript.

However, I still like react, so I rewrote it in a slightly more modern way (I used [vite](https://vitejs.dev/)) and I created a configuration such that it can be rendered to just html/css and then deployed without any javascript.


It used to look like this:

![old_img](https://github.com/nikita-skobov/nikitas-link/blob/0962fba283729e7005fcf5c3dfa345938cb8e299/.github/homepage.png?raw=true)

Now it looks like this:

[nikitas.link](https://nikitas.link)

## Building

If you want to build this website locally, just do:

```sh
git clone https://github.com/nikita-skobov/nikitas-link
cd nikitas-link
npm install

# to run the dev server
npm run dev
# to generate a full static build
npm run generate
```

**This will probably fail at first because its missing some images in src/img/[...]**. I don't want to commit those images, so that's why they are missing. You can just put your own placeholder images there according to the paths referenced by `src/projects.tsx`

## Note on SSR

This website is statically generated. Typically people refer to this as SSR (Server Side Rendering), however there need not be a server, and it doesn't need to be generated every request. The content on this website is entirely static, and therefore I decided to remove JS entirely. This means this website generates just html/css (and some images) when built, and does not have the React runtime even though the source code itself is written with react.

## Note on Vite

I bootstrapped this website with vite. [Vite](https://vitejs.dev/) is pretty cool. It has less dependencies than create-react-app, and the configuration is a lot more transparent (ie: no need to 'eject' from create-react-app).

It has really good sensible defaults so I didn't need to configure anything other than some package.json scripts that I used for SSR.
