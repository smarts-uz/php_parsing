<?php

require __DIR__ . '/vendor/autoload.php';

use QL\QueryList;

function getAllChars($file_path){
    $html = file_get_contents($file_path);
    $ql = QueryList::html($html);
    $elements = $ql->find('div._1uLae')->texts();
    echo ("<h1>Tavsif</h1>");
    foreach($elements as $element){
        echo($element);
        echo('<br>');
    }
    echo ("<h1>Xususiyatlari</h1>");


    $divisions = $ql->find('div.la3zd')->htmls();
    $characteristics = [];
    foreach($divisions as $division){
        $data = [];
        $htl = QueryList::html($division);
        $title = $htl->find('h2._1yUJ7')->text();  //success
        $keys = $htl->find('dl.sZB0N div._2TxqA span')->texts();
        $values = $htl->find('dd')->texts();
        $ready_keys = [];
        $ready_values = [];
        // removing empty element
        foreach ($keys as $key){
            if($key === ""){
                continue;
            }else{
                array_push($ready_keys, $key);
            }
        }
        // removing empty element
        foreach ($values as $value){
            if($value === ""){
                continue;
            }else{
                array_push($ready_values, $value);
            }
        }
        $data['title'] = $title;
        $data['pairs'] = [];
        for($i=0; $i<count($ready_values); $i++){
            $pair = [];
            $pair['key'] = $ready_keys[$i];
            $pair['value'] = $ready_values[$i];
            array_push($data['pairs'], $pair);
        }
        array_push($characteristics, $data);
    }
    foreach ($characteristics as $char){
        print_r($char);
        echo ("<br>");
        echo ("<br>");
    }
}

