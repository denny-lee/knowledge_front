import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import HomePage from './component/HomePage';
import SnippetSearch from './component/SnippetSearch';
import SnippetAdd from './component/SnippetAdd';
import 'antd/dist/antd.css';
import './index.less';

class Index extends Component {
  render() {
    return (<div>
      {this.props.children}
    </div>)
  }
}

ReactDOM.render(
	<Index>
	  	<Router history={hashHistory}>
	        <Route path="/" component={HomePage}>
		  		<IndexRoute component={SnippetSearch} />
		        <Route path="search-snippet" component={SnippetSearch} />
		        <Route path="add-snippet" component={SnippetAdd} />
		    </Route>
	    </Router>
	</Index>,
  	document.getElementById('root')
);