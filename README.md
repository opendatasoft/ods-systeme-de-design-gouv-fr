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

Get this already generated file [ods-dsfr.min.css](export/ods-dsfr.min.css)

Copy the raw content and paste it into your domain theme stylesheet.

Save, make live.
