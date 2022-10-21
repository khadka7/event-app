<?php

namespace App\Providers;

use App\Interfaces\BaseRepositoryInterface;
use App\Repositories\BaseRepository;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Category\CategoryRepositoryInterface;
use App\Repositories\Issue\IssueCommentRepository;
use App\Repositories\Issue\IssueCommentRepositoryInterface;
use App\Repositories\Issue\IssueRepository;
use App\Repositories\Issue\IssueRepositoryInterface;
use App\Repositories\Priority\PriorityRepository;
use App\Repositories\Priority\PriorityRepositoryInterface;
use App\Repositories\Submitter\SubmitterRepository;
use App\Repositories\Submitter\SubmitterRepositoryInterface;
use App\Repositories\SupportTeam\SupportTeamRepository;
use App\Repositories\SupportTeam\SupportTeamRepositoryInterface;
use App\Repositories\SystemCategory\SystemCategoryRepository;
use App\Repositories\SystemCategory\SystemCategoryRepositoryInterface;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BaseRepositoryInterface::class,BaseRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
