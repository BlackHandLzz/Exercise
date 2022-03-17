import React, { Component, lazy, Suspense } from "react";
//import Home from './views/Home';
import { btnStyle } from './config';
import { BtnStyleContext, LoginStatusContext } from './context';
//import MyInput from './components/MyInput';
//import InputHoc from "./components/InputHoc";
import MyInput from "./views/test";

//const MyIndex = lazy(() => import('./views/index'));
//const MyInputHoc = InputHoc(MyInput);

class App extends Component {

	constructor() {
		super();
		this.myInputRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.myInputRef);
	}

	inputOperate() {
		const oInput = this.myInputRef.current;
		oInput.value = '';
		oInput.focus();
	}

	// async importModule() {
	// 	let { plus } = await import('./13.2.module');
	// 	console.log(plus(1, 3))
	// }

	// state = {
	// 	style: btnStyle.success,
	// 	loginStatus: false,
	// 	a: 1,
	// 	b: 2,
	// 	c: 3
	// }

	// doClick(e) {
	// 	console.log(e.target.textContent)
	// }

	// login() {
	// 	this.setState({
	// 		loginStatus: !this.state.loginStatus
	// 	})
	// }

	render() {



		return (
			<div className="App">
				{/* <button onClick={this.importModule.bind(this)}>点击</button> */}

				{ /* context的供应 */}
				{/* <BtnStyleContext.Provider value={{
					style: this.state.style,
					doClick: this.doClick
				}}>
					<LoginStatusContext.Provider value={{
						status: this.state.loginStatus,
						login: this.login.bind(this)
					}}>
						<Home />
					</LoginStatusContext.Provider>
				</BtnStyleContext.Provider> */}

				{ /*组件懒加载*/}
				{/* <Suspense fallback={<div>Loading...</div>}>
					<MyIndex />
				</Suspense> */}

				{ /* 高阶组件 */}
				{/* <MyInputHoc  {...this.state} /> */}
				<MyInput ref={this.myInputRef} placeholder={'请填写'} />
				<button onClick={this.inputOperate.bind(this)}>点击</button>
			</div>
		);
	}
}

export default App;
