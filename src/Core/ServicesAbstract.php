<?php

namespace PublishPressFuture\Core;

abstract class ServicesAbstract
{
    const PLUGIN_FACADE = 'plugin.facade';

    const PLUGIN_VERSION = 'plugin.version';

    const PLUGIN_SLUG = 'plugin.slug';

    const DEFAULT_DATA = 'default.data';

    const DEFAULT_DATE_FORMAT = 'default.date.format';

    const DEFAULT_TIME_FORMAT = 'default.time.format';

    const DEFAULT_FOOTER_CONTENT = 'default.footer.content';

    const DEFAULT_FOOTER_STYLE = 'default.footer.style';

    const DEFAULT_FOOTER_DISPLAY = 'default.footer.display';

    const DEFAULT_EMAIL_NOTIFICATION = 'default.email.notification';

    const DEFAULT_EMAIL_NOTIFICATION_ADMINS = 'default.email.notification.admins';

    const DEFAULT_DEBUG = 'default.debug';

    const DEFAULT_EXPIRATION_DATE = 'default.expiration.date';

    const BASE_PATH = 'base.path';

    const BASE_URL = 'base.url';

    const HOOKS_FACADE = 'wp.hooks.facade';

    const MODULES_LIST = 'modules.list';

    const MODULE_INSTANCE_PROTECTION = 'module.InstanceProtection';

    const MODULE_EXPIRATION = 'module.Expiration';

    const MODULES_MANAGER = 'modules.manager';

    const LEGACY_PLUGIN = 'legacy.plugin';

    const LEGACY_PATH = 'legacy.path';

    const PATHS = 'paths';

    const LOGGER = 'logger';

    const MODULE_DEBUG = 'module.Debug';

    const DATABASE_FACADE = 'wp.database.facade';

    const SITE_FACADE = 'wp.site.facade';

    const OPTIONS_FACADE = 'wp.options.facade';

    const CRON_FACADE = 'wp.cron.facade';

    const SCHEDULER_FACADE = 'scheduler.facade';

    const ERROR_FACADE = 'wp.error.facade';

    const MODULE_SETTINGS = 'module.Settings';

    const SETTINGS_FACADE = 'settings.facade';

    const DATETIME_FACADE = 'wp.datetime.facade';

    const DATETIME_HELPER = 'datetime.helper';
}
