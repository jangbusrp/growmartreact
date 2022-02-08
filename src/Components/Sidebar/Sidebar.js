import { React } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

import { useWindowSize } from '../../Hooks/useWindowSize/useWindowSize';
import {
  AppsOutlined,
  StorefrontOutlined,
  CameraAlt,
  LocalMall,
  Settings,
  PeopleAlt,
} from '@material-ui/icons';

import classes from './Sidebar.module.scss';

const Sidebar = () => {
  let location = useLocation();
  let history = useHistory();
  const pathName = location.pathname;

  const [width] = useWindowSize();

  return (
    width > 900 && (
      <div className={classes.Sidebar}>
        <div className={classes.TopContainer}>
          <div
            className={classes.Logo}
            onClick={() => history.push('/dashboard')}
          >
            <StorefrontOutlined />
            <span>GrowMart</span>
          </div>
          <div className={classes.MenuContainer}>
            <ul>
              <p>GENERAL</p>
              <Link
                className={
                  pathName === '/' || pathName === '/dashboard'
                    ? classes.Active
                    : ''
                }
                to='/dashboard'
                id='dashboard'
              >
                <span>
                  <AppsOutlined />
                </span>
                Dashboard
              </Link>
            </ul>
            <ul>
              <p>USERS</p>
              <Link
                className={pathName === '/authusers' ? classes.Active : ''}
                to='/authusers'
              >
                <span>
                  <PeopleAlt />
                </span>
                Users
              </Link>
            </ul>

            <ul>
              <p>PRODUCTS</p>
              <Link
                className={pathName === '/createProduct' ? classes.Active : ''}
                to='/createProduct'
              >
                <span>
                  <CameraAlt />
                </span>
                Products
              </Link>
            </ul>
            <ul>
              <p>Admin</p>
              <Link
                className={pathName === '/usersproduct' ? classes.Active : ''}
                to='/usersproduct'
              >
                <span>
                  <LocalMall />
                </span>
                Admin
              </Link>
            </ul>
            <ul>
              <p>Settings</p>
              <Link
                className={pathName === '/settings' ? classes.Active : ''}
                to='/settings'
              >
                <span>
                  <Settings />
                </span>
                Settings
              </Link>
              {/* <Link
              className={pathName === '/logout' ? classes.Active : ''}
              to='/logout'
            >
              <span>
                <ExitToApp />
              </span>
              Logout
            </Link> */}
            </ul>
          </div>
        </div>
        <div className={classes.BottomContainer}>
          <p>Jangbu Sherpa © 2022 </p>
        </div>
      </div>
    )
  );
};

export default Sidebar;
