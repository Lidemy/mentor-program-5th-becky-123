## 請以自己的話解釋 API 是什麼
API 是 Application Programming Interface 的縮寫，中文是「應用程式介面」。我們先看最後的「介面（Interface）」，它其實就像是一個溝通的橋樑，讓我想起在第一週課程提到的 [CLI 跟 GUI](https://www.notion.so/W1H3-Command-Line-d783f4254c1b4b08920d91150648943d)，他們也都是一種介面，使用者透過這些介面與電腦溝通。
![CLI/GUI](https://i.imgur.com/8w8K3jf.png)
提供這些介面是接收的指令的電腦端不是使用者，不論是 CLI 還是 GUI，可以使用的指令是由電腦接收端決定好的，如果輸入了他不懂的指令他只會回傳找不到這個指令或沒有反應。

對應到 API 這個橋樑，就是用戶端透過 API 去和其他系統的伺服器端溝通，這個 API 也會是由伺服器端提供而不是用戶端，當然伺服器端也可以決定要開放資料的內容及限制。
![API](https://i.imgur.com/MyjIfZO.png)
API 最普遍交換方式是建立在 HTTP Protocol 之上的 HTTP API，也有建立在其他的 Protocol 之上的 API。交換的資料格式較常見的是 JSON、XML，也可以自定義資料交換的格式。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- `201 Created`：新網頁已經建立，僅用來回應 PUT 請求
- `202 Accepted`：Server 已接收請求，但處理需要時間完成，Client 可以斷線不用等待
- `400 Bad Request`：Server 看不懂 Client 的請求，通常是語法錯誤、打錯字等等
- `403 Forbidded`：權限不足因此 Client 的請求被拒絕
- `410 Gone`：該網頁已遷移，但不知道移去哪裡


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
### 使用說明

- Base URL：`https://api.restauranttable.com`

| 說明 | Ｍethod | Path | 參數 | 範例 |
| ------------ | ---  | ---  | ---  | ---  |
| 回傳所有餐廳資料 | GET | /restaurants | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET | /restaurants/{id} | 無 | /restaurants/10 |
| 刪除餐廳 | DELETE | /restaurants/{id} | 無 | 無 |
| 新增餐廳 | POST | /restaurants |name: 餐廳名<br>address: 地址<br>tel: 電話| 無 |
| 更改餐廳資訊 | PATCH | /restaurants/{id} | 要變更資訊的參數 | 無 |

### 回傳所有餐廳資料

- URL：`GET https://api.restauranttable.com/restaurants`
- Response：

    ```
    [
      {
        "id": 1,
        "name": "真劍拉麵",
        "address": "台北市大安區師大路126巷1號",
    		"tel": "02-2345-6789"
      },
       {
        "id": 2,
        "name": "裸湯拉麵",
        "address": "台北市大安區敦化南路一段238巷1號",
    		"tel": "02-8771-4670"
      },
       {
        "id": 3,
        "name": "麺屋 千雲 -Chikumo-",
        "address": "台北市中山區林森北路105-1號",
    		"tel": "02-2523-3198"
      },
       {
        "id": 4,
        "name": "隱家拉麵 赤峰店",
        "address": "台北市大同區南京西路25巷28號",
    		"tel": "02-2559-5970"
      },
       {
        "id": 5,
        "name": "橫濱家系拉麵 特濃屋",
        "address": "台北市中山區中山北路二段77巷22號",
    		"tel": "02-2522-2808"
      }
    ]
    ```

### 回傳單一餐廳資料

- URL：`GET https://api.restauranttable.com/restaurants/2`
- Response：

    ```
      {
        "id": 2,
        "name": "裸湯拉麵",
        "address": "台北市大安區敦化南路一段238巷1號",
    		"tel": "02-8771-4670"
      }
    ```

### 刪除餐廳

- URL：`DELETE https://api.restauranttable.com/restaurants/2`
- Response：No Response

### 新增餐廳

- URL：`POST https://api.restauranttable.com/restaurants`
- Request：

    ```
      {
        "name": "辰拉麵",
        "address": "新北市永和區文化路110號1樓",
    		"tel": "02-2331-5678"
      }
    ```

- Response：

    ```
      {
        "id": 6,
        "name": "辰拉麵",
        "address": "新北市永和區文化路110號1樓",
    		"tel": "02-2331-5678"
      }
    ```

### 更改餐廳資訊

- URL：`PATCH https://api.restauranttable.com/restaurants/2`
- Request：

    ```
      {
        "address": "台北市大安區敦化南路一段238巷100號",
      }
    ```

- Response：

    ```
      {
        "id": 2,
        "name": "裸湯拉麵",
        "address": "台北市大安區敦化南路一段238巷100號",
    		"tel": "02-8771-4670"
      }
    ```
