/* jQuery plugin themeswitcher
---------------------------------------------------------------------*/
$.fn.themeswitcher = function(settings){
	var options = jQuery.extend({
		loadTheme: null,
		initialText: 'Switch Theme',
		width: 150,
		height: 200,
		buttonPreText: 'Theme: ',
		closeOnSelect: true,
		buttonHeight: 14,
		cookieName: 'jquery-ui-theme',
		onOpen: function(){},
		onClose: function(){},
		onSelect: function(){}
	}, settings);

	//markup 
	var button = $('<a href="#" class="jquery-ui-themeswitcher-trigger"><span class="jquery-ui-themeswitcher-icon"></span><span class="jquery-ui-themeswitcher-title">'+ options.initialText +'</span></a>');
	var switcherpane = $('<div class="jquery-ui-themeswitcher"><div id="themeGallery">	<ul>		<li><a href="?tr=&ffDefault=Trebuchet+MS,+Tahoma,+Verdana,+Arial,+sans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=4px&bgColorHeader=f6a828&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=35&borderColorHeader=e78f08&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=eeeeee&bgTextureContent=03_highlight_soft.png&bgImgOpacityContent=100&borderColorContent=dddddd&fcContent=333333&iconColorContent=222222&bgColorDefault=f6f6f6&bgTextureDefault=02_glass.png&bgImgOpacityDefault=100&borderColorDefault=cccccc&fcDefault=1c94c4&iconColorDefault=ef8c08&bgColorHover=fdf5ce&bgTextureHover=02_glass.png&bgImgOpacityHover=100&borderColorHover=fbcb09&fcHover=c77405&iconColorHover=ef8c08&bgColorActive=ffffff&bgTextureActive=02_glass.png&bgImgOpacityActive=65&borderColorActive=fbd850&fcActive=eb8f00&iconColorActive=ef8c08&bgColorHighlight=ffe45c&bgTextureHighlight=03_highlight_soft.png&bgImgOpacityHighlight=75&borderColorHighlight=fed22f&fcHighlight=363636&iconColorHighlight=228ef1&bgColorError=b81900&bgTextureError=08_diagonals_thick.png&bgImgOpacityError=18&borderColorError=cd0a0a&fcError=ffffff&iconColorError=ffd27a&bgColorOverlay=666666&bgTextureOverlay=08_diagonals_thick.png&bgImgOpacityOverlay=20&opacityOverlay=50&bgColorShadow=000000&bgTextureShadow=01_flat.png&bgImgOpacityShadow=10&opacityShadow=20&thicknessShadow=5px&offsetTopShadow=-5px&offsetLeftShadow=-5px&cornerRadiusShadow=5px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_ui_light.png" alt="UI Lightness" title="UI Lightness" />			<span class="themeName">UI lightness</span>		</a></li>				<li><a href="?tr=&ffDefault=Segoe+UI%2C+Arial%2C+sans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=6px&bgColorHeader=333333&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=25&borderColorHeader=333333&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=000000&bgTextureContent=05_inset_soft.png&bgImgOpacityContent=25&borderColorContent=666666&fcContent=ffffff&iconColorContent=cccccc&bgColorDefault=555555&bgTextureDefault=02_glass.png&bgImgOpacityDefault=20&borderColorDefault=666666&fcDefault=eeeeee&iconColorDefault=cccccc&bgColorHover=0078a3&bgTextureHover=02_glass.png&bgImgOpacityHover=40&borderColorHover=59b4d4&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=f58400&bgTextureActive=05_inset_soft.png&bgImgOpacityActive=30&borderColorActive=ffaf0f&fcActive=ffffff&iconColorActive=222222&bgColorHighlight=eeeeee&bgTextureHighlight=03_highlight_soft.png&bgImgOpacityHighlight=80&borderColorHighlight=cccccc&fcHighlight=2e7db2&iconColorHighlight=4b8e0b&bgColorError=ffc73d&bgTextureError=02_glass.png&bgImgOpacityError=40&borderColorError=ffb73d&fcError=111111&iconColorError=a83300&bgColorOverlay=5c5c5c&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=50&opacityOverlay=80&bgColorShadow=cccccc&bgTextureShadow=01_flat.png&bgImgOpacityShadow=30&opacityShadow=60&thicknessShadow=7px&offsetTopShadow=-7px&offsetLeftShadow=-7px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_ui_dark.png" alt="UI Darkness" title="UI Darkness" />			<span class="themeName">UI darkness</span>		</a></li>			<li><a href="?tr=&ffDefault=Verdana,Arial,sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=4px&bgColorHeader=cccccc&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=75&borderColorHeader=aaaaaa&fcHeader=222222&iconColorHeader=222222&bgColorContent=ffffff&bgTextureContent=01_flat.png&bgImgOpacityContent=75&borderColorContent=aaaaaa&fcContent=222222&iconColorContent=222222&bgColorDefault=e6e6e6&bgTextureDefault=02_glass.png&bgImgOpacityDefault=75&borderColorDefault=d3d3d3&fcDefault=555555&iconColorDefault=888888&bgColorHover=dadada&bgTextureHover=02_glass.png&bgImgOpacityHover=75&borderColorHover=999999&fcHover=212121&iconColorHover=454545&bgColorActive=ffffff&bgTextureActive=02_glass.png&bgImgOpacityActive=65&borderColorActive=aaaaaa&fcActive=212121&iconColorActive=454545&bgColorHighlight=fbf9ee&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=fcefa1&fcHighlight=363636&iconColorHighlight=2e83ff&bgColorError=fef1ec&bgTextureError=02_glass.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_smoothness.png" alt="Smoothness" title="Smoothness" />			<span class="themeName">Smoothness</span>		</a></li>					<li><a href="?tr=&ffDefault=Verdana%2CArial%2Csans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=5px&bgColorHeader=2191c0&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=75&borderColorHeader=4297d7&fcHeader=eaf5f7&iconColorHeader=d8e7f3&bgColorContent=fcfdfd&bgTextureContent=06_inset_hard.png&bgImgOpacityContent=100&borderColorContent=a6c9e2&fcContent=222222&iconColorContent=0078ae&bgColorDefault=0078ae&bgTextureDefault=02_glass.png&bgImgOpacityDefault=45&borderColorDefault=77d5f7&fcDefault=ffffff&iconColorDefault=e0fdff&bgColorHover=79c9ec&bgTextureHover=02_glass.png&bgImgOpacityHover=75&borderColorHover=448dae&fcHover=026890&iconColorHover=056b93&bgColorActive=6eac2c&bgTextureActive=12_gloss_wave.png&bgImgOpacityActive=50&borderColorActive=acdd4a&fcActive=ffffff&iconColorActive=f5e175&bgColorHighlight=f8da4e&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=fcd113&fcHighlight=915608&iconColorHighlight=f7a50d&bgColorError=e14f1c&bgTextureError=12_gloss_wave.png&bgImgOpacityError=45&borderColorError=cd0a0a&fcError=ffffff&iconColorError=fcd113&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=75&opacityOverlay=30&bgColorShadow=999999&bgTextureShadow=01_flat.png&bgImgOpacityShadow=55&opacityShadow=45&thicknessShadow=0px&offsetTopShadow=5px&offsetLeftShadow=5px&cornerRadiusShadow=5px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_start_menu.png" alt="Start" title="Start" />			<span class="themeName">Start</span>		</a></li>		<li><a href="?tr=&ffDefault=Lucida+Grande,+Lucida+Sans,+Arial,+sans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=5px&bgColorHeader=5c9ccc&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=55&borderColorHeader=4297d7&fcHeader=ffffff&iconColorHeader=d8e7f3&bgColorContent=fcfdfd&bgTextureContent=06_inset_hard.png&bgImgOpacityContent=100&borderColorContent=a6c9e2&fcContent=222222&iconColorContent=469bdd&bgColorDefault=dfeffc&bgTextureDefault=02_glass.png&bgImgOpacityDefault=85&borderColorDefault=c5dbec&fcDefault=2e6e9e&iconColorDefault=6da8d5&bgColorHover=d0e5f5&bgTextureHover=02_glass.png&bgImgOpacityHover=75&borderColorHover=79b7e7&fcHover=1d5987&iconColorHover=217bc0&bgColorActive=f5f8f9&bgTextureActive=06_inset_hard.png&bgImgOpacityActive=100&borderColorActive=79b7e7&fcActive=e17009&iconColorActive=f9bd01&bgColorHighlight=fbec88&bgTextureHighlight=01_flat.png&bgImgOpacityHighlight=55&borderColorHighlight=fad42e&fcHighlight=363636&iconColorHighlight=2e83ff&bgColorError=fef1ec&bgTextureError=02_glass.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_windoze.png" alt="Windoze" title="Windoze" />			<span class="themeName">Redmond</span>		</a></li>		<li><a href="?tr=&ffDefault=Lucida+Grande%2C+Lucida+Sans%2C+Arial%2C+sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=3px&bgColorHeader=e7eef3&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=100&borderColorHeader=b2c7d7&fcHeader=222222&iconColorHeader=72a7cf&bgColorContent=f9f9f9&bgTextureContent=04_highlight_hard.png&bgImgOpacityContent=100&borderColorContent=dddddd&fcContent=362b36&iconColorContent=222222&bgColorDefault=e6e6e6&bgTextureDefault=02_glass.png&bgImgOpacityDefault=80&borderColorDefault=cccccc&fcDefault=444444&iconColorDefault=888888&bgColorHover=f0f0f0&bgTextureHover=02_glass.png&bgImgOpacityHover=100&borderColorHover=b2c7d7&fcHover=0b5b98&iconColorHover=2694e8&bgColorActive=99c2ff&bgTextureActive=02_glass.png&bgImgOpacityActive=50&borderColorActive=2694e8&fcActive=000000&iconColorActive=ffffff&bgColorHighlight=fbf5d0&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=f9dd34&fcHighlight=363636&iconColorHighlight=2e83ff&bgColorError=fef1ec&bgTextureError=02_glass.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=444444&bgTextureOverlay=08_diagonals_thick.png&bgImgOpacityOverlay=15&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=07_diagonals_small.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=0px&offsetTopShadow=4px&offsetLeftShadow=4px&cornerRadiusShadow=4px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_cupertino.png" alt="Cupertino" title="Cupertino" />			<span class="themeName">Cupertino</span>				</a></li>		<li><a href="?tr=&ffDefault=segoe+ui,+Arial,+sans-serif&fwDefault=bold&fsDefault=1.2em&cornerRadius=4px&bgColorHeader=d3e9a0&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=35&borderColorHeader=a7cb80&fcHeader=222222&iconColorHeader=222222&bgColorContent=ffffff&bgTextureContent=01_flat.png&bgImgOpacityContent=75&borderColorContent=aaaaaa&fcContent=222222&iconColorContent=327E04&bgColorDefault=327E04&bgTextureDefault=03_highlight_soft.png&bgImgOpacityDefault=25&borderColorDefault=327E04&fcDefault=ffffff&iconColorDefault=eeeeee&bgColorHover=5A9D1A&bgTextureHover=03_highlight_soft.png&bgImgOpacityHover=25&borderColorHover=327E04&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=EcEdE3&bgTextureActive=07_diagonals_small.png&bgImgOpacityActive=85&borderColorActive=c4c5c3&fcActive=403D38&iconColorActive=8DC262&bgColorHighlight=fcf0ba&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=e8e1b5&fcHighlight=363636&iconColorHighlight=8DC262&bgColorError=ffedad&bgTextureError=03_highlight_soft.png&bgImgOpacityError=95&borderColorError=e3a345&fcError=cd5c0a&iconColorError=cd0a0a&bgColorOverlay=b0ab9c&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=50&opacityOverlay=30&bgColorShadow=f5f5f5&bgTextureShadow=01_flat.png&bgImgOpacityShadow=35&opacityShadow=50&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_south_street.png" alt="South St" title="South St" />			<span class="themeName">South Street</span>				</a></li>		<li><a href="?tr=&ffDefault=Arial,sans-serif&fwDefault=bold&fsDefault=1.3em&cornerRadius=.4em&bgColorHeader=cc0000&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=15&borderColorHeader=cc0000&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=ffffff&bgTextureContent=01_flat.png&bgImgOpacityContent=75&borderColorContent=eeeeee&fcContent=333333&iconColorContent=cc0000&bgColorDefault=eeeeee&bgTextureDefault=04_highlight_hard.png&bgImgOpacityDefault=100&borderColorDefault=d8dcdf&fcDefault=004276&iconColorDefault=cc0000&bgColorHover=f6f6f6&bgTextureHover=04_highlight_hard.png&bgImgOpacityHover=100&borderColorHover=cdd5da&fcHover=111111&iconColorHover=cc0000&bgColorActive=ffffff&bgTextureActive=01_flat.png&bgImgOpacityActive=65&borderColorActive=eeeeee&fcActive=cc0000&iconColorActive=cc0000&bgColorHighlight=fbf8ee&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=fcd3a1&fcHighlight=555555&iconColorHighlight=004276&bgColorError=eee7e7&bgTextureError=08_diagonals_thick.png&bgImgOpacityError=55&borderColorError=cc0000&fcError=cc0000&iconColorError=cc0000&bgColorOverlay=a6a6a6&bgTextureOverlay=09_dots_small.png&bgImgOpacityOverlay=65&opacityOverlay=40&bgColorShadow=333333&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=10&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_blitzer.png" alt="Blitzer" title="Blitzer" />			<span class="themeName">Blitzer</span>		</a></li>			<li><a href="?tr=ffDefault=Helvetica,Arial,sans-serif&fwDefault=normal&fsDefault=1.2em&cornerRadius=6px&bgColorHeader=cb842e&bgTextureHeader=02_glass.png&bgImgOpacityHeader=25&borderColorHeader=d49768&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=f4f0ec&bgTextureContent=05_inset_soft.png&bgImgOpacityContent=100&borderColorContent=e0cfc2&fcContent=1e1b1d&iconColorContent=c47a23&bgColorDefault=ede4d4&bgTextureDefault=02_glass.png&bgImgOpacityDefault=70&borderColorDefault=cdc3b7&fcDefault=3f3731&iconColorDefault=f08000&bgColorHover=f5f0e5&bgTextureHover=02_glass.png&bgImgOpacityHover=100&borderColorHover=f5ad66&fcHover=a46313&iconColorHover=f08000&bgColorActive=f4f0ec&bgTextureActive=04_highlight_hard.png&bgImgOpacityActive=100&borderColorActive=e0cfc2&fcActive=b85700&iconColorActive=f35f07&bgColorHighlight=f5f5b5&bgTextureHighlight=04_highlight_hard.png&bgImgOpacityHighlight=75&borderColorHighlight=d9bb73&fcHighlight=060200&iconColorHighlight=cb672b&bgColorError=fee4bd&bgTextureError=04_highlight_hard.png&bgImgOpacityError=65&borderColorError=f8893f&fcError=592003&iconColorError=ff7519&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=75&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=75&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_humanity.png" alt="Humanity" title="Humanity" />			<span class="themeName">Humanity</span>		</a></li>			<li><a href="?tr=&ffDefault=Gill+Sans,Arial,sans-serif&fwDefault=bold&fsDefault=1.2em&cornerRadius=4px&bgColorHeader=35414f&bgTextureHeader=09_dots_small.png&bgImgOpacityHeader=35&borderColorHeader=2c4359&fcHeader=e1e463&iconColorHeader=e1e463&bgColorContent=ffffff&bgTextureContent=01_flat.png&bgImgOpacityContent=75&borderColorContent=aaaaaa&fcContent=2c4359&iconColorContent=c02669&bgColorDefault=93c3cd&bgTextureDefault=07_diagonals_small.png&bgImgOpacityDefault=50&borderColorDefault=93c3cd&fcDefault=333333&iconColorDefault=ffffff&bgColorHover=ccd232&bgTextureHover=07_diagonals_small.png&bgImgOpacityHover=75&borderColorHover=999999&fcHover=212121&iconColorHover=454545&bgColorActive=db4865&bgTextureActive=07_diagonals_small.png&bgImgOpacityActive=40&borderColorActive=ff6b7f&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=ffff38&bgTextureHighlight=10_dots_medium.png&bgImgOpacityHighlight=80&borderColorHighlight=b4d100&fcHighlight=363636&iconColorHighlight=88a206&bgColorError=ff3853&bgTextureError=07_diagonals_small.png&bgImgOpacityError=50&borderColorError=ff6b7f&fcError=ffffff&iconColorError=ffeb33&bgColorOverlay=f7f7ba&bgTextureOverlay=11_white_lines.png&bgImgOpacityOverlay=85&opacityOverlay=80&bgColorShadow=ba9217&bgTextureShadow=01_flat.png&bgImgOpacityShadow=75&opacityShadow=20&thicknessShadow=10px&offsetTopShadow=8px&offsetLeftShadow=8px&cornerRadiusShadow=5px">		<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_hot_sneaks.png" alt="Hot Sneaks" title="Hot Sneaks" />			<span class="themeName">Hot sneaks</span>		</a></li>			<li><a href="?tr=&ffDefault=segoe+ui,+Arial,+sans-serif&fwDefault=bold&fsDefault=1.2em&cornerRadius=3px&bgColorHeader=f9f9f9&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=100&borderColorHeader=cccccc&fcHeader=e69700&iconColorHeader=5fa5e3&bgColorContent=eeeeee&bgTextureContent=06_inset_hard.png&bgImgOpacityContent=100&borderColorContent=aaaaaa&fcContent=222222&iconColorContent=0a82eb&bgColorDefault=1484e6&bgTextureDefault=08_diagonals_thick.png&bgImgOpacityDefault=22&borderColorDefault=ffffff&fcDefault=ffffff&iconColorDefault=fcdd4a&bgColorHover=2293f7&bgTextureHover=08_diagonals_thick.png&bgImgOpacityHover=26&borderColorHover=2293f7&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=e69700&bgTextureActive=08_diagonals_thick.png&bgImgOpacityActive=20&borderColorActive=e69700&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=c5ddfc&bgTextureHighlight=07_diagonals_small.png&bgImgOpacityHighlight=25&borderColorHighlight=ffffff&fcHighlight=333333&iconColorHighlight=0b54d5&bgColorError=e69700&bgTextureError=08_diagonals_thick.png&bgImgOpacityError=20&borderColorError=e69700&fcError=ffffff&iconColorError=ffffff&bgColorOverlay=e6b900&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=e69700&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=20&thicknessShadow=0px&offsetTopShadow=6px&offsetLeftShadow=6px&cornerRadiusShadow=3px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_excite_bike.png" alt="Excite Bike" title="Excite Bike" />			<span class="themeName">Excite Bike</span>			</a></li>		<li><a href="?tr&ffDefault=Helvetica,+Arial,+sans-serif&fwDefault=normal&fsDefault=1.1&fsDefaultUnit=em&cornerRadius=5&cornerRadiusUnit=px&bgColorHeader=888888&bgTextureHeader=04_highlight_hard.png&bgImgOpacityHeader=15&borderColorHeader=404040&fcHeader=ffffff&iconColorHeader=cccccc&bgColorContent=121212&bgTextureContent=12_gloss_wave.png&bgImgOpacityContent=16&borderColorContent=404040&fcContent=eeeeee&iconColorContent=bbbbbb&bgColorDefault=adadad&bgTextureDefault=03_highlight_soft.png&bgImgOpacityDefault=35&borderColorDefault=cccccc&fcDefault=333333&iconColorDefault=666666&bgColorHover=dddddd&bgTextureHover=03_highlight_soft.png&bgImgOpacityHover=60&borderColorHover=dddddd&fcHover=000000&iconColorHover=c98000&bgColorActive=121212&bgTextureActive=05_inset_soft.png&bgImgOpacityActive=15&borderColorActive=000000&fcActive=ffffff&iconColorActive=f29a00&bgColorHighlight=555555&bgTextureHighlight=04_highlight_hard.png&bgImgOpacityHighlight=55&borderColorHighlight=404040&fcHighlight=cccccc&iconColorHighlight=aaaaaa&bgColorError=fef1ec&bgTextureError=02_glass.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_black_matte.png" alt="Vader" title="Vader" />			<span class="themeName">Vader</span>			</a></li>				<li><a href="?tr=&ffDefault=Arial,+sans-serif&fwDefault=bold&fsDefault=1.3em&cornerRadius=4px&bgColorHeader=0b3e6f&bgTextureHeader=08_diagonals_thick.png&bgImgOpacityHeader=15&borderColorHeader=0b3e6f&fcHeader=f6f6f6&iconColorHeader=98d2fb&bgColorContent=111111&bgTextureContent=12_gloss_wave.png&bgImgOpacityContent=20&borderColorContent=000000&fcContent=d9d9d9&iconColorContent=9ccdfc&bgColorDefault=333333&bgTextureDefault=09_dots_small.png&bgImgOpacityDefault=20&borderColorDefault=333333&fcDefault=ffffff&iconColorDefault=9ccdfc&bgColorHover=00498f&bgTextureHover=09_dots_small.png&bgImgOpacityHover=40&borderColorHover=222222&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=292929&bgTextureActive=01_flat.png&bgImgOpacityActive=40&borderColorActive=096ac8&fcActive=75abff&iconColorActive=00498f&bgColorHighlight=0b58a2&bgTextureHighlight=10_dots_medium.png&bgImgOpacityHighlight=30&borderColorHighlight=052f57&fcHighlight=ffffff&iconColorHighlight=ffffff&bgColorError=a32d00&bgTextureError=09_dots_small.png&bgImgOpacityError=30&borderColorError=cd0a0a&fcError=ffffff&iconColorError=ffffff&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_dot_luv.png" alt="Dot Luv" title="Dot Luv" />			<span class="themeName">Dot Luv</span>			</a></li>			<li><a href="?tr=&ffDefault=Segoe+UI,+Helvetica,+Arial,+sans-serif&fwDefault=bold&fsDefault=1.2em&cornerRadius=4px&bgColorHeader=cdc2a1&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=75&borderColorHeader=9c947c&fcHeader=222222&iconColorHeader=222222&bgColorContent=cdc2a1&bgTextureContent=05_inset_soft.png&bgImgOpacityContent=40&borderColorContent=9c947c&fcContent=000000&iconColorContent=222222&bgColorDefault=382f28&bgTextureDefault=02_glass.png&bgImgOpacityDefault=10&borderColorDefault=382f28&fcDefault=9bcc60&iconColorDefault=9bcc60&bgColorHover=44372c&bgTextureHover=02_glass.png&bgImgOpacityHover=20&borderColorHover=0f0f0f&fcHover=add978&iconColorHover=add978&bgColorActive=cdc2a1&bgTextureActive=03_highlight_soft.png&bgImgOpacityActive=40&borderColorActive=9c947c&fcActive=382f28&iconColorActive=382f28&bgColorHighlight=619226&bgTextureHighlight=03_highlight_soft.png&bgImgOpacityHighlight=20&borderColorHighlight=add978&fcHighlight=ffffff&iconColorHighlight=ffffff&bgColorError=5f391b&bgTextureError=02_glass.png&bgImgOpacityError=15&borderColorError=5f391b&fcError=ffffff&iconColorError=f1fd86&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_mint_choco.png" alt="Mint Choc" title="Mint Choc" />			<span class="themeName">Mint Choc</span>		</a></li>		<li><a href="?tr=&ffDefault=Verdana,+Arial,+sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=4px&bgColorHeader=333333&bgTextureHeader=08_diagonals_thick.png&bgImgOpacityHeader=8&borderColorHeader=a3a3a3&fcHeader=eeeeee&iconColorHeader=bbbbbb&bgColorContent=f9f9f9&bgTextureContent=04_highlight_hard.png&bgImgOpacityContent=100&borderColorContent=cccccc&fcContent=222222&iconColorContent=222222&bgColorDefault=111111&bgTextureDefault=02_glass.png&bgImgOpacityDefault=40&borderColorDefault=777777&fcDefault=e3e3e3&iconColorDefault=ededed&bgColorHover=1c1c1c&bgTextureHover=02_glass.png&bgImgOpacityHover=55&borderColorHover=000000&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=ffffff&bgTextureActive=01_flat.png&bgImgOpacityActive=65&borderColorActive=cccccc&fcActive=222222&iconColorActive=222222&bgColorHighlight=ffeb80&bgTextureHighlight=06_inset_hard.png&bgImgOpacityHighlight=55&borderColorHighlight=ffde2e&fcHighlight=363636&iconColorHighlight=4ca300&bgColorError=cd0a0a&bgTextureError=06_inset_hard.png&bgImgOpacityError=45&borderColorError=9e0505&fcError=ffffff&iconColorError=ffcf29&bgColorOverlay=aaaaaa&bgTextureOverlay=04_highlight_hard.png&bgImgOpacityOverlay=40&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=03_highlight_soft.png&bgImgOpacityShadow=50&opacityShadow=20&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_black_tie.png" alt="Black Tie" title="Black Tie" />			<span class="themeName">Black Tie</span>		</a></li>		<li><a href="?tr=&ffDefault=Segoe+UI,+Helvetica,+Arial,+sans-serif&fwDefault=bold&fsDefault=1.2em&cornerRadius=6px&bgColorHeader=9fda58&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=85&borderColorHeader=000000&fcHeader=222222&iconColorHeader=1f1f1f&bgColorContent=000000&bgTextureContent=12_gloss_wave.png&bgImgOpacityContent=55&borderColorContent=4a4a4a&fcContent=ffffff&iconColorContent=9fda58&bgColorDefault=0a0a0a&bgTextureDefault=02_glass.png&bgImgOpacityDefault=40&borderColorDefault=1b1613&fcDefault=b8ec79&iconColorDefault=b8ec79&bgColorHover=000000&bgTextureHover=02_glass.png&bgImgOpacityHover=60&borderColorHover=000000&fcHover=96f226&iconColorHover=b8ec79&bgColorActive=4c4c4c&bgTextureActive=01_flat.png&bgImgOpacityActive=0&borderColorActive=696969&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=f1fbe5&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=8cce3b&fcHighlight=030303&iconColorHighlight=000000&bgColorError=f6ecd5&bgTextureError=12_gloss_wave.png&bgImgOpacityError=95&borderColorError=f1ac88&fcError=74736d&iconColorError=cd0a0a&bgColorOverlay=262626&bgTextureOverlay=07_diagonals_small.png&bgImgOpacityOverlay=50&opacityOverlay=30&bgColorShadow=303030&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=50&thicknessShadow=6px&offsetTopShadow=-6px&offsetLeftShadow=-6px&cornerRadiusShadow=12px">			<img src="http://ui.jquery.com//applications/themeroller/images/themeGallery/theme_30_trontastic.png" alt="Trontastic" title="Trontastic" />			<span class="themeName">Trontastic</span>			</a></li>		</ul></div></div>').find('div').removeAttr('id');
	
	//button events
	button.click(
		function(){
			if(switcherpane.is(':visible')){ switcherpane.spHide(); }
			else{ switcherpane.spShow(); }
					return false;
		}
	);
	
	//menu events (mouseout didn't work...)
	switcherpane.hover(
		function(){},
		function(){if(switcherpane.is(':visible')){$(this).spHide();}}
	);

	//show/hide panel functions
	$.fn.spShow = function(){ $(this).css({top: button.offset().top + options.buttonHeight + 6, left: button.offset().left}).slideDown(50); button.css(button_active); options.onOpen(); }
	$.fn.spHide = function(){ $(this).slideUp(50, function(){options.onClose();}); button.css(button_default); }
	
		
	/* Theme Loading
	---------------------------------------------------------------------*/
	switcherpane.find('a').click(function(){
		updateCSS( $(this).attr('href') );
		var themeName = $(this).find('span').text();
		button.find('.jquery-ui-themeswitcher-title').text( options.buttonPreText + themeName );
		$.cookie(options.cookieName, themeName);
		options.onSelect();
		if(options.closeOnSelect && switcherpane.is(':visible')){ switcherpane.spHide(); }
		return false;
	});
	
	//function to append a new theme stylesheet with the new style changes
	function updateCSS(locStr){
		var cssLink = $('<link href="http://ui.jquery.com//applications/themeroller/css/parseTheme.css.php'+ locStr +'" type="text/css" rel="Stylesheet" />');
		if( $('link[href~=ui.theme.css], link[href~=parseTheme.css.php]').size() > 0 ){ $("link[href~=parseTheme.css.php]:last, link[href~=ui.theme.css]:last").eq(0).after(cssLink); }
		else{ $('head').append(cssLink); }		
	}	
	
	/* Inline CSS 
	---------------------------------------------------------------------*/
	var button_default = {
		fontFamily: 'Trebuchet MS, Verdana, sans-serif',
		fontSize: '11px',
		color: '#666',
		background: '#eee url(http://ui.jquery.com//applications/themeroller/themeswitchertool/images/buttonbg.png) 50% 50% repeat-x',
		border: '1px solid #ccc',
		'-moz-border-radius': '6px',
		'-webkit-border-radius': '6px',
		textDecoration: 'none',
		padding: '3px 3px 3px 8px',
		width: options.width - 11,//minus must match left and right padding 
		display: 'block',
		height: options.buttonHeight,
		outline: '0'
	};
	var button_hover = {
		'borderColor':'#bbb',
		'background': '#f0f0f0',
		cursor: 'pointer',
		color: '#444'
	};
	var button_active = {
		color: '#aaa',
		background: '#000',
		border: '1px solid #ccc',
		borderBottom: 0,
		'-moz-border-radius-bottomleft': 0,
		'-webkit-border-bottom-left-radius': 0,
		'-moz-border-radius-bottomright': 0,
		'-webkit-border-bottom-right-radius': 0,
		outline: '0'
	};
	
	
	
	//button css
	button.css(button_default)
	.hover(
		function(){ 
			$(this).css(button_hover); 
		},
		function(){ 
		 if( !switcherpane.is(':animated') && switcherpane.is(':hidden') ){	$(this).css(button_default);  }
		}	
	)
	.find('.jquery-ui-themeswitcher-icon').css({
		float: 'right',
		width: '16px',
		height: '16px',
		background: 'url(http://ui.jquery.com//applications/themeroller/themeswitchertool/images/icon_color_arrow.gif) 50% 50% no-repeat',
	});	
	//pane css
	switcherpane.css({
		position: 'absolute',
		float: 'left',
		fontFamily: 'Trebuchet MS, Verdana, sans-serif',
		fontSize: '12px',
		background: '#000',
		color: '#fff',
		padding: '8px 3px 3px',
		border: '1px solid #ccc',
		'-moz-border-radius-bottomleft': '6px',
		'-webkit-border-bottom-left-radius': '6px',
		'-moz-border-radius-bottomright': '6px',
		'-webkit-border-bottom-right-radius': '6px',
		borderTop: 0,
		width: options.width-6//minus must match left and right padding
	})
	.find('ul').css({
		listStyle: 'none',
		margin: '0',
		padding: '0',
		overflow: 'auto',
		height: options.height
	}).end()
	.find('li').hover(
		function(){ 
			$(this).css({
				'borderColor':'#555',
				'background': 'url(http://ui.jquery.com//applications/themeroller/themeswitchertool/images/menuhoverbg.png) 50% 50% repeat-x',
				cursor: 'pointer'
			}); 
		},
		function(){ 
			$(this).css({
				'borderColor':'#111',
				'background': '#000',
				cursor: 'auto'
			}); 
		}
	).css({
		width: options.width-30,
		height: '',
		padding: '2px',
		margin: '1px',
		border: '1px solid #111',
		'-moz-border-radius': '4px',
		clear: 'left',
		float: 'left'
	}).end()
	.find('a').css({
		color: '#aaa',
		textDecoration: 'none',
		float: 'left',
		width: '100%',
		outline: '0 none !important'
	}).end()
	.find('img').css({
		float: 'left',
		border: '1px solid #333',
		margin: '0 2px'
	}).end()
	.find('.themeName').css({
		float: 'left',
		margin: '3px 0'
	}).end();
	


	$(this).append(button);
	$('body').append(switcherpane);
	switcherpane.hide();
	if( $.cookie(options.cookieName) || options.loadTheme ){
		var themeName = $.cookie(options.cookieName) || options.loadTheme;
		switcherpane.find('a:contains('+ themeName +')').trigger('click');
	}

	return this;
};




/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};