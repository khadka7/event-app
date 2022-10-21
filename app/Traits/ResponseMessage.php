<?php

namespace App\Traits;

trait ResponseMessage
{
    public function successResponse($message = 'Success', $data = [], $code = 200)
    {
        return response([
            'success' => true,
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    public function failedResponse($message = 'Failed To fetch data', $code = 400)
    {
        return response([
            'success' => false,
            'code' => $code,
            'message' => $message,
        ], $code);
    }

}
