import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

import AppBar from 'material-ui/lib/app-bar'

const cx = classNames.bind(styles);

class Navigation extends Component {

  render() {
    return (
		<AppBar title="StreamAround">
			<nav className={cx('navigation')} role="navigation">
				<Link to="/" className={cx('item')} activeClassName={cx('active')}>Home</Link>
				<Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
			</nav>
		</AppBar>
    );
  }

}

export default Navigation;