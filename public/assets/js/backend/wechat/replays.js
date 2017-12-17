define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'wechat/replays/index',
                    add_url: 'wechat/replays/add',
                    edit_url: 'wechat/replays/edit',
                    del_url: 'wechat/replays/del',
                    multi_url: 'wechat/replays/multi',
                    table: 'wx_replays',
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
                        {field: 'keyword', title: __('Keyword')},
                        {field: 'content_text', title: __('Content_text')},
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        {field: 'sort', title: __('Sort')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'm', title: __('M')},
                        {field: 'a', title: __('A')},
                        {field: 'c', title: __('C')},
                        {field: 'type', title: __('Type')},
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