define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/userdatalog/index',
                    add_url: 'user/userdatalog/add',
                    edit_url: 'user/userdatalog/edit',
                    del_url: 'user/userdatalog/del',
                    multi_url: 'user/userdatalog/multi',
                    table: 'user_data_log',
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
                        {field: 'user_id', title: __('User_id')},
                        {field: 'create_time', title: __('Create_time')},
                        {field: 'type', title: __('Type')},
                        {field: 'value', title: __('Value')},
                        {field: 'opera_type', title: __('Opera_type')},
                        {field: 'after_value', title: __('After_value')},
                        {field: 'deviceid', title: __('Deviceid')},
                        {field: 'openid', title: __('Openid')},
                        {field: 'appid', title: __('Appid')},
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