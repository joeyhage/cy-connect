const React = require('react');

class AdminDashboard extends React.Component {

	render() {
		return (
			        <div>
            <section class="hero is-info welcome is-small">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Hello, Admin.</h1>
                        <h2 class="subtitle">I hope you are having a great day!</h2>
                    </div>
                </div>
            </section>
            <p style="padding-top:20px"></p>
            <div class="container">
                <div class="columns">
                    <div class="column is-6">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">Event Search</p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input type="text" class="input is-large" placeholder=""/>
                                        <span class="icon is-medium is-left">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <span class="icon is-medium is-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">Member Search</p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input type="text" class="input is-large" placeholder=""/>
                                        <span class="icon is-medium is-left">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <span class="icon is-medium is-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p style="padding-top:20px"></p>
            <p style="padding-top:20px"></p>
            <div class="w3-container columns">
                <div class="column is-6">
                    <div class="card events-card">
                        <header class="card-header">
                            <p class="card-header-title">Events</p>
                            <a href="#" class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </a>
                        </header>
                        <div class="card-table">
                            <div class="content">
                                <table class="table is-fullwidth is-striped">
                                    <tbody>
                                        <tr>
                                            <td width="5%">
                                                <i class="fa fa-bell-o"></i>
                                            </td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td>
                                                <a class="button is-small is-danger" href="#">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="5%">
                                                <i class="fa fa-bell-o"></i>
                                            </td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td>
                                                <a class="button is-small is-danger" href="#">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="5%">
                                                <i class="fa fa-bell-o"></i>
                                            </td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td>
                                                <a class="button is-small is-danger" href="#">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-tiles">
                    <div class="title is-vertical is-8">
                        <div class="tile is-ancestor has-text-centered">
                            <div class="tile is-parent ">
                                <article class="tile is-child box">
                                    <p class="title">439k</p>
                                    <p classNaME="subtitle">Users</p>
                                </article>
                            </div>
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child box">
                                    <p class="title">19</p>
                                    <p class="subtitle">Exceptions</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div id="myDiv"></div>
        </div>
		);
	}
}

module.exports = AdminDashboard;
