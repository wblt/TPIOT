define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/groupdetail/index',
                    add_url: 'user/groupdetail/add',
                    edit_url: 'user/groupdetail/edit',
                    del_url: 'user/groupdetail/del',
                    multi_url: 'user/groupdetail/multi',
                    table: 'group_user',
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
                        {field: 'uid', title: __('Uid')},
                        {field: 'user_name', title: __('User_name')},
                        {field: 'group_id', title: __('Group_id')},
                        {field: 'posts', title: __('Posts')},
                        {field: 'replies', title: __('Replies')},
                        {field: 'jointime', title: __('Jointime')},
                        {field: 'isjoin', title: __('Isjoin')},
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