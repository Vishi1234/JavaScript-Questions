<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .row {
            display: flex;
        }
        .col {
            height: 80px;
            width: 80px;
            display: flex;
            border: 2px solid black ;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="grid">
            <div class = "row">
                <div onclick="handleBox(this)" id ="0" class="col"></div>
                <div onclick="handleBox(this)" id ="1" class="col"></div>
                <div onclick="handleBox(this)" id ="2" class="col"></div>
            </div>
            <div class="row">
                <div onclick="handleBox(this)" id ="3" class="col"></div>
                <div onclick="handleBox(this)" id ="4" class="col"></div>
                <div onclick="handleBox(this)" id="5"  class="col"></div>
            </div>
            <div class ="row">
                <div onclick="handleBox(this)" id="6" class="col"></div>
                <div onclick="handleBox(this)" id="7" class="col"></div>
                <div onclick="handleBox(this)" id="8" class="col"></div>
            </div>
        </div>
    </div>
    <script src ="script.js"></script>
</body>
</html>
