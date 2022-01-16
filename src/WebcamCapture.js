import React, {useRef, useCallback, useState} from 'react'
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css';

function WebCamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    // const [image, setImage] = useState('');
    const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user',
    }
    
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('/preview');
    }, [webcamRef]);

    return (
        <div className='webcamCapture'>
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
                className='webcamCapture_button'
                onClick={capture}
            />
        </div>
    )
}

export default WebCamCapture

