## 請解釋後端與前端的差異。

**「看得到的部分屬於前端，看不到的部分屬於後端」**

文字、圖片、連結、按鈕、排版或是一些與使用者的互動功能等等，這些看得到的都屬於前端；

網頁背後運行的邏輯程式，操作資料庫，伺服器的處理等等，這些看不到的部分則屬於後端。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器解析使用者輸入內容獲取到 URL
2. 瀏覽器進行 DNS 解析對應的 IP 地址
    - 查找瀏覽器緩存
    - 查找系統緩存
    - 查找路由器緩存
    - 查找 ISP DNS 緩存
    - 查找根域名伺服器供應商
    - 根域名伺服器把請求轉發給下一級，直到找到對應的IP為止
3. 域名解析成功，將相關 IP 地址丟回瀏覽器
4. 瀏覽器發起 HTTP 請求
5. 請求到達傳輸層，建立 TCP 連線（三次握手）
    - 第一次握手：送出一個連線請求給 Server，告訴他我想要建立連線
    - 第二次握手：Server 收到以後告訴我們他收到請求了，同時也發送一個連線確認給我們
    - 第三次握手：告訴 Server 收到連線確認，此時已確保雙向的連線都沒問題
6. 連線建立後，瀏覽器會與 Server 建立 [SSL/TLS 加密](http://www.tsnien.idv.tw/Security_WebBook/chap8/8-5%20SSL%20%E6%8F%A1%E6%89%8B%E5%8D%94%E5%AE%9A.html)
7. 瀏覽器依照 IP 位置及埠號，將要送出的資訊打包成一個個的「封包」，經由 TCP 傳輸
8. 伺服器溝通的過程中，伺服器會回傳一些狀態碼（Status Code）讓瀏覽器知道溝通的狀態
    - 1XX - 訊息
    - 2XX - 成功
    - 3XX - 重新導向
    - 4XX - 客戶端錯誤 （最常見的是在輸錯網址時會看到的 404 Not Found）
    - 5XX - 伺服器端錯誤
9. 資料傳輸完畢，請求完整的來到 Server，依照請求的方法，經由路由交給負責處理的程式
10. 經過一連串的查詢 DB、資料整理、商業邏輯等程序後，Server 返回 HTTP 回應
11. 瀏覽器收到對 Server 請求的回應，進行 HTTP 快取
12. 瀏覽器解析與渲染頁面，並依序載入其他額外資源，如果有其他 Request 需要會再發送給 Server，最後再渲染。
    - HTML 解析完會變成 DOM Tree
    - CSS 解析完會變 CSSOM Tress
    - 以上兩者結束會開始計算樣式該如何去套用到 HTML 上，並產生 Render Tree
    - 版面配置 Layout 決定出每個元素在頁面上的位置
    - 最後經過 Paint 將計算結果轉為實際的像素，繪製在畫面上
13. 以上完成後，終止 TCP 連線（四次揮手）
    - 第一次揮手：告訴 Server 沒有資料要傳送了，要申請關閉連線
    - 第二次揮手：Server 回傳申請通過，將準備關閉（主要回應申請，可能有資料未傳送完畢）
    - 第三次揮手：Server 確認自己的資料也都傳送完成後，告知關閉
    - 第四次揮手：收到 Server 的關閉通知，自己也關閉


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

- 權限相關：

    `chmod`：Change Mode，變更檔案或是資料夾的權限

    - `chmod u+rw file.txt`：對所有用戶增加對 file.ext 的讀寫權限
- 程序相關：

    `ps`：Process Status，顯⽰當前使用者執⾏的程序

    - `ps aux` ：可顯⽰示所有系統的程序

    `kill`：關閉系統程序，強制關閉 : 9（可省略）  

    - `kill -9 5568`：強制關閉 Process ID 為 5568 的程序
- 網路相關：

    `ifconfig`：查網卡介面狀態

    `iwconfig`：查無線網卡狀態

    `netstat` ：查開啟的port

---

參考資料：

[https://w3c.hexschool.com/blog/8d691e4f](https://w3c.hexschool.com/blog/8d691e4f)
[https://ithelp.ithome.com.tw/articles/10228442](https://ithelp.ithome.com.tw/articles/10228442)
[https://infosecdecompress.com/posts/ep19_why_is_https_so_important](https://infosecdecompress.com/posts/ep19_why_is_https_so_important)
[https://cythilya.github.io/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/](https://cythilya.github.io/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/)
[https://www.mdeditor.tw/pl/2ndd/zh-tw](https://www.mdeditor.tw/pl/2ndd/zh-tw)
[https://jimmywei01.github.io/2019/06/19/瀏覽器跟伺服器要資料發生的事情/](https://jimmywei01.github.io/2019/06/19/%E7%80%8F%E8%A6%BD%E5%99%A8%E8%B7%9F%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%A6%81%E8%B3%87%E6%96%99%E7%99%BC%E7%94%9F%E7%9A%84%E4%BA%8B%E6%83%85/)
[https://dosthbyroy.medium.com/前端面試考官-從你輸入網址-到網頁出現-這過程到發生了什麼-414dc3404619](https://dosthbyroy.medium.com/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%A9%A6%E8%80%83%E5%AE%98-%E5%BE%9E%E4%BD%A0%E8%BC%B8%E5%85%A5%E7%B6%B2%E5%9D%80-%E5%88%B0%E7%B6%B2%E9%A0%81%E5%87%BA%E7%8F%BE-%E9%80%99%E9%81%8E%E7%A8%8B%E5%88%B0%E7%99%BC%E7%94%9F%E4%BA%86%E4%BB%80%E9%BA%BC-414dc3404619)
[https://medium.com/front-end-augustus-study-notes/從使用者輸入網址-到瀏覽器呈現出來-經過了哪些過程-d8278603c6a1](https://medium.com/front-end-augustus-study-notes/%E5%BE%9E%E4%BD%BF%E7%94%A8%E8%80%85%E8%BC%B8%E5%85%A5%E7%B6%B2%E5%9D%80-%E5%88%B0%E7%80%8F%E8%A6%BD%E5%99%A8%E5%91%88%E7%8F%BE%E5%87%BA%E4%BE%86-%E7%B6%93%E9%81%8E%E4%BA%86%E5%93%AA%E4%BA%9B%E9%81%8E%E7%A8%8B-d8278603c6a1)