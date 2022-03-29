import React, { Component } from "react";
import BTVN_Banner from "./BTVN_Banner";
import BTVN_Footer from "./BTVN_Footer";
import BTVN_Header from "./BTVN_Header";
import BTVN_Item from "./BTVN_Item";

export default class BTVN_Body extends Component {
	render() {
		return (
			<section className="pt-4">
				<div className="container px-lg-5">
					<BTVN_Header />
					<BTVN_Banner />
					<BTVN_Item />
					<BTVN_Item />
					<BTVN_Item />
					<BTVN_Item />
					<BTVN_Item />
					<BTVN_Item />
					<BTVN_Footer />
				</div>
			</section>
		);
	}
}
