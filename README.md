 npm install
 npx tsc --noEmitOnError false
 node build/server.js
Создание тура
POST /tours
Тело: http://localhost:4000/
{
    "title": "Тур по Минску",
    "slug": "minsk-tour",
    "description": "Экскурсия по Минску",
    "isActive": true
  }
2. Расписание для тура
POST /schedules
Тело:
  {
    "tourId": "<id_тура>",
    "isActive": true,
    "startDate": "2024-06-01",
    "endDate": "2024-06-10"
  }
   Цена для расписания
POST /prices
Тело:
{
    "scheduleId": "<id_расписания>",
    "priceValue": 100,
    "priceCurrency": "BYN"
  }

  GET /tours/<id_тура>/schedules — вернуть все расписания этого тура.
GET /schedules/<id_расписания>/prices — вернуть все цены этого расписания.