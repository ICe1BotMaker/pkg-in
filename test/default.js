import pkg_in from '../index.js';

((async () => {
    const pkg = new pkg_in();
    await pkg.set();

    await pkg.install.react();
    await pkg.uninstall.react();
})());