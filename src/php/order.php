<?php
$to = "kupi@eco-linoleum.ru";
$name = $_POST['name'];
$telephone = $_POST["telephone"];
$email = $_POST["email"];
$room = $_POST["room"];
$color = $_POST["color"];
$city = $_POST["city"];
$message = '
<html>
<body>
<center>	
<table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
 <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Заявка</b></td></tr>
 <tr>
  <td><b>Имя</b></td>
  <td>'.$name.'</td>
 </tr>
 <tr>
  <td><b>Номер телефона</b></td>
  <td>'.$telephone.'</a></td>
 </tr>
 <tr>
  <td><b>Email</b></td>
  <td>'.$email.'</td>
 </tr>
 <tr>
  <td><b>Площадь помещения</b></td>
  <td>'.$room.'</td>
 </tr>
 <tr>
  <td><b>Желательный цвет</b></td>
  <td>'.$color.'</td>
 </tr>
 <tr>
  <td><b>Город</b></td>
  <td>'.$city.'</td>
 </tr>
</table>
</center>	
</body>
</html>'; 
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$result = mail($to, $subject, $message, $headers);
?>