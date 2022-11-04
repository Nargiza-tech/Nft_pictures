import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './NftPictures.module.css'
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import notPhoto from '../../../assets/img/No_image_available.svg.png';
import {ntfPicture1} from "../../../Redux/Slice/Nft_pictureSlice";


const NftPictures = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    let ntfPicture = useSelector((state) => state.ntfPicture.pictures);


    const clickDesc = (id, token_id, contract_address) => {
        dispatch(ntfPicture1({id, token_id, contract_address, navigate}))
    }


    return (
        <div className={styles.container}>


            {
                ntfPicture.map((item) => {
                    return <div className={styles.card} key={item.id}>
                        {
                            item.image_url ? (<img src={item.image_url} alt=""/>) : (<img src={notPhoto} alt=""/>)
                        }
                        <h4 className={styles.title}>
                            Name: <span className="sub_title">{item.name ? item.name : 'Unknown'}</span>
                        </h4>

                        <Link to={`/nft:/${item.id}`}>
                            <button className={styles.btn}
                                    onClick={() => clickDesc(item.id, item.token_id, item.asset_contract.address)}>Подробнее
                            </button>

                        </Link>


                    </div>


                })
            }


        </div>
    );
};

export default NftPictures;