<?php

include('simple_html_dom.php');
$html = file_get_html('https://www.geeksforgeeks.org/difference-array-range-update-query-o1/');
$myJSON='[';

foreach($html->find('p') as $e) {
    $content= $e->innertext;




$api_key = 'AIzaSyAxAi-hpFLRfDoYtsOIopoGkTuaX_9AXI0';
$source="en";
$target="hi";
 
$url = 'https://www.googleapis.com/language/translate/v2?key=' . $api_key . '&q=' . rawurlencode($content);
$url .= '&target='.$target;
$url .= '&source='.$source;
 
$response = file_get_contents($url);
$obj =json_decode($response,true); //true converts stdClass to associative array.
if($obj != null)
{
    if(isset($obj['error']))
    {
        echo "Error is : ".$obj['error']['message'];
    }
    else
    {
        $myOBJ->p= $obj['data']['translations'][0]['translatedText'];
        $myJSON=$myJSON. json_encode($myOBJ).',';
    }
}
else
    echo "UNKNOW ERROR";

}
$myJSON=$myJSON.']';
echo json_encode($myJSON,true);
?>
