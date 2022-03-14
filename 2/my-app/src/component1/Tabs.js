import { React, useState } from 'react';
import TabsItem from './TabsItem';
import TabsList from './TabsList';
import TabsContent from './TabsContent';
import Signin from './Signin&Login/Signin';
import Login from './Signin&Login/Login';

const Tabs = () => {
    const [data, setData] = useState([
        { id: 1, title: "Tab 1" },
        { id: 2, title: "ثبت نام" }
    ])
    const [accounts, setAccounts] = useState()
    const [selectedTAb, setselectedTAb] = useState(0)
    //
    const handleClick = (index) => {
        setselectedTAb(index)
    }
    //
    return (
        <div>
            <TabsContent tabId='0' activeTab={selectedTAb}>
               <Login/>
            </TabsContent>
            <TabsContent tabId='1' activeTab={selectedTAb}>
                <Signin/>
             </TabsContent>
            <TabsList>
                {data.map((item, index) => (
                    <TabsItem
                        className={selectedTAb === index ? 'activeTab' : ''}
                        handleClick={() => handleClick(index)}
                        key={item.id}
                    >{item.title}</TabsItem>
                ))}
            </TabsList>
        </div>
    );
};

export default Tabs;