define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/userrank/index',
                    add_url: 'user/userrank/add',
                    edit_url: 'user/userrank/edit',
                    del_url: 'user/userrank/del',
                    multi_url: 'user/userrank/multi',
                    table: 'user_rank',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'rank_id',
                sortName: 'rank_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'rank_id', title: __('等级编号')},
                        {field: 'rank_name', title: __('登录名称')},
                        {field: 'status', title: __('等级状态'), formatter: Table.api.formatter.status},
                        {field: 'icon', title: __('图片'), formatter: Table.api.formatter.icon},
                        {field: 'start_score', title: __('开始区间')},
                        {field: 'end_scroe', title: __('结束区间内')},
                        {field: 'create_time', title: __('创建时间')},
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