'use strict';
import OptionTemplate from 'OptionTemplate';

export default class ItemView extends Mn.ItemView {

    constructor(args) {
        super($.extend({
            template: OptionTemplate,
        }, args));
    }

    onShow() {
        // フレームワークが出力する不要なラッパータグを削除
        this.setElement(this.$el.children().unwrap());
    }
}