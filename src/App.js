import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
        <img src={require('./images/elkasheef.jpg')} className="logo" />
        </div>
        <h1 className="main-text">جمعية الكشاف الرسالي</h1>
        <h2 className="sub-text">فوج الإمام الرضا</h2>
      </header>
      <main className="content">
        <p className="description">
          جمعية غير حكومية انطلقت من الشعور بالمسؤولية اتجاه أبناء المجتمع
          ولخلق شباب قادر على تحمل المسؤولية تجاه أسرته و وطنه ودينه.
        </p>
        <div className="links">
          <a href="https://www.instagram.com/jk_alrasalii" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/share/12DE1WkBTZN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://t.me/lkashaafalrisala" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i> Telegram
          </a>
          <a href="tel:+9647763759458">
            <i className="fas fa-phone"></i> +964 776 375 9458
          </a>
        </div>
      </main>
      <div className="image-footer">
        <img src={require('./images/left.jpg')} className="footer-image left" />
        <img src={require('./images/ri.jpg')} className="footer-image right" />

      </div>
    </div>
  );
}

export default App;