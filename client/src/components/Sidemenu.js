import {
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
    UserAddOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { Link } from "react-router-dom";
  
  const SideMenu = ({ type, logout }) => {
    const commonItems = [
    //   type !== ""
    //     ? {
    //         label: (
    //           <Link className="sider--link" to="/mypage">
    //             <SettingOutlined />
    //             {`\u00A0 정보수정`}
    //           </Link>
    //         ),
    //         key: "mypage",
    //       }
    //     : "",
      type !== ""
        ? {
            label: (
              <div onClick={logout}>
                {/* <LogoutOutlined /> */}
                {`\u00A0 로그아웃`}
              </div>
            ),
            key: "logout",
          }
        : {
            label: (
              <Link to={"/SignIn"} >
                {/* <LoginOutlined /> */}
                {`\u00A0 로그인`}
              </Link>
            ),
            key: "signin",
          },
    
    ];
  
  
    const items =[...commonItems]
        
        
    return (
      <Menu style={{background:'rgb(20, 20, 20)',color:'white'}} items={items} />
    );
  };
  
  export default SideMenu;
  