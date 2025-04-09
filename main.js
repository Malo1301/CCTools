if (linuxFont === undefined) var linuxFont = {};
Game.registerMod("linuxFont",{
	init:function(){
		linuxFont.version = "1.0";

		window.GetModPath = (modName) => {
			let mod = App.mods[modName];
			let pos = mod.dir.lastIndexOf('\\');
			if(pos == -1) return '../mods/' + (mod.local ? 'local' : 'workshop') + '/' + mod.path;
			else return '../mods/' + mod.dir.substring(pos + 1);
		};
		
		linuxFont.path = window.GetModPath('linuxFont');

		var style = document.createElement("style");
		style.innerText =`
		
		@font-face {
			font-family:'Tahoma';
			font-weight:normal;
			src:url(`+linuxFont.path+`/Tahoma.ttf) format('truetype');
		}

		@font-face {
			font-family:'Tahoma';
			font-weight:bold;
			src:url(`+linuxFont.path+`/TahomaBold.ttf) format('truetype');
		}

		@font-face {
			font-family:'Georgia';
			font-weight:normal;
			src:url(`+linuxFont.path+`/Georgia.ttf) format('truetype');
		}

		@font-face {
			font-family:'Georgia';
			font-weight:bold;
			src:url(`+linuxFont.path+`/GeorgiaBold.ttf) format('truetype');
		}

		@font-face {
			font-family:'Arial';
			font-style:normal;
			font-weight:normal;
			src:url(`+linuxFont.path+`/Arial.ttf) format('truetype');
		}

		@font-face {
			font-family:'Courier Prime';
			font-style:normal;
			font-weight:normal;
			src:url(`+linuxFont.path+`/CourierPrime.ttf) format('truetype');
		}

		@font-face {
			font-family:'Comic Neue';
			font-style:normal;
			font-weight:normal;
			src:url(`+linuxFont.path+`/ComicNeue.ttf) format('truetype');
		}

		body,#ascendTooltip {
			font-family:'Tahoma';
		}

		.framed q, .framed q:before, .framed q:after, #ascendNumber, #prompt h3, .prompt h3, .fancyText {
			font-family:'Georgia';
		}

		.tag {
			font-family:'Arial';
		}

		.close {
			font-family:'Comic Neue';
		}

		.monospace {
			font-family:'Courier Prime'
		}

		.costDetails {
			font-size:65% !important;
		}

		small {
			font-size:80% !important;
		}

		`;

		document.head.appendChild(style);

		Game.tickerTooNarrow=1000;

	}
});
