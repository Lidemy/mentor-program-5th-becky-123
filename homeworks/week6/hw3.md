## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- `<article>`：用來描述這一區塊的內容本身是獨立且完整的，像是部落格中的一篇文章、一則留言，或像論壇中的一個回覆等。例如一個文章列表頁面，每篇文章都可以用一個 <article> 包起來。
- `<aside>`：用來表示此內容是跟主要內容沒直接關係的區塊 (related to, but separate from)，通常是作為頁面的額外資訊，可以放在 <aside> 中的像是網頁側邊欄資訊、廣告等。
- `<hr>`：用來做文字段落的焦點或場景轉換 (thematic break)，視覺效果上則是一條水平分隔線。

## 請問什麼是盒模型（box modal）
- **盒模型（box model）**：HTML 的元素都可以視為一個盒子，盒子從內到外包含元素本身的寬高、`padding`、`border`、`margin`。
![box](https://i.imgur.com/sNfo46v.png)
- `box-sizing: content-box;`：預設值，`border` 跟 `padding` 不會影響 `content` 的尺寸，整體尺寸＝ `content`＋`border`＋`padding`
- `box-sizing: border-box;`：`content`  的尺寸會先扣掉 `border` 跟 `padding` ，整體尺寸不變

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- **display(顯示模式)**：每一個html標籤元素都會有一個預設的display屬性，標籤基本上大部分可分為兩種顯示模式，一種是行內元素(inline)，另一種為區塊元素(block)，**我們可以在CSS內加入display來賦予新的屬性，以改變其原本特性，利用它來呈現我們想要的排版。**
- `display: block;`：調什麼都可以，範例：`div`、`ul+li`、`p`、`h1`
- `displau: inline;`：調寬高、上下邊距沒用（padding有效果，但會以水平位置不變動的方式做擴張），範例：`span`、`a`、`img`
- `displau: inline-block;`：可以併排的 block；對外像 `inline` 可併排，對內像 `block`可調各種屬性，範例：`button`、`input`、`select`
- `inline-block` 的小陷阱

    Q：並排的時候沒有 margin 時中間也會有小空隙怎麼辦？

    A：**因為 div 之間有空格所導致的，刪掉之後就沒有空隙了！**

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- `position: static;`：預設值，依照內容尺寸往下排
- `position: relative;`：相對位置，依照 `static` 尺寸做移動，可定義 top、left、bottom 與 right 。（注意: 元素實際位置還是在 `static` 的位置，非偏移過後的位置）
- `position: fixed;`：相對於瀏覽器（viewport）做定位，設定後跟原本的內容位置已無關
- `position: absolute;`：相對於某個參考點做定位，參考點 = 往上找第一個 position 不是 static 的元素（找不到會定位 body），大多會設定`position: relative;`在要拿來當參考點的元素，設定後跟原本的內容位置已無關，其他 static 元素會遞補排序

    **如果沒有設定偏移位置時，元素會待在原本的位置但是跳出 static 的排序框架**
