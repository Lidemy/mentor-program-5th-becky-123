## 交作業流程



1. 點選課程的 [GitHub Classroom 連結](https://classroom.github.com/a/yNNrtNyW)，加入到 Lidemy 的 Classroom
2. 登入後 GitHub 會創建一個 Lidemy 底下屬於[我的 Repository](https://github.com/Lidemy/mentor-program-5th-becky-123)

  `// 因目前本地端沒有上面的檔案，所以要先整組 clone 下來`

3. 點選右上角的 Code 按鈕，複製 [我的 Repository 連結](https://github.com/Lidemy/mentor-program-5th-becky-123.git)
4. 開啟本地端的 Terminal ，切換到要放檔案的資料夾：`cd 資料夾路徑`
5. 下載資料至本地端：`git clone https://github.com/Lidemy/mentor-program-5th-becky-123.git`
6. 切換至下載的資料夾：`cd mentor-program-5th-becky-123`
7. 改作業前先創建分支並命名 "hw1"：`git branch hw1`
8. 切換至 hw1 分支：`git checkout hw1`

  `// Step7、8指令可結合為 → git checkout -b hw1`

9. 修改作業檔案 hw1.md 並存檔
10. 確認檔案 hw1.md 檔案狀態應為待 add & commit ：`git status`
11. 新增檔案 hw1.md 至需要被版本控制：`git add .`
12. 提交新的版本並新增訊息 hw1 ：`git commint -m hw1`

    `// Step11、12指令可結合為 → git commint -am hw1`

    `// 分支 hw1 的檔案將透過 GitHub 上的 merge (= Pull request) 被合併進 master`

13. 將本地端分支 hw1 的檔案傳到 GitHub ：`git push origin master`
14. GitHub 會顯示收到 hw1 的資料，點選 Compare & pull request
15. 確認需 merge 的分支，輸入標題確認程式碼後點選 Create pull request
16. 待整週的作業皆上傳至 GitHub 後，複製 PR 連結，到 [Lidemy 學習系統](https://learning.lidemy.com/course) 繳交作業
17. 放著待助教批改，助教確認內容後會確認 Pull request，檔案會被 merge 進 master

    `//因 GitHub 的 master 與 hw1 已合併，本地端的 master 為前一版本，故需更新本地端的 master`

18. 切換分支至 master ： `git checkout master`
19. 從 GitHub 下載更新後的 master ： `git pull orgin master`
20. 刪除本地端分支 hw1 ： `git branch -d hw1`