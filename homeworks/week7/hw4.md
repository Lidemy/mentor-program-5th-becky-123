## 什麼是 DOM？
**文件物件模型（Document Object Model, DOM）**是 HTML、XML 和 SVG 文件的程式介面。它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。

雖然常常使用 JavaScript 來存取 DOM，但它本身並不是 JavaScript 語言的一部分，而且它也可以被其他語言存取（雖然不太常見就是了）。
![DOM](https://i.imgur.com/F6nraNW.png)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
- DOM 在事件傳遞中，可以分為三個階段：
    1. 首先是從根節點出发，到達目標節點，若此過程中觸發了事件，稱為捕獲（Capturing）事件。
    2. 當節點到達目標節點時，此時則處於目標（Target）階段。
    3. 在目標節點觸發後，會走原路回到跟節點，若此過程中觸發了事件，稱為冒泡（Bubbling）事件。
- `.addEventListener` 這個函數其實有第三個參數，`true` 代表把這個 listener 添加到捕獲階段， `false`  或是沒有傳就代表把這個 listener 添加到冒泡階段。
![flow](https://i.imgur.com/74NE2Vn.png)

## 什麼是 event delegation，為什麼我們需要它？
假設同時有很多 DOM element 都有相同的 `event handler`，與其在每個 DOM element 上個別附加 event handler，不如**利用 `event bubbling` 的特性，統一在他們的 ancestor 的 event handler 處理。**

以課堂上的新增按鈕範例來說，一開始的迴圈監聽只包含到預設的按鈕數量，但要如何監聽透過 `add` 新增出來的按鈕？不把監聽事件寫在按鈕，寫在按鈕外層的 `.outer`，判斷 `[e.target](http://e.target)` 的內容，透過冒泡的機制取得動態新增的按鈕。
![code](https://i.imgur.com/NF73RGk.png)

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- `event.preventDefault()`：阻擋默認的行為，但不會影響事件的傳遞，事件仍會繼續傳遞。
- `event.stopPropagation()`：阻止事件傳遞，如果是放在捕獲階段的話，冒泡部分完全不會執行。
- 以點擊超連結為例：

    `event.preventDefault()`：超連結不會被打開，但是會發生冒泡，冒泡會傳遞到上一層的父元素；

    `event.stopPropagation()`：這個超連接仍然會被打開，但後續的冒泡不會執行。