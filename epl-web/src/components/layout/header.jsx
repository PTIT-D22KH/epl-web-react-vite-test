
import { Menu} from "antd";

const Header = () => {

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "products",
      icon: <AuditOutlined />,
    },
    ...(!user.id ? [{
      label: <Link to={"/login"}>Đăng nhập</Link>,
      key: 'login',
      icon:<LoginOutlined />,
    }] : []),

    ...(user.id  ? [{
      label: `Welcome ${user.fullName}`,
      key: "setting",
      icon:<AliwangwangOutlined />,
     children: [
      {
        label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
        key: 'logout',
      },
     ]
    },] : []),
    
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
