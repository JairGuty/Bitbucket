import './gistsApp.css';
import { GetGitApi } from './components/home/GetGitApi';
import {Header} from './components/header/Header';


export const GistsApp = () => {
  return (
    <div>
        <Header />
        <hr />
        <GetGitApi />
    </div>
  )
}
