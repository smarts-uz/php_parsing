<?php
require __DIR__.'/vendor/autoload.php';
use QL\QueryList;

$html = file_get_contents('https::books.toscrape.com.html');
$ql = QueryList::html($html);
$titles = $ql->find('h3')->texts();
print_r($titles);