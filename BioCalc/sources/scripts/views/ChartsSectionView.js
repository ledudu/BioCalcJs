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

window.lu = window.lu || {};
lu.bioCalc = lu.bioCalc || {};
lu.bioCalc.mainPage = lu.bioCalc.mainPage || {};
lu.bioCalc.mainPage.pageSections = lu.bioCalc.mainPage.pageSections || {};

(function ($) {

    lu.bioCalc.mainPage.pageSections.ChartsSectionView = function () {

        var $biorhythmViewContainer = null;

        Object.defineProperty(this, "$biorhythmViewContainer", {
            enumerable: true,
            configurable: false,
            get: function () {
                return $biorhythmViewContainer;
            }
        });

        var $firstDayTextBox = null;

        Object.defineProperty(this, "$firstDayTextBox", {
            enumerable: true,
            configurable: false,
            get: function () {
                return $firstDayTextBox;
            }
        });

        var $firstDayLabel = null;

        Object.defineProperty(this, "$firstDayLabel", {
            enumerable: true,
            configurable: false,
            get: function () {
                return $firstDayLabel;
            }
        });

        var $lastDayTextBox = null;

        Object.defineProperty(this, "$lastDayTextBox", {
            enumerable: true,
            configurable: false,
            get: function () {
                return $lastDayTextBox;
            }
        });

        var $lastDayLabel = null;

        Object.defineProperty(this, "$lastDayLabel", {
            enumerable: true,
            configurable: false,
            get: function () {
                return $lastDayLabel;
            }
        });

        var $bioLegend = null;

        // --------------------------------------------------------------------------
        // presenter property
        // --------------------------------------------------------------------------

        var presenter = null;

        Object.defineProperty(this, "presenter", {
            enumerable: true,
            configurable: false,
            get: getPresenter,
            set: setPresenter
        });

        function getPresenter() {
            return presenter;
        }

        function setPresenter(value) {
            presenter = value;
        }

        // --------------------------------------------------------------------------
        // Functions
        // --------------------------------------------------------------------------

        this.getBiorhythmsViewBirthday = function () {
            return $biorhythmViewContainer.biorhythmView("getXDay");
        };

        this.setFirstDayTextBoxText = function (text) {
            $firstDayTextBox.val(text);
        };

        this.setFirstDayLabelText = function (text) {
            $firstDayLabel.text(text);
        };

        this.setLastDayTextBoxText = function (text) {
            $lastDayTextBox.val(text);
        };

        this.setLastDayLabelText = function (text) {
            $lastDayLabel.text(text);
        };

        this.setBiorhythmViewFirstDay = function (date) {
            $biorhythmViewContainer.biorhythmView("option", "firstDay", date);
        };

        this.getBiorhythmViewFirstDay = function () {
            return $biorhythmViewContainer.biorhythmView("option", "firstDay");
        };

        this.getBiorhythmViewLastDay = function () {
            return $biorhythmViewContainer.biorhythmView("getLastDay");
        };

        this.setBioLegendBiorhythms = function (biorhythms) {
            $bioLegend.biorhythmLegend("option", "biorhythms", biorhythms);
        };

        this.setBiorhythmViewBiorhythms = function (biorhythms) {
            $biorhythmViewContainer.biorhythmView("option", "biorhythms", biorhythms);
        };

        this.getFirstDayTextBoxDate = function () {
            return $firstDayTextBox.datepicker("getDate");
        };

        this.getLastDayTextBoxDate = function () {
            return $lastDayTextBox.datepicker("getDate");
        };

        // --------------------------------------------------------------------------
        // Events
        // --------------------------------------------------------------------------

        function onFirstDayLabelClick() {
            presenter.onFirstDayLabelClick.apply(this, arguments);
        }

        function onBeforeFirstDayDatePickerShow() {
            presenter.onBeforeFirstDayDatePickerShow.apply(this, arguments);
        }

        function onFirstDayDatePickerSelect() {
            presenter.onFirstDayDatePickerSelect.apply(this, arguments);
        }

        function onLastDayLabelClick() {
            presenter.onLastDayLabelClick.apply(this, arguments);
        }

        function onBeforeLastDayDatePickerShow() {
            presenter.onBeforeLastDayDatePickerShow.apply(this, arguments);
        }

        function onLastDayDatePickerSelect() {
            presenter.onLastDayDatePickerSelect.apply(this, arguments);
        }

        function onBiorhythmViewFirstDayChanged() {
            presenter.onBiorhythmViewFirstDayChanged.apply(this, arguments);
        }

        function onBiorhythmViewXDayIndexChanged() {
            presenter.onBiorhythmViewXDayIndexChanged.apply(this, arguments);
        }

        // --------------------------------------------------------------------------
        // Initializer
        // --------------------------------------------------------------------------

        (function initialize() {
            create$();
            initialize$();
        }());

        function create$() {
            $biorhythmViewContainer = $("#biorhythmViewContainer");
            $firstDayLabel = $(".first-day-label");
            $firstDayTextBox = $(".first-day-textbox");
            $lastDayLabel = $(".last-day-label");
            $lastDayTextBox = $(".last-day-textbox");
            $bioLegend = $("#bioLegend");
        }

        function initialize$() {

            $firstDayLabel.click(onFirstDayLabelClick);

            $firstDayTextBox.datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: "yy-mm-dd",
                showButtonPanel: true,
                showAnim: "",
                beforeShow: onBeforeFirstDayDatePickerShow,
                onSelect: onFirstDayDatePickerSelect
            });

            $lastDayLabel.click(onLastDayLabelClick);

            $lastDayTextBox.datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: "yy-mm-dd",
                showButtonPanel: true,
                showAnim: "",
                beforeShow: onBeforeLastDayDatePickerShow,
                onSelect: onLastDayDatePickerSelect
            });

            $biorhythmViewContainer.biorhythmView({
                width: 900,
                height: 200,
                firstDayChanged: onBiorhythmViewFirstDayChanged,
                xDayIndexChanged: onBiorhythmViewXDayIndexChanged
            });

            $bioLegend.biorhythmLegend();
        }
    };

}(jQuery));