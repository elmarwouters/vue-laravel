let mix = require("laravel-mix");

mix.options({
    terser: {
        terserOptions: {
            warnings: true
        }
    }
})

mix
  .js(
    [
        "resources/assets/js/app.js"
    ],
    "public/js"
  )
  .setPublicPath("public/js").vue();
