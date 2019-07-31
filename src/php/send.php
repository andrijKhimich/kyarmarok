<?php error_reporting(0);
$mail = "pirogok1988@gmail.com";
if($_POST['hidden'] == 'subscribe'){
  $message = "
  <table width=640 cellpadding=0 cellspacing=0 border=0>
    <tr><td>
      <h2>Підписка на новини</h2><hr>
      <p><strong>Ім'я:</strong> ".$_POST['name']."</p>
      <p><strong>Телефон:</strong> ".$_POST['phone']."</p>
      <p><strong>Повідомлення:</strong> ".$_POST['text']."</p>
      <hr>
    </td></tr>
  </table>";
  $subject="Підписка з сайту...";
}
mail($mail, $subject, $message, "Content-type: text/html; charset=utf-8 \r\n");