import { Menu } from 'antd'
import {HomeOutlined,
        CarOutlined,
        TeamOutlined,
        CalculatorOutlined,

} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuList = ({darkTheme}) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
            <Menu.Item key="home" icon={<HomeOutlined/>}><Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="car" icon={<CarOutlined/>}><Link to='/cars'>Cars</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<TeamOutlined/>}><Link to='/about'>About</Link>
            </Menu.Item>
            <Menu.Item key="calculator" icon={<CalculatorOutlined/>}><Link to='/calculator'>Calculator</Link>
            </Menu.Item>
        </Menu>
    );
};
export default MenuList
