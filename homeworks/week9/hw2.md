## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
1、 char：儲存固定長度的字串（包含字母、數字和特殊符號），無論多少字元都是佔用指定的 byte（存在浪費空間的可能），儲存時會截斷尾部空格（varchar 跟 text 不會），最多可達 255 個字串，適合用在身份證號碼、手機號碼等。

2、 varchar：儲存變動長度的字串（包含字母、數字和特殊符號），可以設置最大長度，存幾個字就是需花費 n+1 個 byte，最多可達 65535 個字串（實際為 65532，varchar 會使用 1-3 個字節來儲存長度），適合用在長度可變的屬性。

3、 text：儲存變動長度的大數據，不設置長度， 當不知道屬性的最大長度時適合用 text，最多可達 65535 個字串（可完整使用65535，使用額外空間儲存長度）。

- 按照查詢速度排序： char＞varchar＞text
- 當 varchar 大於一定字數時，會自動轉換為 text，大概規則如下，當長度超過 255 時 varchar 跟 text 本質上沒有太大的區別，故設定時可以考慮是否透過 varchar 來控制字段最大上限。

```php
varchar (255+) 轉成 tinytext
varchar (500+) 轉成 text
varchar (20000+) 轉成 mediumtext
```

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
因為 HTTP 是一個「無狀態協議 Stateless Protocol」，每次從客戶端（Client）對伺服器（Server）發出的 Request 都是獨立的，就算用 IP 位置其實也不能判斷出是同一個人。

![http_stateless](https://i.imgur.com/hpQ0vYI.png)

我們可以透過 Cookie 來記錄 HTTP 的狀態，從 DevTools 可以看到這個網頁的 Cookie 的紀錄（Name、Value、Domain、Path、Expires），Cookie 可以經由 Server 的 Response 的 Header 來設定。

![devtool](https://i.imgur.com/1BWFZco.png)

在 PHP 可以用 `setcookie("TestCookie", $value, time()+3600);` 或是利用 PHP 內建的 session 機制來設定 Cookie，瀏覽器收到之後會將 Cookie 存在瀏覽器中（如果沒有用瀏覽器就不會設定），再訪問同樣的頁面時，瀏覽器會將符合條件（沒有過期、符合 Domain & Path）的 Cookie 自動帶上，接著 Server 就可以透過 Cookie 來維持狀態了。 

![cookie](https://i.imgur.com/nONWuBr.png)



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
因為 Cookie 存在 Client 端，還是可能會有被竊聽、破解、偷取 Cookie 的風險，或許可以紀錄 Client 端來源，在來源變更時讓使用者再次驗證資料。


---

參考資料：

[https://cloud.tencent.com/developer/article/1326577](https://cloud.tencent.com/developer/article/1326577)
[https://ithelp.ithome.com.tw/articles/10222452](https://ithelp.ithome.com.tw/articles/10222452)

