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
      <div className="tab">
        <input id="rapid" type="radio" name="tab-item" checked>
          <label className="tab_item" for="rapid">
            勢い
          </label>
        </input>
        <input id="new" type="radio" name="tab-item">
          <label className="tab_item" for="new">
            新規
          </label>
        </input>
        <input id="top" type="radio" name="tab-item">
          <label className="tab_item" for="top">
            トップ
          </label>
        </input>
        <div className="tab_content" id="rapid-content">
          <p>今熱いスレッド</p>
        </div>
        <div className="tab_content" id="new-content">
          <p>新しいスレッド</p>
        </div>
        <div className="tab_content" id="top-content">
          <p>人気のスレッド</p>
        </div>
      </div>
    </>
  );
};
