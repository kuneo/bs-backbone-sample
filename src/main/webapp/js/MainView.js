'use strict';

export default class MainView extends Mn.ItemView {

    constructor(args) {
        super($.extend({
            template: '#main',
            model: new Bn.Model()
        }, args));

        this.events = {
            'click #init-btn': 'doInit',
            'click #add-btn': 'doAdd',
            'click #check-btn': 'doCheck'
        };
        this.delegateEvents();
        
        this.ui = {
            select: '#select'
        };

        this.bindings = 　 {
            '#select': {
                observe: 'ids'
            },
            '#text': 'text'
        };
    }

    onAttach() {
        this.stickit();
    }

    doAdd() {
        this.ui.select.append('<option  data-stickit-bind-val="4">aaa</option>');
        $('.selectpicker').selectpicker('refresh');
    }

    doInit() {
        this.ui.select.empty();
        this.ui.select.append('<option  data-stickit-bind-val="1">aaa</option>');
        this.ui.select.append('<option  data-stickit-bind-val="2">bbb</option>');
        this.ui.select.append('<option  data-stickit-bind-val="3">ccc</option>');
        $('.selectpicker').selectpicker('refresh');
    }

    doCheck() {
        console.log(this.model.toJSON());
    }
}