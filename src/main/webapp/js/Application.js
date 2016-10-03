'use strict';
import 'bootstrap';
import 'bootstrap-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'backbone.stickit';

import Layout from 'Layout';

export default class Application extends Mn.Application {

    constructor(args) {
        super($.extend({}, args));
        this.addRegions({
            content: '#content'
        });
        this.on('before:start', function () {
            this.content.show(new Layout());
        });
    }
}

window.bs = new Application();
window.bs.start();