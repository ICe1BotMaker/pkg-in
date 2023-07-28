# pkg-in

### Examples

```js
import pkg_in from 'pkg-in';

((async () => {
    const pkg = new pkg_in();
    await pkg.set();

    await pkg.install.react();
    await pkg.uninstall.react();
})());
```