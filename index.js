import { exec } from 'child_process';

export default class pkg_in {
    constructor() {
        this.packages = [];

        this.install = {};
        this.uninstall = {};
    }

    async set() {
        await fetch(`https://raw.githubusercontent.com/nice-registry/all-the-package-names/master/names.json`)
        .then(data => data.json())
        .then(data => this.packages = data);

        this.packages.forEach((package_name, package_idx) => {
            this.install[package_name] = () => {
                exec(`npm install ${package_name}`, { cwd: `./` }, (error, stdout, stderr) => {
                    console.log(stdout);
                });
            };

            this.uninstall[package_name] = () => {
                exec(`npm uninstall ${package_name}`, { cwd: `./` }, (error, stdout, stderr) => {
                    console.log(stdout);
                });
            };
        });
    }
}