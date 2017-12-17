define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'groups/index',
                    add_url: 'groups/add',
                    edit_url: 'groups/edit',
                    del_url: 'groups/del',
                    multi_url: 'groups/multi',
                    table: 'groups',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'group_id',
                sortName: 'group_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'group_id', title: __('Group_id')},
                        {field: 'group_name', title: __('Group_name')},
                        {field: 'desc', title: __('Desc')},
                        {field: 'group_icon', title: __('Group_icon'), formatter: Table.api.formatter.icon},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'create_id', title: __('Create_id')},
                        {field: 'hits', title: __('Hits')},
                        {field: 'numbers', title: __('Numbers')},
                        {field: 'threads', title: __('Threads')},
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