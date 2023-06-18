import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="header">
        <p className="title">Navbar</p>
        <input className="input" placeholder="Serch" />
        <details className="accordion">
          <summary>Name</summary>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
        </details>
      </div>
      <div className="menu">
        <button className="newThread">新しいスレッド</button>
        <ul className="category">
          <li>
            <a href="xxx">ホーム</a>
          </li>
          <li>
            <a href="xxx">保存済み</a>
          </li>
          <li>
            <a href="xxx">履歴</a>
          </li>
        </ul>
      </div>
      <div class="tab">
        <ul class="tab-list">
          <li class="tab-list-item active">勢い</li>
          <li class="tab-list-item">新規</li>
          <li class="tab-list-item">トップ</li>
        </ul>
        <div class="tab-content">
          <div class="tab-content-item show">今熱いスレッド</div>
          <div class="tab-content-item">新しいスレッド</div>
          <div class="tab-content-item">人気のスレッド</div>
        </div>
      </div>
    </>
  );
};
