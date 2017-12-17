define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'users/index',
                    add_url: 'users/add',
                    edit_url: 'users/edit',
                    del_url: 'users/del',
                    multi_url: 'users/multi',
                    table: 'users',
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
                        {field: 'id', title: __('编号')},
                        {field: 'user_name', title: __('用户名')},
                        {field: 'create_at', title: __('注册时间')},
                        {field: 'coin', title: __('金币')},
                        {field: 'creidt', title: __('积分')},
                        {field: 'userfrom', title: __('用户来源')},
                        {field: 'face_url', title: __('头像')},
                        {field: 'last_time', title: __('最后登录时间')},
                        {field: 'last_ip', title: __('最后登录ip')},
                        {field: 'type', title: __('用户类型')},
                        {field: 'levels', title: __('等级')},
                        {field: 'status', title: __('状态'), formatter: Table.api.formatter.status},
                        {field: 'regformstatus', title: __('注册状态'), formatter: Table.api.formatter.status},
                        {field: 'noticeset', title: __('提醒状态')},
                        {field: 'nickname', title: __('昵称')},
                        {field: 'device_id', title: __('设备编号')},
                        {field: 'open_id', title: __('OpenId')},
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