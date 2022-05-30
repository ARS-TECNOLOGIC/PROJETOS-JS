<?php
$agendado = ['10:00'=>'Anselmo','10:30'=>'Carlos', '11:00'=>'Anselmo','11:30'=>'Carlos', '12:00'=>'Anselmo','12:30'=>'Carlos'];    
  
$time = new DateTime();
$time->setTime(8,0,0,0);

foreach($agendado as $linha => $valor){
        $time2 =$time->format('H:i');
        $time->modify('+30 minutes');
        echo $time2."<br>";  
    
}

?>