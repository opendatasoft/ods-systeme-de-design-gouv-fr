## ODS-DSFR

This kit helps ODS CSMs and Labs team to generate a ready to use CSS to integrate [French Gov design system](https://www.systeme-de-design.gouv.fr/).

It includes the design system, then, fix conflict with ODS environment.

It generates in `/export` folder the CSS file `main.css` (for testing/debugging etc...) and the minified version `ods-dsfr.min.css` ready to copy paste into your domain.


### Get NPM dependencies

```
npm install
```

### Generate ods-dsfr patched css file

While you have node / npm / postcss-cli installed globally, simply run :
 
```
npm run build
```


### Get dsfr into your domain

Get this already generated file [ods-dsfr.min.css](export/ods-dsfr.min.css).

Copy the raw content and paste it into your domain theme stylesheet.

Save, make live.


## Add icons to your domain

Get the icons you want to use from `/assets/theme_image/` and copy/paste theme in the Ressources in your domain


### How to add new style for a new component

Find the name of the component in `node_modules/@gouvfr/dsfr/src/component`.

Add the `@import` link to the component in the `main.scss` file.

Example: `@import "../node_modules/@gouvfr/dsfr/src/component/summary/main"` will add the style for the component summary.

Then re-run 

````
npm run build
````

Do a find a replace again to replace images' paths.

And copy/paste again the content of the generated file [ods-dsfr.min.css](export/ods-dsfr.min.css) into your domain theme stylehseet.


### Use the header and footer

Simply copy/paste the code from `header.html` and `footer.html` and paste it into your domain theme stylesheet.

Save, make live.
