## 什麼是 Ajax？
**Ajax 是 Asynchronous JavaScript and XML 的縮寫**，是一種不需要重新整理頁面，透過 JavaScript 來與伺服器交換資料、更新網頁內容的技術，目的在於改善使用者的操作介面，提昇流暢度。重點在於 Asynchronous 這個單字，非同步。

`request.open(<method>, <URL>, true)`：第三個參數代表是否採用非同步，非同步代表發送後可以再做其他事，之後再接受 response ，同步的話只能等 response 回傳後才可做別的事，所以通常瀏覽器是用非同步溝通。

## 用 Ajax 與我們用表單送出資料的差別在哪？
與表單傳送資料的差異在 response 的部分，不會直接轉跳網頁 render 在瀏覽器上，瀏覽器會將 response 傳給 JS。
![Ajax](https://i.imgur.com/3vJ1f4T.png)
## JSONP 是什麼？
JSONP（JSON with padding）：透過不受同源政策限制的標籤，例如說 `<img>`、`<script>`，將資料夾帶在裡面供他人存取，但實務上較少被使用。
![JSONP](https://i.imgur.com/Dehld1p.png)
## 要如何存取跨網域的 API？
**跨來源資源共享（CORS，Cross-Origin Resource Sharing）**：用於讓網頁的受限資源能夠被其他域名的頁面存取的一種機制。

如果 Server 端沒有加上 `access-control-allow-origin` 這個 header，其他人是沒辦法拿到 response（除非變成與 Server 端同域名）。
![header](https://i.imgur.com/s0spQkv.png)
## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
第四週串 API 是用 Node.js 發 request ，本週是用瀏覽器發 request 給 Server，透過瀏覽器呼叫除了被瀏覽器規則限制以外，也可能會有一些額外資訊（瀏覽器資訊等）。

**同源政策（Same-origin policy）**：所謂同源是指兩份網頁具備相同協定、埠號 (如果有指定) 以及主機位置，要注意 `http` 跟 `https` 也是歸類在不同源的。如果是接別人 API 的話，大多數情形都是不同源的。

考量到安全問題，瀏覽器會以同源政策（Same-origin policy） 限制網頁對其他 Origin 的資源（Resource）存取，例如 AJAX、DOM、Cookie、圖片等等，然而透過 CORS 就能夠在滿足某些條件的情況下，突破同源政策限制取得其他 Origin 的資源。
![error](https://i.imgur.com/WRKL731.png)