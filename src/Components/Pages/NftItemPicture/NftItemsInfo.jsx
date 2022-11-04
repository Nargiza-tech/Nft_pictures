import React, {useEffect, useState} from 'react'
import styles from './NftItem.module.css'
import {useSelector} from "react-redux";
import notPhoto from '../../../assets/img/No_image_available.png';
import {Spin} from "antd";

const NftItemsInfo = () => {


    const card = useSelector((state) => state.ntfPicture.picture);

    return (

        <div className={styles.container}>
            <div className="card mb-3" style={{maxWidth: "1050px"}}>
                <div className="row g-10">
                    <div className="col-md-6">
                        {card ? (
                            <img src={card.image_url} alt="image" className={styles.imgInfo} />
                        ) : (
                            <div className={styles.loading__img}>
                                <Spin tip="Loading..." />
                            </div>)
                        }

                    </div>
                    <div className="col-md-5" style={{paddingTop: "50px"}}>
                        <div className="card-body">
                            {card ? <h5 className="card-title">{card.name}</h5> : <h5>Unknown</h5>}

                            {
                                card.description ? <p className="card-text">{card.description}</p> :
                                    <p className="card-text">So, you want to create your NFT. But do you know exactly
                                        what it is? In fact, these are the nearest cryptocurrencies, which are something
                                        unique and collectible, a phenomenon that cannot be reproduced.

                                        A simple NFT analogy is a Pokémon card. Everyone can print it and maybe even
                                        make it almost identical to the original, but for collectors it will never
                                        be.</p>
                            }

                            <p className="card-text">Created date:<small style={{marginLeft: "10px"}}
                                                                         className="text-muted">{card.asset_contract.created_date}}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default NftItemsInfo;