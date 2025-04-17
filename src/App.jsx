import { useState } from "react";
import { Button, Layout, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";

import Home from "./pages/home";
import About from "./pages/about";
import Cars from "./pages/cars";
import Calculator from "./pages/calculator";
import Cart from "./pages/Cart";
import { Link } from "react-router-dom";
import Checkout from "./pages/Checkout";

const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: "0 16px",
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <Link to="/cart">
              <Button type="primary">🛒 Cart</Button>
            </Link>
          </Header>

          <Content
            style={{
              margin: "16px",
              padding: "16px",
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/about" element={<About />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/cart" element={<Cart />} />{" "}
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
