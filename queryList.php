<?php

require __DIR__.'/vendor/autoload.php';
use QL\QueryList;
define("URL", "https://quotes.toscrape.com/");

$ql = QueryList::get(constant("URL"));
$rules = [
    'authors'=>['.author', 'text'],
    'quotes'=>['.text', 'text']
];
$data = $ql->rules($rules)->query()->getData();
echo ($data->all());
?>