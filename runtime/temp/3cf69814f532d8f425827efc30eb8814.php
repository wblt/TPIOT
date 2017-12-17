<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:63:"/home/www/TPIOT/public/../application/admin/view/users/add.html";i:1513430231;s:68:"/home/www/TPIOT/public/../application/admin/view/layout/default.html";i:1513425984;s:65:"/home/www/TPIOT/public/../application/admin/view/common/meta.html";i:1513425984;s:67:"/home/www/TPIOT/public/../application/admin/view/common/script.html";i:1513425984;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<link rel="shortcut icon" href="__CDN__/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="__CDN__/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="__CDN__/assets/js/html5shiv.js"></script>
  <script src="__CDN__/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <form id="add-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label for="c-user_name" class="control-label col-xs-12 col-sm-2"><?php echo __('User_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-user_name" class="form-control" name="row[user_name]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-user_pwd" class="control-label col-xs-12 col-sm-2"><?php echo __('User_pwd'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-user_pwd" class="form-control" name="row[user_pwd]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-salt" class="control-label col-xs-12 col-sm-2"><?php echo __('Salt'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-salt" class="form-control" name="row[salt]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-create_at" class="control-label col-xs-12 col-sm-2"><?php echo __('Create_at'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-create_at" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[create_at]" type="text" value="<?php echo date('Y-m-d H:i:s'); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-update_at" class="control-label col-xs-12 col-sm-2"><?php echo __('Update_at'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-update_at" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[update_at]" type="text" value="<?php echo date('Y-m-d H:i:s'); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-coin" class="control-label col-xs-12 col-sm-2"><?php echo __('Coin'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-coin" class="form-control" name="row[coin]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-creidt" class="control-label col-xs-12 col-sm-2"><?php echo __('Creidt'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-creidt" class="form-control" name="row[creidt]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-userfrom" class="control-label col-xs-12 col-sm-2"><?php echo __('Userfrom'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-userfrom" class="form-control" name="row[userfrom]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-face_url" class="control-label col-xs-12 col-sm-2"><?php echo __('Face_url'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-face_url" class="form-control" name="row[face_url]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-last_time" class="control-label col-xs-12 col-sm-2"><?php echo __('Last_time'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-last_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[last_time]" type="text" value="<?php echo date('Y-m-d H:i:s'); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-last_ip" class="control-label col-xs-12 col-sm-2"><?php echo __('Last_ip'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-last_ip" class="form-control" name="row[last_ip]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-qq" class="control-label col-xs-12 col-sm-2"><?php echo __('Qq'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-qq" class="form-control" name="row[qq]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-weixin" class="control-label col-xs-12 col-sm-2"><?php echo __('Weixin'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-weixin" class="form-control" name="row[weixin]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-sex" class="control-label col-xs-12 col-sm-2"><?php echo __('Sex'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-sex" class="form-control" name="row[sex]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-type" class="control-label col-xs-12 col-sm-2"><?php echo __('Type'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-type" class="form-control" name="row[type]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-levels" class="control-label col-xs-12 col-sm-2"><?php echo __('Levels'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-levels" class="form-control" name="row[levels]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-status" class="control-label col-xs-12 col-sm-2"><?php echo __('Status'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-status" class="form-control" name="row[status]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-regformstatus" class="control-label col-xs-12 col-sm-2"><?php echo __('Regformstatus'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-regformstatus" class="form-control" name="row[regformstatus]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-noticeset" class="control-label col-xs-12 col-sm-2"><?php echo __('Noticeset'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-noticeset" class="form-control" name="row[noticeset]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-nickname" class="control-label col-xs-12 col-sm-2"><?php echo __('Nickname'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-nickname" class="form-control" name="row[nickname]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-province" class="control-label col-xs-12 col-sm-2"><?php echo __('Province'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-province" class="form-control" name="row[province]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-city" class="control-label col-xs-12 col-sm-2"><?php echo __('City'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class='control-relative'><input id="c-city" class="form-control" data-toggle="city-picker" name="row[city]" type="text"></div>
        </div>
    </div>
    <div class="form-group">
        <label for="c-area" class="control-label col-xs-12 col-sm-2"><?php echo __('Area'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-area" class="form-control" name="row[area]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-ordertotal" class="control-label col-xs-12 col-sm-2"><?php echo __('Ordertotal'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-ordertotal" class="form-control" name="row[ordertotal]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-comefrom" class="control-label col-xs-12 col-sm-2"><?php echo __('Comefrom'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-comefrom" class="form-control" name="row[comefrom]" type="text">
        </div>
    </div>
    <div class="form-group">
        <label for="c-mobileverify" class="control-label col-xs-12 col-sm-2"><?php echo __('Mobileverify'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-mobileverify" class="form-control" name="row[mobileverify]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label for="c-mobileuser" class="control-label col-xs-12 col-sm-2"><?php echo __('Mobileuser'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-mobileuser" class="form-control" name="row[mobileuser]" type="number">
        </div>
    </div>
    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="__CDN__/assets/js/require.js" data-main="__CDN__/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo $site['version']; ?>"></script>
    </body>
</html>