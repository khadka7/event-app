<?php


namespace App\Repositories;


use App\Interfaces\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{

    /**
     * @var Model
     */
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    protected function getQueries($filters = [])
    {
        $query = $this->model::query();
        $this->filterContent($query, $filters);
        return $query;
    }

    protected function filterContent($data, $filters = [])
    {
        return;
    }

    public function get_all($filters = [])
    {
        return $this->getQueries($filters)->get();
    }


    public function get_one($id)
    {
        return $this->model::find($id);
    }

    public function paginated_list($limit, $filters = [])
    {
        return $this->getQueries($filters)
            ->orderBy('id', 'DESC')
            ->paginate($limit)
            ->appends($filters);
    }


    public function create($data)
    {
        return $this->model::create($data);
    }

    public function update($data, $id)
    {
        /**
         * @var $model Model
         */
        $model = $this->get_one($id);
        if ($model) {
            $model->update($data);
            return $model;
        } else {
            return false;
        }
    }

    public function delete($id)
    {
        /**
         * @var $model Model
         */
        $model = $this->get_one($id);
        if ($model) {
            $model->delete();
            return true;
        } else {
            return false;
        }
    }

    public function get_by_field($key, $value)
    {
        return $this->model::query()->where($key, '=', $value)->first();
    }

    public function count()
    {
        return $this->model::query()->count();
    }

    public function count_where($key, $value)
    {
        return $this->model::query()
            ->where($key, '=', $value)
            ->count();
    }
}
