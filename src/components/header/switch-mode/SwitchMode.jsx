import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../../app/features/mode-theme/modeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons';
import "./_switch-mode.scss";

const SwitchMode = () => {
  const modeTheme = useSelector((state) => state.modeslice.mode);
  const dispatch = useDispatch();
  return (
    <button className='btn-mode-theme' onClick={() => dispatch(changeMode())}>{modeTheme ? <FontAwesomeIcon className='icon-switch-mode' icon={faSun} /> : <FontAwesomeIcon className='icon-switch-mode' icon={faMoon} />}</button>
  )
}

export default SwitchMode