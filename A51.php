<?php
require __DIR__.'/vendor/autoload.php';
use QL\QueryList;


class YandexScrape {
    public $url;

    public function fetch($url){
        $ql = QueryList::get($url);
        return $ql;
    }

    public function parse($html){
        $data = $html->find('div cia-vs ul>li')->texts();
        echo ($data->all());
    }
}

$obj = new YandexScrape();
$html = $obj->fetch('https://market.yandex.ru/product--smartfon-samsung-galaxy-a51-64gb/650874000');
$data = $obj->parse($html);
echo ($data);
