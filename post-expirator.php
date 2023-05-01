<?php
/**
 * Plugin Name: PublishPress Future
 * Plugin URI: http://wordpress.org/extend/plugins/post-expirator/
 * Description: Allows you to add an expiration date (minute) to posts which you can configure to either delete the post, change it to a draft, or update the post categories at expiration time.
 * Author: PublishPress
 * Version: 3.0.0-beta.6
 * Author URI: http://publishpress.com
 * Text Domain: post-expirator
 * Domain Path: /languages
 */

use PublishPress\Future\Core\Autoloader;
use PublishPress\Future\Core\DI\Container;
use PublishPress\Future\Core\DI\ServicesAbstract;

defined('ABSPATH') or die('Direct access not allowed.');

if (! defined('PUBLISHPRESS_FUTURE_LOADED')) {
    try {
        define('PUBLISHPRESS_FUTURE_LOADED', true);

        if (! defined('PUBLISHPRESS_FUTURE_VERSION')) {
            define('PUBLISHPRESS_FUTURE_VERSION', '3.0.0-beta.6');
        }

        // If the PHP version is not compatible, terminate the plugin execution.
        if (! include_once __DIR__ . '/src/check-php-version.php') {
            return;
        }

        $vendorAutoloadPath = __DIR__ . '/vendor/autoload.php';
        if (is_readable($vendorAutoloadPath)) {
            require_once $vendorAutoloadPath;
        }

        // These libraries loads on plugins_loaded hook with priority 1 or lower, so this require can't be done inside a hook.
        require_once PUBLISHPRESS_VENDOR_PATH . '/woocommerce/action-scheduler/action-scheduler.php';
        require_once PUBLISHPRESS_VENDOR_PATH . '/publishpress/psr-container/lib/include.php';
        require_once PUBLISHPRESS_VENDOR_PATH . '/publishpress/pimple-pimple/lib/include.php';

        // Priority should be higher than 1 so it is loaded after ActionScheduler is loaded (which loads on 1).
        add_action('plugins_loaded', function () {
            require_once __DIR__ . '/src/Core/Autoloader.php';
            Autoloader::register();

            $pluginFile = __FILE__;

            $services = require __DIR__ . '/services.php';
            $container = new Container($services);

            require_once __DIR__ . '/legacy/defines.php';
            require_once __DIR__ . '/legacy/deprecated.php';
            require_once __DIR__ . '/legacy/functions.php';
            require_once __DIR__ . '/legacy/autoload.php';

            $container->get(ServicesAbstract::PLUGIN)->initialize();
        }, 2, 0);

    } catch (Exception $e) {
        $trace = $e->getTrace();

        $traceText = '';

        foreach ($trace as $item) {
            $traceText .= $item['file'] . ':' . $item['line'] . ' ' . $item['function'] . '(), ';
        }

        $message = sprintf(
            "PUBLISHPRESS FUTURE Exception: %s: %s. Backtrace: %s",
            get_class($e),
            $e->getMessage(),
            $traceText
        );

        // Make the log message binary safe removing any non-printable chars.
        $message = addcslashes($message, "\000..\037\177..\377\\");

        // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
        error_log($message);
    }
}
