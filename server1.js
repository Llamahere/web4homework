const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // 伺服器運行的端口號

// 設定靜態檔案的路徑
app.use(express.static(path.join(__dirname, 'public')));

// 首頁路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器正在 http://localhost:${PORT} 上運行`);
});
