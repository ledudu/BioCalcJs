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

/// <reference path="../../../../libraries/jasmine/jasmine.js" />
/// <reference path="../../../../sources/scripts/helpers/DateFormatter.js" />
/// <reference path="../../../../sources/scripts/presenters/BirthdaySection.js" />

describe("BirthdaySection", function () {

    var view;
    var bioCalcPageData;
    var birthdaySection;

    beforeEach(function(){

        // Create page-data object

        bioCalcPageData = {};
        bioCalcPageData.birthdayChanged = jasmine.createSpyObj("Event", [
            "subscribe"
        ]);
        bioCalcPageData.secondBirthdayChanged = jasmine.createSpyObj("Event", [
            "subscribe"
        ]);

        // Create the view

        view = jasmine.createSpyObj("BirthdaySectionView", [
            "setBirthdayText",
            "setSecondBirthdayText"
        ]);

        // Create the object under test.

        birthdaySection = new lu.bioCalc.presenters.BirthdaySection(bioCalcPageData);
    });

    it("displays the birthday from page-data object into the view when it is changed.", function () {
        var onExternalBirthdayChangedSubscriber = null;
        bioCalcPageData.birthdayChanged.subscribe.andCallFake(function(subscriber){
            onExternalBirthdayChangedSubscriber = subscriber;
        });
        birthdaySection.view = view;
        view.setBirthdayText.reset();

        onExternalBirthdayChangedSubscriber();

        expect(view.setBirthdayText.callCount).toBe(1);
    });

    it("displays the second birthday from page-data object into the view when it is changed.", function () {
        var onExternalSecondBirthdayChangedSubscriber = null;
        bioCalcPageData.secondBirthdayChanged.subscribe.andCallFake(function(subscriber){
            onExternalSecondBirthdayChangedSubscriber = subscriber;
        });
        birthdaySection.view = view;
        view.setSecondBirthdayText.reset();

        onExternalSecondBirthdayChangedSubscriber();

        expect(view.setSecondBirthdayText.callCount).toBe(1);
    });
});