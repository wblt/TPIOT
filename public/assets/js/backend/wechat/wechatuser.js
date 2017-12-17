define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'wechat/wechatuser/index',
                    add_url: 'wechat/wechatuser/add',
                    edit_url: 'wechat/wechatuser/edit',
                    del_url: 'wechat/wechatuser/del',
                    multi_url: 'wechat/wechatuser/multi',
                    table: 'wx_user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'userid', title: __('Userid')},
                        {field: 'openid', title: __('Openid')},
                        {field: 'nickname', title: __('Nickname')},
                        {field: 'city', title: __('City')},
                        {field: 'province', title: __('Province')},
                        {field: 'country', title: __('Country')},
                        {field: 'face_url', title: __('Face_url'), formatter: Table.api.formatter.url},
                        {field: 'subscribe_time', title: __('Subscribe_time')},
                        {field: 'is_subscribe', title: __('Is_subscribe')},
                        {field: 'sex', title: __('Sex')},
                        {field: 'language', title: __('Language')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});