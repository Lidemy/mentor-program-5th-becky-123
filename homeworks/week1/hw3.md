## 教你朋友 CLI


### 什麼是 Command Line ？

命令列（Command-Line）是使用者介面（User Interface，簡稱UI）中的其中一種，也可稱為命令行界面（Command-Line Interface，簡稱CLI），既然要介紹 CLI 就順便一起認識他的朋友 GUI 圖形化介面（Graphics User Interface，簡稱GUI）吧！

![](https://i.imgur.com/AGJUUYp.png)

GUI 是以圖形方式顯示的電腦操作使用者介面，當使用者點選或操作傳送圖形對應的「指令」給電腦，接著使用者需要的檔案或程式就會被開啟；相對 CLI 介面，其實就是跳過第一段使用者對圖形點選或操作的過程，直接由使用者輸入「指令」給電腦，開啟使用者需要的檔案或程式。

以開啟 Excel 為例，在 GUI 介面中，使用者點選的 Excel 的圖示，就是告訴電腦「我要開啟 Excel」這段指令；那 CLI 就是使用者直接輸入這段指令告訴電腦。

延伸閱讀：[DAY2 作業系統結構(上)](https://ithelp.ithome.com.tw/articles/10202517)

---

### 如何使用 Command Line ？

#### 命令行介面（CLI）

在使用命令列（Command-Line）之前，首先要打開電腦的命令行介面（CLI）。

- **Windows 作業系統**

    開始 → 所有程式 → 附屬應用程式 → 命令提示字元(cmd)

    助教補充：也可以在「執行」或「開始的搜尋處」輸入 cmd！

    **Tips：安裝 [Git](https://git-scm.com/downloads) ，使用 Git Bash 的介面操作會更方便！**

- **Mac OSX 作業系統**

    應用程式 → 工具程式 → 終端機（Terminal）

    **Tips：安裝 [iTerm2](https://www.iterm2.com/) ，擺脫黑白介面還可自行設定超讚！**

延伸閱讀：[為 MAC 的 Terminal 上色 - 透過 iTerm 2 和 Oh My Zsh 高亮你的終端機](https://pjchender.blogspot.com/2017/02/mac-terminal-iterm-2-oh-my-zsh.html)

---

### Command Line 常用指令

- 目錄相關：

    `pwd`： Print Working Directory，顯示目前所在的位置

    `cd` ：Change Directory，切換到其他資料夾

    - `cd /`：切至根目綠
    - `cd ..` ：切至上一層目錄

    `mkdir`：Make Directory，建立資料夾

    `rmdir`：Remove Directory，刪除資料夾（資料夾內容需清空）

    `ls` ：List，顯示目錄中所有的資料

    - `ls -al`：顯示所有資料（包含隱藏資料）

- 檔案相關：

    `touch <file>`：碰一下！更改檔案時間也常用於新增檔案

    `rm <file>`：Remove，刪除檔案

    - `rm -r`：刪除資料夾（資料夾內容不必為空，小心服用！）

    `cp <file> <copy file>` ：Copy，複製檔案

    - `cp -r` ：複製資料夾

    `mv` ：Move，移動或更名檔案或資料夾

    `cat <file>` ：Catenate，檔案內容顯示在 Terminal 介面

    `grep keyword <file>`：抓取檔案內的關鍵字

    `>`：取代原本的檔案內容（會覆蓋原本的內容）

    `>>`：添加至原本的檔案內容（不會覆蓋原本的內容）

    `vim <file>`：進入文字編輯器

    - `i`：進入編輯模式
    - `esc`：離開編輯模式

        **編輯模式下無法輸入指令或離開文字編輯器，必須先用 `esc` 離開編輯模式**

    - `:w`：存檔
    - `:q`：離開文字編輯器（若未存檔會提示先存檔再離開）
    - `:q!`：不存檔強制離開文字編輯器
    - `:q!`：強制離開文字編輯器

- 其他常用：

    `man`：Manual，指令使用說明

    `clear`：清空畫面

    `echo`：列印在 Terminal 介面

    `wget`：下載連結檔案或網頁原始碼

    `curl`：傳送 Request

    `|`：Pipe串接指令，將左邊指令輸出內容變成右邊指令的輸入內容

---

### 如何達成 h0w 哥想要的功能？

我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。

了解 Command line 常用指令後就能輕鬆解決 h0w 哥的問題啦！步驟如下：

1. 建立 wifi 資料夾：`mkdir wifi`
2. 切換至 wifi 資料夾裡面：`cd wifi`
3. 建立一個叫 afu.js 的檔案：`touch afu.js`

---

參考資料：

[https://zh.wikipedia.org/wiki/命令行界面](https://zh.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2)
[https://ithelp.ithome.com.tw/articles/10202517](https://ithelp.ithome.com.tw/articles/10202517)
[http://mirlab.org/jang/books/matlabprogramming4beginner/08-1_intro.asp?title=8-1 GUIDE ²��](http://mirlab.org/jang/books/matlabprogramming4beginner/08-1_intro.asp?title=8-1%20GUIDE%20%C2%B2%A4%B6)
[https://carolhsu.gitbooks.io/django-girls-tutorial-traditional-chiness/content/intro_to_command_line/README.html](https://carolhsu.gitbooks.io/django-girls-tutorial-traditional-chiness/content/intro_to_command_line/README.html)
[https://shaochien.gitbooks.io/command-line-and-environment-variable-tutorial/content/command-line.html](https://shaochien.gitbooks.io/command-line-and-environment-variable-tutorial/content/command-line.html)
[https://medium.com/@brianwu291/basic-unix-command-line-collections-e9514d9e4435](https://medium.com/@brianwu291/basic-unix-command-line-collections-e9514d9e4435)