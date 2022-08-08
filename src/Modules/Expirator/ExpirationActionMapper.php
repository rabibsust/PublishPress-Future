<?php

namespace PublishPressFuture\Modules\Expirator;

use PublishPressFuture\Modules\Expirator\Exceptions\UndefinedActionException;
use PublishPressFuture\Modules\Expirator\Interfaces\ActionMapperInterface;
use PublishPressFuture\Modules\Expirator\Actions\DeletePost;
use PublishPressFuture\Modules\Expirator\Actions\PostCategoryAdd;
use PublishPressFuture\Modules\Expirator\Actions\PostCategoryRemove;
use PublishPressFuture\Modules\Expirator\Actions\PostCategorySet;
use PublishPressFuture\Modules\Expirator\Actions\PostStatusToDraft;
use PublishPressFuture\Modules\Expirator\Actions\PostStatusToPrivate;
use PublishPressFuture\Modules\Expirator\Actions\PostStatusToTrash;
use PublishPressFuture\Modules\Expirator\Actions\StickPost;
use PublishPressFuture\Modules\Expirator\Actions\UnstickPost;

class ExpirationActionMapper implements ActionMapperInterface
{
    /**
     * @param array
     */
    private $actionClassesMap;

    public function __construct()
    {
        $this->actionClassesMap = [
            ActionsAbstract::POST_STATUS_TO_DRAFT => PostStatusToDraft::class,
            ActionsAbstract::POST_STATUS_TO_PRIVATE => PostStatusToPrivate::class,
            ActionsAbstract::POST_STATUS_TO_TRASH => PostStatusToTrash::class,
            ActionsAbstract::DELETE_POST => DeletePost::class,
            ActionsAbstract::STICK_POST => StickPost::class,
            ActionsAbstract::UNSTICK_POST => UnstickPost::class,
            ActionsAbstract::POST_CATEGORY_SET => PostCategorySet::class,
            ActionsAbstract::POST_CATEGORY_ADD => PostCategoryAdd::class,
            ActionsAbstract::POST_CATEGORY_REMOVE => PostCategoryRemove::class,
        ];
    }

    /**
     * @param string $actionName
     *
     * @return string
     *
     * @throws UndefinedActionException
     */
    public function map($actionName)
    {
        if (! isset($this->actionClassesMap[$actionName])) {
            throw new UndefinedActionException();
        }

        return $this->actionClassesMap[$actionName];
    }
}