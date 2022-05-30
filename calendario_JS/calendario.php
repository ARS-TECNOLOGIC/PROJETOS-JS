<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="calendar.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <script src="jquery.js"></script>
    <title>Calendario</title>

</head>

<body>

    <div class="container">
        <div class="calendar">
            <div class="month">
                <i class="fas fa-angle-left prev"></i>
                <div class="date">
                    <h1></h1>
                    <p></p>
                </div>
                <i class="fas fa-angle-right next"></i>
            </div>
            <div class="weekdays">
                <div>Dom </div>
                <div>Seg </div>
                <div>Ter </div>
                <div>Qua </div>
                <div>Qui </div>
                <div>Sex </div>
                <div>Sáb </div>
            </div>
            <div class="days">
            </div>
        </div>
        <div class="agendaDiaria">
            <div class="headerDiaria">Header Diaria</div>
            <div class="horaAhora">
                <!-- Ajax vai preencher as horas -->
            </div>
        </div>
    </div>
</body>
<script src="calendJs.js"></script>
<script type="text/javascript" src="/projetos_js/PROJETOS-JS/calendario_JS/jquery.js"></script>
</html>