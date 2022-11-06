import './App.css';
import {Routes, Route} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Main from "./Components/Main/Main";
import {Spin} from "antd";
import NftPictures from "./Components/Pages/NftPictures/NftPictures";
import NftItemsInfo from "./Components/Pages/NftItemPicture/NftItemsInfo";
import {ntfPictureAll} from "./Redux/Slice/Nft_pictureSlice";





function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ntfPictureAll())
    }, []);


    const status = useSelector((state) => state.ntfPicture.status)

    return (
        <>

            {status === 'loading'
                ? <div className="loading">
                    <Spin tip="Loading..."/>
                </div>
                :
                <div>

                    <Main/>
                    <Routes>
                        <Route path="/" element={<NftPictures/>}/>
                        <Route path="/nft/:id" element={<NftItemsInfo/>}/>
                    </Routes>


                </div>
            }
        </>



    );


}

export default App;
