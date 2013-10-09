// BioCalc
// Copyright (C) 2013 Last Unicorn
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

/**
 * Contains the logic of the main tool bar.
 * 
 * @returns {lu.bioCalc.MainToolbar}
 */
(function(helpDialog, aboutDialog, optionsDialog) {

    var $mainToolbar = null;
    var $helpButton = null;
    var $aboutButton = null;
    var $optionsButton = null;

    function onHelpButtonClick() {
        helpDialog.show();
    }

    function onAboutButtonClick() {
        aboutDialog.show();
    }

    function onOptionsButtonClick() {
        optionsDialog.show();
    }

    function createControls() {
        $mainToolbar = $("#mainToolbar");
        $helpButton = $("#helpButton");
        $aboutButton = $("#aboutButton");
        $optionsButton = $("#optionsButton");
    }

    function initializeControls() {
        $mainToolbar.buttonset();

        $helpButton.button({
            icons: {
                primary: "ui-icon-help"
            },
            text: true
        });
        $helpButton.click(onHelpButtonClick);

        $aboutButton.button({
            icons: {
                primary: "ui-icon-star"
            },
            text: true
        });
        $aboutButton.click(onAboutButtonClick);

        $optionsButton.button({
            icons: {
                primary: "ui-icon-gear"
            }
        });
        $optionsButton.click(onOptionsButtonClick);
    }

    (function initializa() {
        $(function() {
            createControls();
            initializeControls();
        });
    }());
}(lu.bioCalc.HelpDialog, lu.bioCalc.AboutDialog, lu.bioCalc.OptionsDialog));