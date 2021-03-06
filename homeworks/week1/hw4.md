## 跟你朋友介紹 Git


### 什麼是版本控制 ?

在介紹 Git 以前，先來認識「版本控制」吧！

「版本控制」這個原理就跟玩遊戲存檔的概念差不多，還記得小時候用模擬器玩神奇寶貝的時候，要抓神獸之前一定要先去神奇寶貝中心存檔！如果沒抓到它或不小心打死了就退出遊戲重開機讀存檔重來，那時候耗個好幾天都不意外呢 XD 

![](https://i.imgur.com/JngedWo.png)


其實神奇寶貝中心就像是最原始的版本控制系統 **VCS（Version Control System）**，將檔案備份在自己的電腦裡，但是如果電腦壞掉或檔案被老母移除了，一樣也是會直接哭出來嗚嗚嗚...

---

### Git 與 GitHub

Git 與其他版控系統最大的差異就於，它解決了「單一儲存區」這項最致命的缺點，改為「分散式儲存」， **DVCs（Distributed Version Control System）** 將資料分散於不同設備上（就是儲存資料的本地端），大部份的操作在自己電腦上就可完成，就算在深山裡或飛機上沒有網路可使用，也可正常的使用 Git，待有網路的時候再與其它人同步，而且不管是遠端的伺服器或是自己的電腦，在同步之後大家都會有一份完整的檔案及歷史紀錄。

GitHub 則是一個以 Git 的理念為基礎，為開發者提供雲端版本控制服務（Repository Hosting）的平台，除了專案作者本人的電腦上，也在 GitHub 官網上儲存一份備份，而且每個曾進行過更動的本地端（就是改過檔案的人的電腦）也能重新放回官網上，形成新的備份。

![](https://i.imgur.com/2IBOIlB.png)

很多人都錯誤以為 GitHub 和 Git 是同一樣東西，但這是錯的。Git 是一個在你自己電腦本機端運行的版本控制系統，而 GitHub 則是一個線上服務，讓你將 Git 版本資訊儲放至雲端，就像是 iCloud 雲端硬碟，但它是專屬於程式碼的應用，而且功能更強大。

除了 GitHub，市面上也有類似的雲端版本控制服務如 [Bitbucket](https://bitbucket.org/)、[GitLab](https://gitlab.com/) 等。

---

### Git 的運作方式

下圖說明了一個檔案在 Git 儲存區的不同狀態，以及可以對它們使用的各種指令：

![](https://i.imgur.com/GQn7cP6.png)

- **Working Directory**：工作目錄，這些檔案從 Git 目錄內被壓縮過的資料庫中拉出來並放在硬碟供你使用或修改，使用 Add 可將檔案至加到 Staging Area 。
- **Staging Area**：預存區，存放 Commit (提交) 前的檔案，在這裡的檔案就是準備要 Commit，當你決定 Commit 這些檔案時，檔案就會加到你的 Local Repository。
- **Local Repository**：本機儲存區，這是 Git 用來儲存你專案的後設資料及物件資料庫的地方。 也是 Git 最重要的部份，而且當你 Clone 一個其他電腦的儲存庫時，這個資料夾也會被同時複製。
- **Remote Repository**：遠端儲存區，當你進行 Push，就會將你的本機儲存區和遠端儲存區同步，今天我們用的遠端儲存區就是 GitHub；換而言之，進行 Pull 的話，就可以將在遠端儲存區的改動，加入到本機儲存區中。

套用這個概念，假設菜哥跟小鷗準備組一個雙人搭檔去講脫口秀，他們用 GitHub 來儲存他們還沒寫完的稿，今天菜哥突然靈光乍現！想到一個必中的段子要加進稿子，修改步驟如下：

1. 蔡哥要從 GitHub 進行 Git Pull 將檔案下載到電腦，確保電腦的版本是最新的稿。
2. 把段子改好之後，新的稿正在 Ｗorking Directory，使用 Git add 將稿加到 Staging Area。
3. 接著就可以準備來 Commit 了，在 Commit 的時候他備註了這個段子一定中的原因！
4. 最後用 Git Push 將本地端儲存區的稿上傳至 GitHub。

如果小鷗想要修改稿也是重複上述步驟就可以囉～概念說明到這裡，接下來就透過實作加深印象吧！

---

### Git 安裝教學

- **Windows 作業系統**
    1. 到 Git 官方網站下載適合的版本並安裝：[https://git-scm.com/download/win](https://git-scm.com/download/win)
    2. 安裝完以後可以在 Git-bash 試著輸入：git --version 並且按 enter，看有沒有印出什麼訊息就知道是否成功了！

    ```jsx
    $ git --version
    git version 2.21.0.windows.1  // 如果出現類似的訊息，就是安裝成功了～
    ```

- **Mac OSX 作業系統：從官方網站下載 Mac 專屬版本的 Git**
    1. 到 Git 官方網站上下載並手動安裝：[https://git-scm.com/download/mac](https://git-scm.com/download/mac)
    2. 只要下載檔案、點開、執行，基本上就可以順利完成了。

- **Mac OSX 作業系統：使用 Homebrew 軟體來安裝 Git（建議）**

    [Homebrew](https://brew.sh/) 是一個套件管理軟體，可以負責管理、下載 Mac 原生系統內沒有安裝的套件，尤其是對於使用 Mac 的軟體工程師來說， Homebrew 更是不可或缺的工具。

    1. 打開 Terminal（點選 Mac 右上角的搜尋按鈕，輸入 Terminal 可以找到）
    2. 安裝 Homebrew，將網站上的安裝指令複製貼到 Terminal ：

        `/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"`

    3. Homebrew 安裝完成後，在終端機下執行這行指令：

        `$ brew install git`

    4. 訊息跑完後，再用 git --version 來確認有回報資訊，就代表安裝完成了。

        ![](https://i.imgur.com/68tJ2fo.png)

延伸閱讀：[Git 官網的安裝教學](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8)

---

### Git 使用者名稱和信箱設定

要開始使用 Git，首先要做的第一件事（應該也只要做一次就好），就是設定使用者的 Email 信箱以及使用者名稱，因為在進行程式碼的版本更新時，Git 會紀錄修改者。

1. 在 Terminal 或 Git-bash 中輸入以下指令：

    `$ git config --global user.name "your name"`

    `$ git config --global user.email "your email"`

2. 輸入完成之後，以下指令可檢視目前的設定：

    `$ git config --list`

    ```
    user.name=[your name]
    user.email=[your email]
    ```

---

### Git 基礎指令

接下來終於要開始 Git 啦！示範的過程中也會使用到不少 Command Line 指令，如果還不認識它們的話可以先去看看 [這篇文章](https://www.notion.so/hw3-Command-Line-d783f4254c1b4b08920d91150648943d) 喔！

- `git init`：初始化 Git 專案目錄。

    先用 `cd` 切至被版本控制的資料夾底下，輸入指令將這個資料夾註冊到版本控制內，也就是建立一個全新的 Git 儲存區 （Repository）。

    可用 `ls -a`確認資料夾內有一個名為 .git 的資料夾，表示註冊成功。

    ![](https://i.imgur.com/YjchkJh.png)

- `git status`：確認目前 Git 的狀態。

    在剛剛建立的 newfolder 資料夾下執行這個指令：

    ![](https://i.imgur.com/sWxMfJs.png)

    上面這段訊息的意思是「現在沒東西可以提交（nothing to commit）」。接著在這個資料夾裡建立一個內容為 “123” 並命名為 test.txt 的檔案：

    ![](https://i.imgur.com/OiHMwNy.png)

    訊息顯示是這個檔案尚未被加到 Git 版控系統裡，還沒開始正式被 Git 追蹤，請你用 git add <file> ... 指令來加入想提交的檔案。

    接下來我們會順著它的指示來提交程式碼。所以在 Git 過程中，若搞不清楚自己在哪一個步驟，隨時都可以停下來使用 `git status`，看看會有什麼訊息或建議跑出來。

    在前面提到的 **Git 的運作方式**中，要把檔案送到 Local repository 需要兩個步驟：

	![](https://i.imgur.com/OrkmmB7.png)

- `git add`：把要提交的檔案新增到 Staging area （預存區）。

    如果覺得輸入檔案名稱很麻煩，也可以直接打 `git add .`，再用 `git status` 確認目前狀態。

    ![](https://i.imgur.com/KelxT84.png)

    會看見檔案名稱變成綠色，而且提示改成「Changes to be committed」，表示檔案已經位在 Staging area，準備送進 Local repository。

- `git commit`：把預存區的內容提交到 Local Repository（本機儲存區）裡存檔。

    在後面加上的 `-m "text"` ，m 是 --message 的縮寫，text 是指要說明「你在這次的 Commit 做了什麼事」，只要使用簡單、清楚的文字說明就好，中英文都可以，可以再用 `git status`確認狀態：

    ![](https://i.imgur.com/IjRt82W.png)

- `git log`：可以查詢 commit 的歷史紀錄。

    ![](https://i.imgur.com/Mg86bvH.png)

---

### Git push 上傳至 GitHub

1. 要上傳檔案到 GitHub，需要先在上面開一個新的專案。在 GitHub 網站的右上角點選「+」號，並選擇「New repository」。

    ![](https://i.imgur.com/KJHs6hx.png)

2. 輸入 Repository name，不重複即可。

    ![](https://i.imgur.com/4uUQ5cU.png)

3. 按下 Create repository ，若看到以下畫面，表示已成功建立 Repository。

    ![](https://i.imgur.com/a7WkpQb.png)

    頁面中敘述如果是全新開始，請依「create a new repository on the command line」的內容指示進行；如果是要上傳現存專案，則依照「push an existing repository from the command line」選項進行

4. 因為我們的電腦已經有 Repository，將畫面中的指令輸入在 Terminal / Git Bash即可完成上傳。
    - `git remote add origin [your github repository]`

        第一行是使用 `git remote add` 指令把遠端的 HTTPS 網址註冊起來，並且將這個遠端主機命名為 origin，origin 也可以改成其他名字。

    - `git branch -M main`

        將預設的儲存庫名稱 master 變更為 main ，原由可參照此篇文章：[GitHub 10月起將以Main取代Master作為新Git儲存庫預設名稱](https://www.ithome.com.tw/news/140094)。

    - `git push -u origin main`

        使用 `git push` 把本地的 Repository「推」到遠端，指令後的兩個參數分別是主機位置 origin 和想推到遠端的 main 分支。

        u 是 --set-upstream 的縮寫，一旦設定過 upstream，以後就不用每次都要打 origin main。

5. 回到 GitHub 網站，重新整理頁面，顯示順利把本地儲存區的檔案推到這個遠端儲存區了！

    ![](https://i.imgur.com/IzHyOjV.png)

---

### Git pull 下載同步更新

![](https://i.imgur.com/tSCmY76.png)

我使用 GitHub 在線上編輯了 test.txt，在 123 下面新增一行 456，然後新增了一個檔案 newfile.txt，目前遠端儲存區的檔案已被更新，但是本地端的儲存區檔案還是更新前的狀態，所以要使用 `git pull`把檔案拉回來。

- `git pull origin main`

    因為在 git push 的時候已經使用 -u 設定過 upstream，所以可以省略為 `git pull`，再用 `cat` 輸出 test.txt 看一下是否有剛剛新增的 456，這樣子就完成啦～

    ![](https://i.imgur.com/1AH2tQv.png)

---

參考資料：

[https://git-scm.com/doc](https://git-scm.com/doc)
[https://gitbook.tw/](https://gitbook.tw/)
[https://www.ithome.com.tw/news/140094](https://www.ithome.com.tw/news/140094)
[https://www.pikatw.com/g1/mew_get.htm](https://www.pikatw.com/g1/mew_get.htm)
[https://www.appcoda.com.tw/git-xcode/](https://www.appcoda.com.tw/git-xcode/)
[https://ithelp.ithome.com.tw/articles/10243355](https://ithelp.ithome.com.tw/articles/10243355)
[https://tw.alphacamp.co/blog/git-github-version-control-guide](https://tw.alphacamp.co/blog/git-github-version-control-guide)