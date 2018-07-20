<?php

function getPage()
{
    return isset($_GET['page']) && $_GET['page'] != '' ? $_GET['page'] : 'accueil';
}

function getSubPage()
{
    return isset($_GET['subPage']) && $_GET['subPage'] != '' ? $_GET['subPage'] : null;
}

function isLogged()
{
    if (isset($_SESSION['logged']) && $_SESSION['logged']) {
        return 1;
    } else {
        return 0;
    }
}

function c($obj, $data)
{
    foreach ($data as $field => $value) {
        // echo $field." = ".$value;
        if (method_exists($obj, $field)) {
            $obj->$field($value);
        }
    }
}

function warp($balise, $attrs)
{
    echo '<' . $balise . ' ' . $attrs . ' >';
}

function endwarp($balise)
{
    echo '</' . $balise . '>';
}

function toJson($obj)
{
    return json_encode($obj->toArray());
}

function replaceSpace($ch)
{
    return str_replace(' ', '_', $ch);
}

function equalOrNullSQL($t)
{
    if (isset($t)) {
        return " = '" . sql_format($t) . "'";
    } else {
        return "is null";
    }
}

function sql_format($t)
{
    return str_replace("'", "''", $t);
}

function array2ul($array)
{
    $out = "<ul>";
    foreach ($array as $key => $elem) {
        if (! is_array($elem)) {
            $out .= "<li><span>$key:[$elem]</span></li>";
        } else
            $out .= "<li><span>$key</span>" . array2ul($elem) . "</li>";
    }
    $out .= "</ul>";
    return $out;
}
?>