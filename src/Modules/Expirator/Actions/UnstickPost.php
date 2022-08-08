<?php

namespace PublishPressFuture\Modules\Expirator\Actions;

use PublishPressFuture\Modules\Expirator\Interfaces\ExpirableActionInterface;

use function ray;

class UnstickPost implements ExpirableActionInterface
{
    /**
     * @var int
     */
    private $postId;

    /**
     * @param int $postId
     */
    public function __construct($postId)
    {
        $this->postId = $postId;
    }

    public function execute()
    {
        ray(__METHOD__);
    }
}