import { React,useState,useCallback} from 'react';
import TabsItem from './TabsItem';
import TabsList from './TabsList';
import TabsContent from './TabsContent';
import Signin from './Signin&Login/Signin';
import Login from './Signin&Login/Login';

const Tabs = () => {
    const [data, setData] = useState([
        { id: 1, title: "ورود" },
        { id: 2, title: "ثبت نام" }
    ])
    const [signin, setSignin] = useState([])
    // 
    const [login, setLogin] = useState([])
    // 
    const [selectedTAb, setselectedTAb] = useState(0)
    //
    const handleClick = (index) => {
        setselectedTAb(index)
    }
    //
    const handleLogin = useCallback((input) => {
        const newLogin = [...login,input];
        setLogin(newLogin);
        checked()
      });

    //
    const checked=()=>{
        console.log(signin)
        console.log(login)
    }
    //
    const handleSignin = useCallback((input) => {
        const newSignin = [...signin, input];
        setSignin(newSignin);
      });
    //
    return (
        <div>
            <TabsList>
                {data.map((item, index) => (
                    <TabsItem
                        className={selectedTAb === index ? 'activeTab' : ''}
                        handleClick={() => handleClick(index)}
                        key={item.id}
                    >{item.title}</TabsItem>
                ))}
            </TabsList>
            <TabsContent tabId='0' activeTab={selectedTAb}>
                <Login parentCallback={handleLogin}/>
            </TabsContent>
            <TabsContent tabId='1' activeTab={selectedTAb}>
                <Signin parentCallback={handleSignin}/>
            </TabsContent>
        </div>
    );
};

export default Tabs;