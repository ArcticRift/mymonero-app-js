// Copyright (c) 2014-2017, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const hexColorStrings = 
[
	"#00C6FF",
	"#330000",
	"#339900",
	"#993300",
	"#009933",
	"#003399",
	"#000033",
	"#000099"
]
//
document.__haveStylesBeenInjected_walletColorPicker = false
const cssRules =
[
	// set bg clr on .walletIcon and .walletIcon > span
	`.walletIcon {
	  width: 48px;
	  height: 48px;
	  border-radius: 6px;
	  position: relative;
	}`,
	`.walletIcon:before {
	  content: " ";
	  width: 48px;
	  height: 10px;
	  display: block;
	  background: rgba(0, 0, 0, 0.2);
	  border-radius: 6px 6px 0 0;
	  box-shadow: inset 0 -1px 1px 0 rgba(16, 14, 67, 0.2), 0 1px 0 0 rgba(255, 255, 255, 0.1);
	}`,
	`.walletIcon:after {
	  content: " ";
	  width: 38px;
	  height: 33px;
	  margin: auto;
	  display: block;
	  border-radius: 0 0 3px 3px;
	  box-shadow: inset 0 -2px 4px 0 rgba(255, 255, 255, 0.4), 0 0 4px 0 rgba(255, 255, 255, 0.4);
	}`,
	`.walletIcon span {
	  width: 38px;
	  height: 6px;
	  margin: auto;
	  border-radius: 3px 3px 0 0;
	  display: block;
	  margin-top: -6px;
	}`,
	`.walletIcon span:before {
	  content: " ";
	  width: 100%;
	  height: 100%;
	  display: block;
	  border-radius: 3px 3px 0 0;
	  background: rgba(255, 255, 255, 0.2);
	  box-shadow: inset 0 -1px 1px 0 rgba(16, 14, 67, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
	}`
]
function __injectStyles_ifNecessary()
{
	if (document.__haveStylesBeenInjected_walletColorPicker === false) {
		const reversed_cssRules = cssRules.reverse()
		reversed_cssRules.forEach(
			function(cssRuleString, i)
			{
				document.styleSheets[0].insertRule(cssRuleString, 0)
			}
		)
	}
}
//
function New_1OfN_WalletColorPickerInputView(context)
{
	__injectStyles_ifNecessary()
	//
	const View = require('../Views/View.web')
	const view = new View({ tag: "ul" }, context)
	const ul = view.layer
	hexColorStrings.forEach(
		function(hexColorString, i)
		{
			const li = document.createElement("li")
			{
				const div = document.createElement("div")
				div.style.background = hexColorString
				div.className = "walletIcon"
				li.appendChild(div)
				//
				const span = document.createElement("span")
				span.style.background = hexColorString
				div.appendChild(span)
			}
			{
				const input = document.createElement("input")
				input.type = "radio"
				input.name = view.View_UUID()
				input.id = input.name + " " + hexColorString
				li.appendChild(input)
			}
			ul.appendChild(li)
		}
	)
	return view
}
exports.New_1OfN_WalletColorPickerInputView = New_1OfN_WalletColorPickerInputView

