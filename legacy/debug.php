<?php

use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use PublishPressFuture\Core\DI\Container;
use PublishPressFuture\Core\DI\ContainerNotInitializedException;
use PublishPressFuture\Modules\Debug\DebugInterface;
use PublishPressFuture\Modules\Debug\ServiceProvider;

/**
 * The class that adds debug entries to the database.
 *
 * @deprecated 2.8.0
 */
class PostExpiratorDebug
{
    /**
     * @var DebugInterface
     */
    private $debug;

    /**
     * @var string
     * @deprecated 2.8.0
     */
    private $debug_table;

    /**
     * Constructor.
     * @throws ContainerNotInitializedException
     * @throws NotFoundExceptionInterface
     * @throws ContainerExceptionInterface
     */
    public function __construct()
    {
        $this->debug = Container::getInstance()->get(ServiceProvider::SERVICE_DEBUG);
    }

    /**
     * Drop Database Table.
     */
    public function removeDBTable()
    {
        $this->debug->dropDatabaseTable();
    }

    /**
     * Insert into Database Table.
     */
    public function save($data)
    {
        $this->debug->log($data['message']);
    }

    /**
     * Get the HTML of the table's data.
     */
    public function getTable()
    {
        return $this->debug->fetchAll();
    }

    /**
     * Truncate Database Table.
     */
    public function purge()
    {
        $this->debug->deleteLogs();
    }
}
