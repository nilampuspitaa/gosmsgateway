<?php
if (isset($_GET['page'])) {
  $page = $_GET['page'];

  if ($page == 'home')                                      { include "pages/home.php"; }
  if ($page == 'setting')                                   { include "pages/setting.php"; }
} else {
  include "pages/home.php";
}
?>