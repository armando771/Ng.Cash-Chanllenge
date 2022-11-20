import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext';

export default function Header() {

    const { user } = useContext(AppContext);

    const { balance, username } = user;

  return (
    <div style={{ width: '100%', display: 'flex', margin: '0px 0px 5px 0px', background: 'white', position: 'fixed', top: '0%' }}>
        <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', paddingLeft: '10px' }} >
            <p>Olá { username} </p>
            <p>Logo</p>
        </div>
        <div style={{ display: 'flex', width: '45%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <p style={{ margin: '5px' }} >OLHO</p>
            <p style={{ margin: '5px' }} >Seu Saldo - R$ { balance }</p>
            <p style={{ margin: '5px' }} >Slider</p>
        </div>
    </div>
  )
}
