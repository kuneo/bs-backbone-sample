'use strict';
import MainView from 'MainView';

export default class Layout extends Mn.LayoutView {

    constructor(args) {
        super($.extend({
            template: '#content',
            regions: {
                mainView: '#main'
            }
        }, args));
        this.childEvents = {
            'collectionView:doAdd': 'callAdd',
            'collectionView:doCheck': 'callCheck',
            'collectionView:doInit': 'callInit'
        };
    }

    onShow() {
        this.mainView.show(new MainView());
    }
    
    callAdd() {
        this.collectionView.currentView.doAdd();
    }
    
    callInit() {
        this.collectionView.currentView.doInit();
    }
    
    callCheck() {
        this.collectionView.currentView.doCheck();
    }
}