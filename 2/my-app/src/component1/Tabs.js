import { React, useState, useEffect, useCallback } from 'react';
import TabsItem from './TabsItem';
import TabsList from './TabsList';
import TabsContent from './TabsContent';
import Signin from './Signin&Login/Signin';
import Login from './Signin&Login/Login';
import { Modals } from './Modal/Modal';

const Tabs = () => {
    const [data, setData] = useState([
        { id: 1, title: "ثبت نام" },
        { id: 2, title: "ورود " }
    ])
    const [signin, setSignin] = useState([])
    // 
    const [login, setLogin] = useState([])
    // 
    const [selectedTAb, setselectedTAb] = useState(0)
    //**state for modal **//
    const [show, setShow] = useState(false);
    //**state for text of modal **//
    const [modalText, setModalText] = useState('');
    //**state for text of modal **//
    const [modalStyle, setModalStyle] = useState('');
    const handleClick = (index) => {
        setselectedTAb(index)
    }
    //
    const handleLogin = useCallback((input) => {
        setLogin(input);
        checkUser()
    });
    //
    const checkUser = () => {
        signin.map((item, index) => {
            // item.includes(login.password)?console.log('y'):console.log('n')
            let arrayOfSignin = Object.values(item)
            arrayOfSignin.includes(login.password) && arrayOfSignin.includes(login.email) ?
                handleShow('موفقیت', 'succsess') : handleShow('شکست', 'failer')

        })
    }
    //-----show & clouse modal-------
    const handleShow = (text, style) => {
        setShow(true)
        setModalText(text)
        setModalStyle(style)
    }

    //

    const handleSignin = useCallback((input) => {
        const newSignin = [...signin, input];
        setSignin(newSignin);
    });
    //
    const handleClose = () => {
        setShow(false)
        // window.location.reload(false);
    };
    useEffect(() => {
        checkUser()
    }, [login])
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
                <Signin parentCallback={handleSignin} />
            </TabsContent>
            <TabsContent tabId='1' activeTab={selectedTAb}>
                <Login parentCallback={handleLogin} />

            </TabsContent>
            <Modals
                handleShow={() => handleShow()}
                handleClose={() => handleClose()}
                show={show}
                massages={modalText}
                className={modalStyle}
            />
        </div>
    );
};

export default Tabs;