import React, { useContext, useState, forwardRef, ImgHTMLAttributes } from 'react'
import { AppContext } from '../../context/AppContext';

import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type Props = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  otherProp?: any;
}


const Header = () => {

    const navigate = useNavigate();
    const [isView, setIsView] = useState(true)

    const { user } = useContext(AppContext);

    const { balance, username } = user;

    const logOut = () => {
      localStorage.clear()
      navigate("/")
    }

  return (
    <div style={{ width: '100%', display: 'flex', margin: '0px 0px 5px 0px', background: 'white', position: 'fixed', top: '0%' }}>
        <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', paddingLeft: '10px' }} >
            <Typography variant="h5" style={{ fontFamily: 'monospace' }} >Olá { username }</Typography>
            <Typography variant="h4" style={{ fontFamily: 'monospace' }} >NG.PAYments</Typography>
        </div>
        <div style={{ display: 'flex', width: '45%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button type="button" style={{ margin: '5px', textDecoration: 'none', border: 'none' }} onClick={() => setIsView(!isView)} >
            {
              isView === true ?
              <VisibilityIcon color='action' />
              :
             <VisibilityOffIcon color='action' />
            }
            </Button>
            <p style={{ margin: '5px' }} >Seu Saldo - R$ { 
            isView === true 
            ? balance
            : '----' 
            }</p>
            <Button color='warning' type="button" onClick={() => logOut()}  style={{ margin: '5px' }} >Sair</Button>
        </div>
    </div>
  )
}


export default Header
