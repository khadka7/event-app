<?php


namespace App\Interfaces;


interface BaseRepositoryInterface
{
    public function get_all($filters = []);

    public function get_one($id);

    public function get_by_field($key, $value);

    public function paginated_list($limit, $filters);

    public function create($data);

    public function update($data, $id);

    public function delete($id);

    public function count();

    public function count_where($key,$value);

}
